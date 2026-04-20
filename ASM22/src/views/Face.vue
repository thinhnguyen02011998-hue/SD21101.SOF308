<template>
  <div class="bg-dark text-light min-vh-100" style="font-family:'Times New Roman'; font-size:13px;">

    <!-- TITLE -->
    <div class="container mt-4">
      <h2 class="text-info text-center fw-bold fs-1">
        THÔNG TIN CÁ NHÂN
      </h2>

      <div class="card bg-light text-dark p-4 mt-3">

        <!-- AVATAR -->
        <div class="text-center mb-3">

          <input type="file" id="fileInput" hidden @change="previewImage">

          <label for="fileInput"
            class="d-inline-block rounded-circle border overflow-hidden"
            style="width:150px; height:150px; cursor:pointer;">

            <img :src="avatar" class="w-100 h-100 object-fit-cover">
          </label>

          <div class="text-muted mt-2">Nhấn vào ảnh để chọn</div>
        </div>

        <!-- FORM -->
        <div class="mb-2">
          <label>Họ và tên</label>
          <input v-model="user.name" class="form-control">
        </div>

        <div class="mb-2">
          <label>Email</label>
          <input v-model="user.email" class="form-control">
        </div>

        <div class="mb-2">
          <label>Mật khẩu</label>
          <input v-model="user.password" type="password" class="form-control">
        </div>

        <div class="mb-2">
          <label>Nhập lại mật khẩu</label>
          <input v-model="confirmPassword" type="password" class="form-control">
        </div>

        <!-- BUTTONS -->
        <div class="d-flex gap-2 mt-3">

          <button class="btn btn-primary flex-fill" @click="saveUser">
            Lưu / Thêm
          </button>

          <button class="btn btn-warning flex-fill" @click="updateUser">
            Sửa
          </button>

          <button class="btn btn-danger flex-fill" @click="deleteUser">
            Xóa
          </button>

          <button class="btn btn-secondary flex-fill" @click="resetForm">
            Reset
          </button>

        </div>

        <!-- DISPLAY -->
        <div class="mt-4 p-3 border rounded bg-white text-dark">
          <h5>Thông tin đã lưu</h5>

          <div class="d-flex gap-3 align-items-center">

            <img :src="avatar" width="80" height="80" class="rounded-circle">

            <div>
              <p><b>Họ tên:</b> {{ user.name }}</p>
              <p><b>Email:</b> {{ user.email }}</p>
            </div>

          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const avatar = ref("https://via.placeholder.com/150");

const user = ref({
  name: "",
  email: "",
  password: ""
});

const confirmPassword = ref("");

// LOAD LOCALSTORAGE
onMounted(() => {
  const data = localStorage.getItem("user");
  if (data) {
    const parsed = JSON.parse(data);
    user.value = parsed;
    avatar.value = parsed.avatar || avatar.value;
  }
});

// UPLOAD IMAGE
function previewImage(e) {
  const file = e.target.files[0];
  if (file) {
    avatar.value = URL.createObjectURL(file);
  }
}

// SAVE / ADD
function saveUser() {
  if (user.value.password !== confirmPassword.value) {
    alert("Mật khẩu không khớp!");
    return;
  }

  localStorage.setItem("user", JSON.stringify({
    ...user.value,
    avatar: avatar.value
  }));

  alert("Đã lưu thông tin!");
}

// UPDATE
function updateUser() {
  localStorage.setItem("user", JSON.stringify({
    ...user.value,
    avatar: avatar.value
  }));

  alert("Đã cập nhật!");
}

// DELETE
function deleteUser() {
  localStorage.removeItem("user");

  user.value = { name: "", email: "", password: "" };
  avatar.value = "https://via.placeholder.com/150";
  confirmPassword.value = "";

  alert("Đã xóa!");
}

// RESET
function resetForm() {
  user.value = { name: "", email: "", password: "" };
  confirmPassword.value = "";
  avatar.value = "https://via.placeholder.com/150";
}
</script>