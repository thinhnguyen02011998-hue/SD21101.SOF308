<template>
  <div>
    <h3>Danh sách sinh viên</h3>

    <!-- ✅ COMBOBOX NGAY TRONG demo3 -->
    <select v-model="selected" class="form-select w-25 mb-3">
      <option value="">-- Tất cả --</option>
      <option value="Xuất sắc">Xuất sắc</option>
      <option value="Giỏi">Giỏi</option>
      <option value="Khá">Khá</option>
      <option value="Trung bình">Trung bình</option>
      <option value="Yếu">Yếu</option>
    </select>

    <table class="table table-hover">
      <thead>
        <tr>
          <th>MSSV</th>
          <th>Họ tên</th>
          <th>Điểm</th>
          <th>Xếp loại</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(stu, index) in filteredStudents" :key="index">
          <td>{{ stu.MSSV }}</td>
          <td>{{ stu.TenSV }}</td>
          <td>{{ stu.DiemTB }}</td>
          <td>{{ xepLoai(stu.DiemTB) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// nhận dữ liệu từ App.vue
const props = defineProps({
  students: Array
})

// combobox
const selected = ref("")

// hàm xếp loại
function xepLoai(diem) {
  if (diem >= 9) return "Xuất sắc"
  if (diem >= 8) return "Giỏi"
  if (diem >= 6.5) return "Khá"
  if (diem >= 5) return "Trung bình"
  return "Yếu"
}

// lọc theo combobox
const filteredStudents = computed(() => {
  if (!selected.value) return props.students

  return props.students.filter(stu =>
    xepLoai(stu.DiemTB) === selected.value
  )
})
</script>