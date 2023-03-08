<!-- eslint-disable no-undef -->
<template>
  <div class="application">
    <main>
      <div>
        <b-form class="search align-items-center justify-content-center" inline @submit="search" action="/books">
          <label class="sr-only" for="inline-form-input-search">Search</label>
          <b-input-group class="mb-2 mr-sm-2 mb-sm-0 w-100 h-100">
            <b-form-input id="inline-form-input-search" size="lg" v-model="searchItem"
              :placeholder="placeholder"></b-form-input>
            <b-input-group-prepend is-text>
              <b-icon icon="search" variant="success"></b-icon>
            </b-input-group-prepend>
          </b-input-group>
        </b-form>
      </div><b-row>

        <BookCard v-for="(book, index) in books" :key="index" :uid="book.title" :bookInfo="book" />
      </b-row>
    </main>
    <footer>
      <span id="loader"></span>
    </footer>
  </div>
</template>

<script>
import BookCard from '../components/BookCard.vue'
import { SuperPlaceholder } from '../superplaceholder';
export default {
  name: 'App',
  components: { BookCard },
  data() {
    return { books: [], placeholder: '', searchItem: '' }
  },
  methods: {
    isElementInViewport() {
      let rect = document.querySelector('#loader').getBoundingClientRect();

      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
      );
    },
    bookIsModified() {

    }
    ,
    populateCards() {
      setInterval(() => {
        if (this.isElementInViewport()) {
          let len = this.books.length;
          for (let init = len; init < len + 6; init++) {
            this.books[init] = this.data.books[init]
          }
        }
      }, 2000)
    },
    setObject : ((key, obj) => localStorage.setItem(key, JSON.stringify(obj))),
    getObject: ((key) =>JSON.parse(localStorage.getItem(key))),
    async fetchBooks() {
      try {
        let url = location.hostname;
        let response = await fetch('http://' + url + ':8081/books.json');
        this.data = await response.json();
        if(localStorage){
          this.setObject('books', this.data.books)
        }
        this.books = this.getObject('books').slice(0, 9)
      } catch (error) {
        console.error(error);
      }
    },
    dynamicPlaceholder() {
      let sp = new SuperPlaceholder({
        placeholders: ["popular books", "famous authors", "collections"],
        preText: "Look for ",
        stay: 1500,
        speed: 90,
        element: '#inline-form-input-search'
      });
      sp.init();
    },
    search(event) {
      event.preventDefault();
      // when data arrives , show results
      if (this.searchItem != this.searchItem.toString.trim()) {
        // query searchItem while displaying spinner
      }
    }
  },
  mounted() {
    this.fetchBooks()
    this.dynamicPlaceholder()
    this.populateCards()
  }
}
/**
 * 
 */

</script>

<style>
@font-face {
  font-family: Poppins;
  src: url('../assets/poppins.ttf');
}

@font-face {
  font-family: Heebo;
  src: url('../assets/heebo.ttf')
}

#loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
  border: 3px solid;
  border-color: #065142 #0000 #065142 #0000;
  border-radius: 50%;
  box-sizing: border-box;
  animation: 1s rotate ease-in-out infinite;
}

#loader:before,
#loader:after {
  content: '';
  top: 0;
  left: 0;
  position: absolute;
  border: 10px solid transparent;
  border-bottom-color: #065142;
  transform: translate(-10px, 19px) rotate(-35deg);
}

#loader:after {
  border-color: #065142 #0000 #0000 #0000;
  transform: translate(32px, 3px) rotate(-35deg);
}

@keyframes rotate {
  100% {
    transform: rotate(360deg)
  }
}

.search {
  padding: 50px;
  font-size: x-small;
  font-family: poppins
}

.navigation {
  background-color: hsl(168, 86%, 17%);
}

.logo {
  width: 70px;
}

main {
  margin: auto;
  width: 90%;
  padding: 10px;
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
  border: dotted 1px black;
}

.sk-chase {}
</style>
