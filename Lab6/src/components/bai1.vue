<template>
  <div>
    <h3>Nhập Điểm Của Bạn</h3>
    <input v-model="diem" type="number" placeholder="Nhập điểm của bạn" />

    <p v-if="diem !== ''">Điểm: {{ diem }}</p>

    <p v-if="diem < 0 || diem > 10" style="color:red ">Vui lòng nhập điểm từ 1 đến 10!</p>

    <p v-else-if="diem < 5">Xếp loại: Yếu</p>

    <p v-else-if="diem < 6.5">Xếp loại: Trung bình</p>

    <p v-else-if="diem < 8">Xếp loại: Khá</p>

    <p v-else-if="diem < 9">Xếp loại: Giỏi</p>

    <p v-else>Xếp loại: Xuất sắc</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const diem = ref('');
</script>

<style lang ="scss" scoped>
</style>