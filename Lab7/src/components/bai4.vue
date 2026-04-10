<template>
  <div class="container d-flex justify-content-center">
    <!-- Nếu người dùng chưa đăng nhập, hiển thị form đăng nhập -->
    <LoginComponent 
      v-if="!isLoggedIn" 
      @loggedIn="handleLoginSuccess" 
    />

    <!-- Nếu người dùng đã đăng nhập, hiển thị component bình luận -->
    <CommentComponent 
      v-else 
      :username="loggedInUser" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import LoginComponent from './LoginComponent.vue';
import CommentComponent from './CommentComponent.vue';

// Quản lý trạng thái đăng nhập và tên người dùng
const isLoggedIn = ref(false);
const loggedInUser = ref('');

// Xử lý khi người dùng đăng nhập thành công (nhận sự kiện từ con)
function handleLoginSuccess(username) {
  loggedInUser.value = username;
  isLoggedIn.value = true;
}
</script>