<template> 
  <!-- Hiển thị lời chào --> 
  <h1 :class="className">{{ greeting }}</h1> 

  <!-- Nút -->
  <button @click="changeGreeting">Click để thay đổi</button> 
</template> 
 
<script setup> 
import { ref } from 'vue'; 

const greeting = ref('Lời chào ban đầu') 
const className = ref('text-red')

const changeGreeting = () => { 
  if (greeting.value === 'Lời chào ban đầu') {
    greeting.value = 'Lời chào đã được thay đổi'
    className.value = 'text-blue'
  } else {
    greeting.value = 'Lời chào ban đầu'
    className.value = 'text-red'
  }
}
</script>

<style scoped>
.text-red {
  color: red;
}

.text-blue {
  color: blue;
}
</style>