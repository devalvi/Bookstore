<!-- eslint-disable no-undef -->
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
       <BookCard v-for="(book, index) in books" :key="index" :bookInfo="book"/>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import BookCard from './components/BookCard.vue'
import axios from 'axios';
export default {
  name: 'App',
  components: { BookCard},
  data(){
    return { books: []}
  },
  methods: {
    async fetchBooks(){
      try {
        let url = window.location.hostname;
        const response = await axios.get('http://'+ url +':3030/books');
        this.books = response.data.books
      } catch (error) {
        console.error(error);
}
    }},
    mounted(){
      this.fetchBooks()
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
