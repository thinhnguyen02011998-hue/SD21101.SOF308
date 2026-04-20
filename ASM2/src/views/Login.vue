<template>
<div class="container mt-5">
  <h2>Đăng nhập</h2>

  <input v-model="user" class="form-control mb-2">
  <input v-model="pass" type="password" class="form-control mb-2">

  <button class="btn btn-primary" @click="login">Login</button>
</div>
</template>

<script setup>
import { ref } from "vue";

const user = ref("");
const pass = ref("");

function login(){
  if(user.value=="admin" && pass.value=="123"){
    alert("OK");
  }else{
    alert("Sai");
  }
}
</script>