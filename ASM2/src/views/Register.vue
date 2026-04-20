<template>
<div class="container mt-5">
  <h2>Đăng ký</h2>

  <input v-model="name" class="form-control mb-2">
  <input v-model="email" class="form-control mb-2">
  <input v-model="pass" type="password" class="form-control mb-2">

  <button class="btn btn-success" @click="register">Đăng ký</button>
</div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const pass = ref("");

function register(){
  alert("Đăng ký thành công");
}
</script>