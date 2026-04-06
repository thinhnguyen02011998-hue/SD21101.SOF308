<template>
  <div>
    <h3>Ali-34 Thịnh</h3>
    <h3>Nhập năm sinh</h3>
    <input v-model="year" type="number" placeholder="Nhập năm sinh" />

    <p v-if="year">Tuổi: {{ age }}</p>

    <p v-if="age < 0">Năm sinh không hợp lệ</p>

    <p v-else-if="age < 16">Trẻ em <br> Cần sự bảo trợ đặc biệt, chưa có năng lực hành vi dân sự đầy đủ.</p>

    <p v-else-if="age < 18">Vị thành niên <br> Đang trong quá trình trưởng thành, bắt đầu chịu trách nhiệm nhiều hơn.</p>

    <p v-else-if="age <= 30">Thanh niên <br> Độ tuổi lao động sung sức, có đầy đủ quyền và nghĩa vụ công dân.</p>

    <p v-else>Người trưởng thành <br> Đã qua độ tuổi thanh niên.</p>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const year = ref("");

const age = computed(() => {
  const namnay = 2026
  return namnay - year.value;
});
</script>

<style scoped>

</style>