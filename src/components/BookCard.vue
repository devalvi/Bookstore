<template>
        <div>
            <b-card :title="title" :img-src="imgSource" img-alt="Image" img-top
            tag="article" style="width: 33rem;" class="mb-2">
            <b-card-text>
              {{ description }}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
            </b-card-text>
            <b-button href="#" variant="primary">Buy</b-button>
            <b-button href="#" class="addtocart" variant="primary">Add to cart</b-button>
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
      description: ''
    }
  },
  mounted(){
    this.title = this.bookInfo.title,
    this.imgSource = this.bookInfo.cover.large,
    this.description = this.bookInfo.description
  }
}
</script>
