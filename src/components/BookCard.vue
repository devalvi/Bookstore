<template>
  <div class="flex-container">
    <b-card style="width: 33rem;" class="mb-4">
      <b-card-text v-html="cost">{{ cost }}</b-card-text>
      <b-card-img-lazy :src="imgSource" img-alt="Image" class="pb-2 px-2" img-top />
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
      <b-button class="buy-btn" href="#">SHOP NOW</b-button>
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
      ratingCount: '',
      cost: ''
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
    this.cost = (() => {
      let cost = Math.floor(Math.random()*(99-2+1)+2).toString().concat('.') + Math.floor(Math.random()*(99-2+1)+2);
      return '<span style="color: hsla(45, 2%, 41%, 0.681)">Ksh </span>' + '<span style="color: #B12704; font-family: Poppins">' +cost+ '</span>';
    })()
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
  font-family: 'National-bold';
}

.cart-btn {
  right: 15%;
}

.bookmark-btn {
  right: 5%;
}
.book-title {
  text-transform: uppercase;
  font-family: 'National-bold';
  padding-top: 10px;
  font-size: 120% !important;
  font-optical-sizing: none;
}
.description {
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: Poppins;
}
</style>