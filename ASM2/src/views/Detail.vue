<template>
<div class="container mt-4" v-if="post">
  <h2 class="text-info">{{ post.title }}</h2>
  <img :src="post.image" class="w-50">
  <p class="mt-3">{{ post.content }}</p>
</div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { posts } from "../data/posts";

const route = useRoute();
const post = posts.find(p => p.id == route.params.id);
</script>