<template>
    <div class="container">
        <div class="left">e</div>
        <div class="right">r</div>
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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.left {
    width: 50vw;
    background-color: red;
    height: 100vh
}

.right {
    background-color: rgb(52, 74, 13);
    width: 50vw;
    height: 100vh;
}
</style>