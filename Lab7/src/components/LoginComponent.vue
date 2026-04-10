<template>
  <div class="m-5 col-sm-3 border p-4 bg-light shadow-sm">
    <h2>Đăng Nhập</h2>
    <form @submit.prevent="handleLogin">
      <div class="mb-3">
        <label for="username">Tên đăng nhập:</label>
        <input 
          type="text" 
          class="form-control" 
          id="username" 
          v-model="username" 
          placeholder="Nhập tên đăng nhập" 
        />
      </div>

      <div class="mb-3">
        <label for="password">Mật khẩu:</label>
        <input 
          type="password" 
          class="form-control" 
          id="password" 
          v-model="password" 
          placeholder="Nhập mật khẩu" 
        />
      </div>

      <button type="submit" class="btn btn-primary w-100">Đăng nhập</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Khai báo biến lưu dữ liệu form đăng nhập
const username = ref('');
const password = ref('');

// Khai báo sự kiện phát ra
const emit = defineEmits(['loggedIn']);

// Hàm xử lý đăng nhập
function handleLogin() {
  if (username.value && password.value) {
    // Phát sự kiện 'loggedIn' kèm theo tên người dùng
    emit('loggedIn', username.value);
  } else {
    alert("Vui lòng nhập đầy đủ tên và mật khẩu!");
  }
}
</script>