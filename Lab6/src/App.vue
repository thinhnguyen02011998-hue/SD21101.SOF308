<script setup>
import HelloWorld from './components/HelloWorld.vue'
import demo1 from './components/demo1.vue'
import demo2 from './components/demo2.vue'
import demo3 from './components/demo3.vue'
import bai1 from './components/bai1.vue'
import bai2 from './components/bai2.vue'
import bai3 from './components/bai3.vue'
import bai4 from './components/bai4.vue'


import { ref } from 'vue'
// JSON
const students = ref([
  { MSSV: "PS14301", TenSV: "Trần Văn Hoàng", DiemTB: 6.5 },
  { MSSV: "PS14302", TenSV: "Nguyễn Minh Triết", DiemTB: 8.2 },
  { MSSV: "PS14303", TenSV: "Lê Thị Hồng Hạnh", DiemTB: 9.5 },
  { MSSV: "PS14304", TenSV: "Phạm Quốc Bảo", DiemTB: 4.0 },
  { MSSV: "PS14305", TenSV: "Vũ Anh Tuấn", DiemTB: 7.8 },
  { MSSV: "PS14306", TenSV: "Đặng Thu Thảo", DiemTB: 1.5 },
  { MSSV: "PS14307", TenSV: "Hoàng Gia Bách", DiemTB: 10.0 },
  { MSSV: "PS14308", TenSV: "Bùi Tuyết Nhi", DiemTB: 5.5 },
  { MSSV: "PS14309", TenSV: "Ngô Quang Khải", DiemTB: 6.9 },
  { MSSV: "PS14310", TenSV: "Trương Mỹ Linh", DiemTB: 8.7 },
  { MSSV: "PS14311", TenSV: "Đỗ Văn Nam", DiemTB: 3.2 },
  { MSSV: "PS14312", TenSV: "Phan Thanh Trúc", DiemTB: 7.4 },
  { MSSV: "PS14313", TenSV: "Lý Hùng Dũng", DiemTB: 5.0 },
  { MSSV: "PS14314", TenSV: "Dương Ngọc Ánh", DiemTB: 9.2 },
  { MSSV: "PS14315", TenSV: "Tạ Minh Long", DiemTB: 2.8 },
  { MSSV: "PS14316", TenSV: "Trịnh Kim Chi", DiemTB: 6.1 },
  { MSSV: "PS14317", TenSV: "Võ Hoàng Yến", DiemTB: 8.0 },
  { MSSV: "PS14318", TenSV: "Lương Gia Huy", DiemTB: 4.7 },
  { MSSV: "PS14319", TenSV: "Cao Thùy Trang", DiemTB: 7.1 },
  { MSSV: "PS14320", TenSV: "Mai Văn Quyết", DiemTB: 5.9 },
  { MSSV: "PS14321", TenSV: "Hà Phương Thảo", DiemTB: 9.8 }
])



</script>

<template>
  <!-- <HelloWorld /> -->
   <!-- <demo1 /> -->
    <!-- <demo2 /> -->
     <!-- <demo3 /> -->
     <!-- <bai1 /> -->
      <!-- <bai2 /> -->
       <bai3 />
        <!-- <bai4 /> -->




<!-- <div class="container mt-4">
    <demo3 :students="students" />
  </div> -->

     
  
</template>
