<script setup>
import { jobs } from "../data/jobs";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const search = ref("");

const goDetail = (id) => {
  router.push(`/detail/${id}`);
};

const filteredJobs = () => {
  return jobs.filter(j =>
    j.title.toLowerCase().includes(search.value.toLowerCase()) ||
    j.salary.toString().includes(search.value)
  );
};
</script>

<template>
<div class="container mt-4">
  <h2>Danh sách công việc</h2>

  <input v-model="search" class="form-control mb-3" placeholder="Tìm kiếm..." />

  <table class="table table-bordered table-hover">
    <thead class="table-dark">
      <tr>
        <th>ID</th>
        <th>Title</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="j in filteredJobs()" :key="j.id" @click="goDetail(j.id)">
        <td>{{ j.id }}</td>
        <td>{{ j.title }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>