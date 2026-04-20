<template>
<nav class="navbar navbar-expand-sm bg-light">
  <div class="container">
    <!-- <router-link class="navbar-brand" to="/">LOGO</router-link> -->

    <router-link class="navbar-brand" to="/">
    <img :src="logo" alt="Logo" height="40">
  </router-link>

  

    <ul class="navbar-nav">
      <li class="nav-item"><router-link class="nav-link" to="/">Trang chủ</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/writer">Đăng bài</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/login">Đăng nhập</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/register">Đăng ký</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/profile">Cá nhân</router-link></li>
    </ul>
  </div>
</nav>
</template>


<script setup>
import logo from '@/assets/images/logo.webp'
</script>
