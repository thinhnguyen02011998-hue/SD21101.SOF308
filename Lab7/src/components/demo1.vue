<template>
    <div>
        <input type="number" v-model.lazy="number"><br>
        <input type="text" v="model=number2" v-on:keyup.up.ctrl="number2++" v-on:keydown.down.shift="number2--">
        <hr>
        Số 1: <h4>{{ number }}</h4><br>
        Số 2: <h4>{{ number2 }}</h4>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const number = ref(0);
const number2 = ref(0);

const submit = () => {
    //console.log(number2.value)
    alert(number2.value);
}
</script>

<style lang="scss" scoped>

</style>