<script setup>
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <!-- <HelloWorld /> -->

   <div>
    <h1>Vue Router Lab 8</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/blog">Blog</RouterLink>
    </nav>
    <RouterView />
  </div>

</template>
