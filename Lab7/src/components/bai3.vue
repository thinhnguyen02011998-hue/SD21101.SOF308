<template>
  <div class="row justify-content-center mt-5">
    <div class="col-sm-5 border p-4 bg-light shadow-sm">
      <h3 class="text-center mb-4">Form Đăng ký</h3>
      <form @submit.prevent="register">
        <div class="mb-3">
          <label class="form-label">Họ tên:</label>
          <input type="text" class="form-control" v-model="user.name" placeholder="Nhập họ tên" required>
        </div>

        <div class="mb-3">
          <label class="form-label">Email:</label>
          <input type="email" class="form-control" v-model="user.email" placeholder="Nhập email" required>
        </div>

        <div class="mb-3">
          <label class="form-label">Mật khẩu:</label>
          <input type="password" class="form-control" v-model="user.password" placeholder="Nhập mật khẩu" required>
        </div>

        <div class="mb-3">
          <label class="form-label">Ngày sinh:</label>
          <input type="date" class="form-control" v-model="user.dob" required>
        </div>

        <div class="mb-3">
          <label class="form-label d-block">Giới tính:</label>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" v-model="user.gender" value="Nam" id="male">
            <label class="form-check-label" for="male">Nam</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" v-model="user.gender" value="Nữ" id="female">
            <label class="form-check-label" for="female">Nữ</label>
          </div>
        </div>

        <div class="mb-3">
          <label class="form-label d-block">Ngôn ngữ:</label>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" v-model="user.languages" value="Tiếng Việt" id="vi">
            <label class="form-check-label" for="vi">Tiếng Việt</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" v-model="user.languages" value="Tiếng Anh" id="en">
            <label class="form-check-label" for="en">Tiếng Anh</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" v-model="user.languages" value="Tiếng Nhật" id="jp">
            <label class="form-check-label" for="jp">Tiếng Nhật</label>
          </div>
        </div>

        <button type="submit" class="btn btn-primary w-100">Đăng ký</button>
      </form>
    </div>

    <div v-if="submitted" class="col-sm-5 ms-md-4 border p-4 bg-white shadow-sm mt-4 mt-md-0">
      <h3 class="text-center mb-4 text-success">Thông tin đã đăng ký</h3>
      <ul class="list-group">
        <li class="list-group-item"><strong>Họ tên:</strong> {{ user.name }}</li>
        <li class="list-group-item"><strong>Email:</strong> {{ user.email }}</li>
        <li class="list-group-item"><strong>Ngày sinh:</strong> {{ user.dob }}</li>
        <li class="list-group-item"><strong>Giới tính:</strong> {{ user.gender }}</li>
        <li class="list-group-item">
          <strong>Ngôn ngữ:</strong> {{ user.languages.join(', ') }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Biến kiểm soát việc hiển thị kết quả
const submitted = ref(false);

// Đối tượng chứa toàn bộ thông tin người dùng
const user = ref({
  name: '',
  email: '',
  password: '',
  dob: '',
  gender: 'Nam', // Giá trị mặc định cho radio
  languages: []   // Mảng chứa các giá trị checkbox
});

// Hàm xử lý khi nhấn nút Đăng ký
const register = () => {
  // Hiển thị phần kết quả
  submitted.value = true;
};
</script>