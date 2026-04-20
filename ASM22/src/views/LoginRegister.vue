<!-- <template>
<div class="container mt-5">

  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" data-bs-toggle="tab" href="#login">Đăng nhập</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="tab" href="#register">Đăng ký</a>
    </li>
  </ul>

  <div class="tab-content">


    <div id="login" class="tab-pane fade show active p-3">

      <input v-model="login.email" class="form-control mb-2" placeholder="Email">
      <input v-model="login.password" type="password" class="form-control mb-2" placeholder="Password">

      <button class="btn btn-primary" @click="loginUser">Login</button>

    </div>


    <div id="register" class="tab-pane fade p-3">

      <input v-model="register.name" class="form-control mb-2" placeholder="Name">
      <input v-model="register.email" class="form-control mb-2" placeholder="Email">
      <input v-model="register.password" type="password" class="form-control mb-2" placeholder="Password">

      <button class="btn btn-success" @click="registerUser">Register</button>

    </div>

  </div>

</div>
</template>

<script setup>
import { ref } from "vue";

const login = ref({ email: "", password: "" });
const register = ref({ name: "", email: "", password: "" });

function registerUser() {
  localStorage.setItem("user", JSON.stringify(register.value));
  alert("Đăng ký thành công");
}

function loginUser() {
  const u = JSON.parse(localStorage.getItem("user"));

  if (u && u.email === login.value.email && u.password === login.value.password) {
    alert("Login OK");
  } else {
    alert("Sai tài khoản");
  }
}
</script> -->