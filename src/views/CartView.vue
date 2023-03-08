<template>
    <div>
        <div v-for="(book, index) in booksInCart" :key="index">
            <b-card :img-src="book.cover.large" img-alt="Card image" img-left class="mb-3">
                <b-card-text>
                    Some quick example text to build on the card and make up the bulk of the card's content.
                </b-card-text>
            </b-card>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            booksInCart: ''
        }
    },
    mounted() {
        Storage.prototype.setObj = function (key, obj) {
            return this.setItem(key, JSON.stringify(obj))
        }
        Storage.prototype.getObj = function (key) {
            return JSON.parse(this.getItem(key))
        }
        this.booksInCart = localStorage.getObj('cart')
        console.log(this.booksInCart)
    }
}
</script>