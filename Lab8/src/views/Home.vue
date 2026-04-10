<!-- <template>
  <section>
    <h2>Home</h2>
    <p>Trang chủ Lab8</p>
  </section>
</template> -->


<script setup>
import { USERS } from "../data/users";
</script>

<template>
  <section>
    <h2>Danh sach users</h2>
    <ul>
      <li v-for="user in USERS" :key="user.id">
        <!--  -->
        <!--  -->
        <RouterLink :to="{ name: 'UserProfile', params: { userId: user.id } }">
          {{ user.fullName }} - {{ user.role }}
        </RouterLink>
      </li>
    </ul>
  </section>
</template>
