<!-- eslint-disable no-undef -->
<template>
  <div class="application">
    <main>
      <div>
        <b-form class="search align-items-center justify-content-center" inline @submit="search" action="/books">
          <label class="sr-only" for="inline-form-input-search">Search</label>
          <b-input-group class="mb-2 mr-sm-2 mb-sm-0 w-100 h-100">
            <b-form-input id="inline-form-input-search" size="lg" v-model="searchItem" :placeholder="placeholder"></b-form-input>
            <b-input-group-prepend is-text>
              <b-icon icon="search" variant="success"></b-icon>
            </b-input-group-prepend>
          </b-input-group>
        </b-form>
      </div>
      <BookCard v-for="(book, index) in books" :key="index" :bookInfo="book" />
    </main>
    <footer>
    </footer>
  </div>
</template>

<script>
import BookCard from '../components/BookCard.vue'
import axios from 'axios';
import { SuperPlaceholder } from '../superplaceholder';
export default {
  name: 'App',
  components: { BookCard },
  data() {
    return { books: [], placeholder: '', searchItem: '' }
  },
  methods: {
    async fetchBooks() {
      try {
        let url = window.location.hostname;
        let response = await axios.get('http://' + url + ':3031/books');
        this.books = response.data.books.slice(0, 20)
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
      console.log(this.searchItem)
      // when data arrives , show results
      if (this.searchItem != this.searchItem.toString.trim()) {
        // query searchItem while displaying spinner
      }
    }
  },
  mounted() {
    this.fetchBooks()
    this.dynamicPlaceholder()
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

</style>
