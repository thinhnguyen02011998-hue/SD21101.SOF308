<template> 
<div> 
<input v-model="userInput" placeholder="Nhập dữ liệu vào đây" /> 

<!--  combobox chọn màu -->
        <select v-model="selectedColor">
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
        </select>

<p :style="{ color: selectedColor }">Giá trị bạn nhập: {{ userInput }}</p> 
</div> 
</template> 

<script setup> 
import { ref } from 'vue'; 
const userInput = ref('FPL'); 

const selectedColor = ref('black'); // THÊM DÒNG NÀY
</script> 