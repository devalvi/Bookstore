<template>
  <div>
    <header>
      <b-navbar class="navigation" toggleable="lg" type="dark">
        <b-navbar-brand href="/"><img class="logo" src="./assets/logo.jpg" alt="logo">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/cart">cart</b-nav-item>
            <b-nav-item href="/favourites">favourites</b-nav-item>
            <b-nav-item href="/about">about</b-nav-item>
            <b-nav-item href="/profile">profile</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
    <router-link to="/"></router-link>
    <router-link to="/about"></router-link>
    <router-view></router-view>
  </div>
</template>
<style>
@font-face {
  font-family: 'National-bold';
  src: url('./assets/national-bold.ttf');
}
header {
  font-family: 'National-bold';
}
#nav-collapse {
  text-transform: uppercase;
  font-size: large;
  font-weight: larger;
}
</style>