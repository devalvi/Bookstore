<template>
    <div class="container">
        <div class="upper"></div>
        <div class="center-card"></div>
        <div class="lower"></div>
    </div>
</template>
<script>
export default {
    name: 'AboutView',
    data (){
        return {}
    }
}
</script>
<style scoped>
* {
    margin: 0;
}
.container {
    padding: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.upper , .lower {
    width: 100vw;
    height: 50vh;
}
.upper {
    background-color: rgb(0, 79, 17);
}
.lower {
    background-color: #730c0f;
}
.center-card {
    position: absolute;
    left: 30%;
    top: 45%;
    width: 250px;
    height: 250px;
    background-color: white;
    border-radius: 15px;
}
</style>