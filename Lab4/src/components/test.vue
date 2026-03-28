<template>
    <div>
        <button @click="show = !show">Click</button>

        <h1 v-if="show" v-html="message"></h1>
        <hr>
        <h2 v-show="show" v-html="message"></h2>
    </div>

    <div>
        <input type="text" v-model="message">
    </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('FPT POLYTECHNIC')
const show = ref(true)
</script>

<style scoped>
</style>