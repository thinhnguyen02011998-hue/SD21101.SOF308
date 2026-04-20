<template>
<div class="container mt-4">
  <h2 class="text-info">Quản lí bài viết</h2>

  <input v-model="title" class="form-control mb-2" placeholder="Tiêu đề">
  <textarea v-model="content" class="form-control mb-2"></textarea>

  <button class="btn btn-primary" @click="addPost">Thêm</button>

  <ul class="mt-3">
    <li v-for="p in posts" :key="p.id">{{ p.title }}</li>
  </ul>
</div>
</template>

<script setup>
import { ref } from "vue";
import { posts } from "../data/posts";

const title = ref("");
const content = ref("");

function addPost() {
  posts.push({
    id: Date.now(),
    title: title.value,
    content: content.value,
    image: ""
  });
}
</script>