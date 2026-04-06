<template>
  <div>
    

    <!--  combobox chọn màu -->
        <select v-model="selectedColor">
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
        </select>



    <h2>Danh sách bài viết</h2>
    <div v-for="(post, index) in posts" :key="index" :class="{ 'highlighted': post.title.length > 20 }"
      :style="{ backgroundColor: post.backgroundColor, color: post.textColor }" class="post">
      <h3 class="text-success">{{ post.title }}</h3>
      <h4 class="text-danger">{{ post.author }}</h4>

      <p :style="{ color: selectedColor }">{{ post.content }}</p>

      

    </div>
  </div>
</template>


<script setup>

import { defineProps, ref } from "vue";

const selectedColor = ref("black");

// Định nghĩa props
defineProps({
  posts: {
    type: Array,
    required: true,
  },
});
</script>


<style>
.post {
  padding: 20px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.highlighted {
  border: 2px solid lightgray;
}
.text-danger {
  color:red;
}
</style>