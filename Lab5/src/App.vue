<script setup>
import HelloWorld from './components/HelloWorld.vue'
import UserReactive from './components/UserReactive.vue'
import demo from './components/demo.vue'
import Bai1 from './components/Bai1.vue'
import Bai2 from './components/Bai2.vue'
import Bai3 from './components/Bai3.vue'



import { ref } from 'vue'
import Bai4CreatePost from './components/Bai4CreatePost.vue'
import Bai4PostList from './components/Bai4PostList.vue'

const posts = ref([])

const addPost = (post) => {
  // posts.value.push(post)
  posts.value.unshift(post)
}


</script>




<template>
  <!-- <HelloWorld /> -->
   <!-- <UserReactive /> -->
    <!-- <demo /> -->
   <!-- <Bai1 /> -->
    <!-- <Bai2 /> -->
     <!-- <Bai3 /> -->




      <div class="container">
    <h1>Ứng dụng Blog đơn giản</h1>

    <Bai4CreatePost @add-post="addPost" />

    <Bai4PostList :posts="posts" />
  </div>




</template>


<style>
#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>