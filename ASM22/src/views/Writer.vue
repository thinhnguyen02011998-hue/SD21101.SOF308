<script setup>
import { ref } from "vue";

const title = ref("");
const content = ref("");
const image = ref("");

const posts = ref([]);

const editIndex = ref(-1);

// chọn ảnh
function handleImage(e) {
  const file = e.target.files[0];
  if (file) {
    image.value = URL.createObjectURL(file);
  }
}

// CREATE
function addPost() {
  if (!title.value || !content.value) return;

  posts.value.push({
    title: title.value,
    content: content.value,
    image: image.value
  });

  resetForm();
}

// DELETE
function deletePost(index) {
  posts.value.splice(index, 1);
}

// EDIT
function editPost(index) {
  const p = posts.value[index];

  title.value = p.title;
  content.value = p.content;
  image.value = p.image;

  editIndex.value = index;
}

// UPDATE
function updatePost() {
  if (editIndex.value === -1) return;

  posts.value[editIndex.value] = {
    title: title.value,
    content: content.value,
    image: image.value
  };

  resetForm();
}

// RESET
function resetForm() {
  title.value = "";
  content.value = "";
  image.value = "";
  editIndex.value = -1;
}
</script>

<template>
  <div class="bg-dark text-light min-vh-100" style="font-family:'Times New Roman'; font-size:13px;">

    <!-- NAVBAR (giống index) -->
    <!-- <nav class="navbar navbar-expand-sm bg-light navbar-light sticky-top mb-3">
      <div class="container">
        <a class="navbar-brand">
          <img src="/src/assets/images/logo.webp" style="width:50px;" />
        </a>
      </div>
    </nav> -->

    <div class="container mt-4">

      <h3 class="text-info text-center fw-bold mb-3 fs-1">
        QUẢN LÍ BÀI VIẾT
      </h3>

      <!-- FORM -->
      <div class="card p-3 bg-dark border-light">

        <input v-model="title" class="form-control mb-2" placeholder="Tiêu đề">

        <textarea v-model="content" class="form-control mb-2" rows="5" placeholder="Nội dung"></textarea>

        <input type="file" class="form-control mb-2" @change="handleImage">

        <div v-if="image" class="mb-2">
          <img :src="image" width="200" class="rounded">
        </div>

        <!-- BUTTONS -->
        <div class="d-flex gap-2 mb-3">

          <button class="btn btn-primary flex-fill" @click="addPost">
            Tạo
          </button>

          <button class="btn btn-warning flex-fill" @click="updatePost">
            Sửa
          </button>

          <button class="btn btn-danger flex-fill" @click="deletePost(editIndex)" :disabled="editIndex === -1">
            Xóa
          </button>

          <button class="btn btn-secondary flex-fill" @click="resetForm">
            Reset
          </button>

        </div>

      </div>

      <!-- LIST POST -->
      <div class="mt-4">

        <div v-for="(p, index) in posts" :key="index" class="card bg-dark text-light border-light mb-2 p-2">

          <div class="d-flex gap-3">

            <img v-if="p.image" :src="p.image" width="100" height="80" class="rounded">

            <div class="flex-fill">
              <h5 class="text-info">{{ p.title }}</h5>
              <p class="mb-1">{{ p.content }}</p>

              <button class="btn btn-sm btn-warning me-2" @click="editPost(index)">
                Edit
              </button>

              <button class="btn btn-sm btn-danger" @click="deletePost(index)">
                Delete
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  </div>
</template>