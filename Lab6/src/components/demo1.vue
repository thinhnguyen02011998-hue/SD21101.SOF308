
//v-if

<template>
    <div>
        <button @click="step++">Bước tiếp theo</button>
        <p v-if="step === 1">Bước đầu</p>
        <p v-else-if="step === 2">Bước kế</p>
        <p v-else>Bước cuối</p>
    </div>
    

</template>

<script setup>
import { ref } from 'vue';
const step = ref(1);

</script>

<style lang ="scss" scoped>

</style>