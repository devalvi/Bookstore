<!-- eslint-disable no-undef -->
/**
>> Mobile design
- center search bar
- remove unwanted navbar items 
- change navbar theme and photo logo background color
- create about page
- remove padding from card images
- resize buy , cart & favourites button
- create bottom screen modal for add/remove from favourites
- 
*/
<template>
  <div class="application">
    <header>
      <b-navbar class="navigation" toggleable="lg" type="dark">
        <b-navbar-brand href="/"><img class="logo" src="./assets/logo.jpg" alt="logo">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/cart">cart</b-nav-item>
            <b-nav-item href="#">favourites</b-nav-item>
            <b-nav-item href="#">about</b-nav-item>
            <b-nav-item href="#">profile</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>

    <main>
      <div>
        <b-form class="search align-items-center justify-content-center" inline @submit="search" action="/books">
          <label class="sr-only" for="inline-form-input-search">Search</label>
          <b-input-group class="mb-2 mr-sm-2 mb-sm-0 w-100 h-100">
            <b-input-group-prepend is-text>
              <b-icon icon="search" variant="success"></b-icon>
            </b-input-group-prepend>
            <b-form-input id="inline-form-input-search" size="lg" v-model="searchItem" :placeholder="placeholder"></b-form-input>
          </b-input-group>
        </b-form>
      </div>
      <BookCard v-for="(book, index) in books" :key="index" :bookInfo="book" />
    </main>
    <footer></footer>
  </div>
</template>

<script>
import BookCard from './components/BookCard.vue'
import axios from 'axios';
import { SuperPlaceholder } from './superplaceholder';
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
        stay: 1000,
        speed: 100,
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
  src: url('./assets/poppins.ttf');
}
@font-face {
  font-family: 'PTSans';
  src: url('./assets/ptsans.ttf');
}
@font-face {
  font-family: Heebo;
  src: url('./assets/heebo.ttf')
}
.application {
  font-family: PTSans;
}
.search {
  padding: 50px;
  font-size: x-small;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
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

#nav-collapse {
  text-transform: capitalize;
  font-size: large;
  font-weight: larger;
}
</style>
