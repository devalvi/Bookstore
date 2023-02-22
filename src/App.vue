<!-- eslint-disable no-undef -->
/**
 TODO
 - add lazy loading to images*
- make the cards responsive
- add search bar *
- add stars*
- space buy button, add to cart and add to favorites button
- implement search feature  
- create template for book preview
*/
<template>
  <div class="application">
    <header>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="/home"><img class="logo" src="./assets/logo.jpg" alt="logo">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">cart</b-nav-item>
            <b-nav-item href="#">favourites</b-nav-item>
            <b-nav-item href="#">about</b-nav-item>
            <b-nav-item href="#">profile</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>

    <main>
      <div>
        <b-form inline @submit="search" action="/books">
          <label class="sr-only" for="inline-form-input-search">Search</label>
          <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
            <b-input-group-prepend is-text>
              <b-icon icon="search" variant="success"></b-icon>
            </b-input-group-prepend>
            <b-form-input id="inline-form-input-search" v-model="searchItem" :placeholder="placeholder"></b-form-input>
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

.application {
  font-family: Poppins
}

.logo {
  width: 70px;
}

main {
  margin: auto;
  width: 90%;
  padding: 10px;
}

.addtocart {
  direction: ltr
}
</style>
