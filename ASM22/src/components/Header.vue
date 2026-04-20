<template>
<nav class="navbar navbar-expand-sm bg-light navbar-light sticky-top mb-3">
  <div class="container">

    <img src="/src/assets/images/logo.webp" style="width:50px" />

    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu"></button>

    <div class="collapse navbar-collapse" id="menu">

      <ul class="navbar-nav me-auto">

        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Trang chủ</RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink class="nav-link" to="/chitiet">Giới thiệu nhân vật</RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink class="nav-link" to="/writer">Đăng bài viết</RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink class="nav-link" to="/face">Profile</RouterLink>
        </li>

      </ul>

      <!-- USER AREA -->
      <ul class="navbar-nav align-items-center gap-2">

        <li v-if="!user" class="nav-item">
          <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#authModal">
            Tài khoản
          </a>
        </li>

        <li v-else class="nav-item d-flex align-items-center gap-2">
          <span class="fw-bold text-primary">
            {{ user.name }}
          </span>
          <button class="btn btn-sm btn-danger" @click="logout">
            Đăng xuất
          </button>
        </li>

      </ul>

    </div>
  </div>
</nav>


<!-- MODAL -->
<div class="modal fade" id="authModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title">TÀI KHOẢN</h5>
        <button class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div class="modal-body">

        <!-- TAB -->
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" href="#register">Đăng ký</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#login">Đăng nhập</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#forgot">Quên mật khẩu</a>
          </li>
        </ul>

        <div class="tab-content mt-3">

          <!-- REGISTER -->
          <div class="tab-pane fade show active" id="register">

            <input v-model="reg.name" class="form-control mb-2" placeholder="Họ và tên">
            <input v-model="reg.email" class="form-control mb-2" placeholder="Email">
            <input v-model="reg.pass" type="password" class="form-control mb-2" placeholder="Mật khẩu">

            <button class="btn btn-primary w-100" @click="register">
              Đăng ký
            </button>

          </div>

          <!-- LOGIN -->
          <div class="tab-pane fade" id="login">

            <input v-model="login.email" class="form-control mb-2" placeholder="Email">
            <input v-model="login.pass" type="password" class="form-control mb-2" placeholder="Mật khẩu">

            <button class="btn btn-success w-100" @click="loginUser">
              Đăng nhập
            </button>

          </div>

          <!-- FORGOT -->
          <div class="tab-pane fade" id="forgot">

            <input v-model="forgot.email" class="form-control mb-2" placeholder="Nhập email">

            <button class="btn btn-warning w-100" @click="forgotPass">
              Lấy lại mật khẩu
            </button>

          </div>

        </div>

      </div>

    </div>
  </div>
</div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const user = ref(null);

// register
const reg = ref({
  name: "",
  email: "",
  pass: ""
});

// login
const login = ref({
  email: "",
  pass: ""
});

// forgot
const forgot = ref({
  email: ""
});

// LOAD USER
onMounted(() => {
  const saved = localStorage.getItem("user");
  if (saved) user.value = JSON.parse(saved);
});

// REGISTER
function register() {
  const newUser = {
    name: reg.value.name,
    email: reg.value.email,
    pass: reg.value.pass
  };

  localStorage.setItem("account", JSON.stringify(newUser));

  alert("Đăng ký thành công!");
}

// LOGIN
function loginUser() {
  const acc = JSON.parse(localStorage.getItem("account"));

  if (!acc) {
    alert("Chưa có tài khoản!");
    return;
  }

  if (login.value.email === acc.email && login.value.pass === acc.pass) {
    user.value = acc;
    localStorage.setItem("user", JSON.stringify(acc));
    alert("Đăng nhập thành công!");

   
    location.reload();

  } else {
    alert("Sai email hoặc mật khẩu!");
  }
}

// LOGOUT
function logout() {
  user.value = null;
  localStorage.removeItem("user");

 
  location.href = "/";
}

// FORGOT
function forgotPass() {
  const acc = JSON.parse(localStorage.getItem("account"));

  if (acc && acc.email === forgot.value.email) {
    alert("Mật khẩu của bạn: " + acc.pass);
  } else {
    alert("Email không tồn tại!");
  }
}
</script>