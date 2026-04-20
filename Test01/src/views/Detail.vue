<script setup>
import { useRoute, useRouter } from "vue-router";
import { jobs } from "../data/jobs";
import { ref } from "vue";

const route = useRoute();
const router = useRouter();

const id = parseInt(route.params.id);
const index = jobs.findIndex(j => j.id === id);

// form dữ liệu
const job = ref({ ...jobs[index] });

const error = ref("");
const isCreate = ref(false);

// VALIDATE
const validate = (isCreateMode = false) => {
  if (!job.value.id || !job.value.title || !job.value.salary) {
    error.value = "Không được để trống!";
    return false;
  }

  // CHECK TRÙNG ID
  const exists = jobs.some((j, i) => {
    // nếu là create → check tất cả
    if (isCreateMode) return j.id == job.value.id;

    // nếu là update → bỏ qua chính nó
    return i !== index && j.id == job.value.id;
  });

  if (exists) {
    error.value = "ID đã tồn tại!";
    return false;
  }

  error.value = "";
  return true;
};

// CREATE
const create = () => {
  if (!validate(true)) return;

  jobs.push({ ...job.value });
  alert("Thêm thành công");

  resetForm();
};

// UPDATE
const update = () => {
  if (!validate(false)) return;

  jobs[index] = { ...job.value };
  alert("Cập nhật thành công");
};


// DELETE
const remove = () => {
  jobs.splice(index, 1);
  router.push("/");
};

// RESET (xoá trắng form)
const resetForm = () => {
  job.value = {
    id: "",
    title: "",
    salary: "",
    skills: ""
  };
  error.value = "";
  isCreate.value = true;
};
</script>

<template>
<div class="container mt-4" v-if="job">
  <h2>Chi tiết & CRUD</h2>

  <p class="text-danger">{{ error }}</p>

  <!-- FORM -->
  <input v-model="job.id" class="form-control mb-2" placeholder="ID">
  <input v-model="job.title" class="form-control mb-2" placeholder="Title">
  <input v-model="job.salary" class="form-control mb-2" placeholder="Salary">
  <input v-model="job.skills" class="form-control mb-3" placeholder="Skills">

  <!-- 4 NÚT -->
  <div>
    <button class="btn btn-success me-2" @click="create">Thêm</button>
    <button class="btn btn-warning me-2" @click="update">Cập nhật</button>
    <button class="btn btn-danger me-2" @click="remove">Xóa</button>
    <button class="btn btn-secondary" @click="resetForm">Reset</button>
  </div>

</div>
</template>