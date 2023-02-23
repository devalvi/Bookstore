<template>
  <div class="flex-container">
    <b-card style="width: 33rem;" class="mb-2">
      <b-card-img-lazy :src="imgSource" img-alt="Image" img-top />
      <b-card-text class="book-title">{{ title }}</b-card-text>
      <b-card-text class="description"> {{ description }}</b-card-text>
      <b-card-subtitle class="stars">
        <b-icon icon="star-fill" v-if="rating >= 1" variant="warning"></b-icon>
        <b-icon icon="star-half" v-else-if="rating == 0.5" variant="warning"></b-icon>
        <b-icon v-else icon="star" variant="warning"></b-icon>
        <b-icon icon="star-fill" v-if="rating >= 2" variant="warning"></b-icon>
        <b-icon icon="star-half" v-else-if="rating == 1.5" variant="warning"></b-icon>
        <b-icon icon="star" v-else variant="warning"></b-icon>
        <b-icon icon="star-fill" v-if="rating >= 3" variant="warning"></b-icon>
        <b-icon icon="star-half" v-else-if="rating == 2.5" variant="warning"></b-icon>
        <b-icon icon="star" v-else variant="warning"></b-icon>
        <b-icon icon="star-fill" v-if="rating >= 4" variant="warning"></b-icon>
        <b-icon icon="star-half" v-else-if="rating == 3.5" variant="warning"></b-icon>
        <b-icon icon="star" v-else variant="warning"></b-icon>
        <b-icon icon="star-fill" v-if="rating >= 5" variant="warning"></b-icon>
        <b-icon icon="star-half" v-else-if="rating == 4.5" variant="warning"></b-icon>
        <b-icon icon="star" v-else variant="warning"></b-icon>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <span class="download_count"><b-icon icon="download" variant="primary"></b-icon>&nbsp;
          {{ ratingCount }}</span>
      </b-card-subtitle>
      <br />
      <b-button class="buy-btn" href="#">BUY NOW</b-button>
      <b-button class="bookmark-btn" href="#"><b-icon icon="bookmark-plus"></b-icon></b-button>
      <b-button class="cart-btn" href="#"><b-icon icon="cart-plus"></b-icon></b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'BookCard',
  props: ['bookInfo'],
  data() {
    return {
      title: '',
      imgSource: '',
      description: '',
      rating: '',
      ratingCount: ''
    }
  },
  mounted() {
    this.title = this.bookInfo.title,
      this.imgSource = this.bookInfo.cover.large,
      this.description = this.bookInfo.description,
      this.rating = (() => {
        let stars = (Math.random() * 11) << 0;
        if (stars === 0) return 0;
        else return stars / 2;
      })();
    this.ratingCount = Math.floor(Math.random() * (1000 - 200 + 1)) + 200;
  }
}
</script>
<style scoped>
.flex-container,
.stars {
  display: flex;
}

.download_count,
.bookmark-btn,
.cart-btn {
  position: absolute;
}

.download_count {
  right: 5%;
  ;
}

.buy-btn, .cart-btn, .bookmark-btn {
  background-color: hsl(168, 86%, 17%);
}

.cart-btn {
  right: 15%;
}

.bookmark-btn {
  right: 5%;
}
.book-title {
  text-transform: uppercase;
  font-family: Poppins;
  padding-top: 10px;
  font-size: large;
  font-weight: 500;
}
.description {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>