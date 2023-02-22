<template>
        <div class="flex-container" >
            <b-card :title="title" style="width: 33rem;" class="mb-2">
              <b-card-subtitle>
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
                <b-icon icon="star-fill" v-if="rating >=5 " variant="warning"></b-icon>
                <b-icon icon="star-half" v-else-if="rating == 4.5" variant="warning"></b-icon>
                <b-icon icon="star" v-else variant="warning"></b-icon>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                <b-icon icon="download" variant="primary"></b-icon>&nbsp; 
                {{ ratingCount }}
              </b-card-subtitle>
              <b-card-img-lazy  :src="imgSource" img-alt="Image" img-top/>
              <b-card-text> {{ description }}</b-card-text>
              <b-button href="#" variant="danger">Buy</b-button>
              <b-button href="#" variant="secondary"><b-icon icon="bookmark-plus"></b-icon></b-button>
              <b-button href="#" class="addtocart" variant="secondary"><b-icon icon="cart-plus"></b-icon></b-button>
          </b-card>
        </div>
</template>

<script>
export default {
  name: 'BookCard',
  props: ['bookInfo'],
  data(){
    return {
      title: '',
      imgSource: '',
      description: '',
      rating: '',
      ratingCount: ''
    }
  },
  mounted(){ 
    this.title = this.bookInfo.title,
    this.imgSource = this.bookInfo.cover.large,
    this.description = this.bookInfo.description,
    this.rating = (() => {
      let stars = (Math.random() * 11 ) << 0;
      if(stars === 0) return 0;
      else return stars/2;
    })();
    this.ratingCount = Math.floor(Math.random() * (1000 - 200 + 1)) + 200;
  }
}
</script>
<style scoped>
.flex-container {
  display: flex;
}
</style>