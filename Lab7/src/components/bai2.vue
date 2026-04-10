<template>
  <div class="row justify-content-center mt-5">
    <!-- Giao diện Form Đăng nhập (Hiển thị khi chưa đăng nhập) -->
    <div v-if="!isLoggedIn" class="p-5 col-sm-4 border bg-light shadow-sm">
      <h3 class="text-center">Form Đăng nhập</h3>
      <form @submit.prevent="login">
        <div class="mb-3 mt-3">
          <label>Email:</label>
          <input 
            type="email" 
            class="form-control" 
            v-model="email" 
            placeholder="Nhập email"
          >
          <!-- Hiển thị lỗi email bằng v-if -->
          <p v-if="emailError" style="color: red;">{{ emailError }}</p>
        </div>

        <div class="mb-3">
          <label>Mật khẩu:</label>
          <input 
            type="password" 
            class="form-control" 
            v-model="password" 
            placeholder="Nhập mật khẩu"
          >
          <!-- Hiển thị lỗi mật khẩu bằng v-if -->
          <p v-if="passwordError" style="color: red;">{{ passwordError }}</p>
        </div>

        <button type="submit" class="btn btn-primary w-100">Đăng nhập</button>
      </form>
    </div>

    <!-- Giao diện Chào mừng (Hiển thị sau khi đăng nhập thành công) -->
    <div v-else class="p-5 col-sm-5 border bg-light text-center shadow-sm">
      <h3>Chào mừng, {{ email }}!</h3>
      <button @click="logout" class="btn btn-primary mt-3">Đăng xuất</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Khai báo các biến trạng thái
const isLoggedIn = ref(false);
const email = ref('');
const password = ref('');
const emailError = ref('');
const passwordError = ref('');

// Biểu thức chính quy kiểm tra định dạng email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Hàm xử lý Đăng nhập
const login = () => {
  // Reset thông điệp lỗi trước khi kiểm tra mới
  emailError.value = '';
  passwordError.value = '';

  // Validate email
  if (!email.value) {
    emailError.value = 'Email là bắt buộc.';
  } else if (!emailRegex.test(email.value)) {
    emailError.value = 'Vui lòng nhập email hợp lệ.';
  }

  // Validate mật khẩu
  if (!password.value) {
    passwordError.value = 'Mật khẩu là bắt buộc.';
  }

  // Nếu không có lỗi, xử lý đăng nhập thành công
  if (!emailError.value && !passwordError.value) {
    isLoggedIn.value = true;
  }
}

// Hàm xử lý Đăng xuất
const logout = () => {
  isLoggedIn.value = false;
  // Xóa trắng dữ liệu form khi đăng xuất
  email.value = '';
  password.value = '';
  emailError.value = '';
  passwordError.value = '';
}
</script>