<template>
    <div class="container">
        <div class="left">
            <div class="wrap">
                <div class="circle">
                    <img src='../assets/photo.jpg' alt=''>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="heading">Follow me on my socials</div>
            <!-- <div class="inner">
                <div>
                    <b-icon class="iconic mx-3" font-scale="1.4" icon="github"></b-icon>
                    <b-link href="https://github.com/devalvi/">devalvi</b-link>
                </div>
                <div>
                    <b-icon class="iconic mx-3" font-scale="1.4" icon="twitter"></b-icon>
                    <b-link href="https://twitter.com/dev_alvi">dev_alvi</b-link>
                </div>
                <div>
                    <b-icon class="iconic mx-3" font-scale="1.4" icon="linkedin"></b-icon>
                    <b-link href="https://www.linkedin.com/in/ian-aluvi-868a5b21b">Ian Aluvi</b-link>
                </div>
                <div>
                    <b-icon class="iconic mx-3" font-scale="1.4" icon="telephone-fill"></b-icon>
                    <b-link href="tel:+254708216669">+254708216669</b-link><br/>
                </div>
            </div> -->
        </div>
    </div>
</template>
<script>
export default {
    name: 'AboutView',
    data() {
        return {}
    }
}
</script>
<style scoped>
* {
    margin: 0;
    box-sizing: border-box;
}
.container {
    padding: 0;
    min-width: 100vw;
    min-height: 100vh;
    display: grid;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
}

.left, .right {
    width: 50vw;
    height: 100vh
}
.right {
    justify-content: center;
    align-items: center;
}
.heading {
    font-family: 'National-bold';
}
.inner {
    position: relative;
    display: flex;
    flex-direction: column;
    inset: 300px;
    background: rgb(255, 255, 255);
    border-radius: 16px;
    box-shadow: 0 4px 100px rgba(0, 0, 0, 0.331);
    backdrop-filter: blur(1.5px);
    -webkit-backdrop-filter: blur(4.5px);
    width: 450px;
    height: 450px;
    justify-content: center;
    align-items: center;
    font-variant-caps: all-small-caps;
}

.wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.circle {
    background: plum;
    width: 600px;
    height: 600px;
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
    overflow: hidden;
    animation: morph 3s cubic-bezier(1, 1, 0, 0) infinite;
}
.circle img {
    width: 100%;
}


@keyframes morph {

    0%,
    100% {
        border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%;
    }

    34% {
        border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
    }

    67% {
        border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
    }
}</style>