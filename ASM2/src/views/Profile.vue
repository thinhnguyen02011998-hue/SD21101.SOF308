<template>
<div class="container mt-5">
  <h2>Thông tin cá nhân</h2>

  <input type="file" @change="preview">
  <img :src="img" width="150">

  <input v-model="name" class="form-control mt-2">
</div>
</template>

<script setup>
import { ref } from "vue";

const img = ref("https://via.placeholder.com/150");
const name = ref("Nguyễn Văn Tèo");

function preview(e){
  img.value = URL.createObjectURL(e.target.files[0]);
}
</script>