<template>
  <div>
    <input type="checkbox" value="tv" v-model="checkedNames">Tiếng Việt <br>
    <input type="checkbox" value="ta" v-model="checkedNames">Tiếng Anh <br>
    <input type="checkbox" value="tt" v-model="checkedNames">Tiếng Trung <br>

    <p>{{ displayNames.join(', ') }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const checkedNames = ref([])

// const langMap = {
//   tv: "Tiếng Việt",
//   ta: "Tiếng Anh",
//   tt: "Tiếng Trung"
// }
// const displayNames = computed(() => {
//   return checkedNames.value.map(item => langMap[item])
// })

const displayNames = computed(() => {
  return checkedNames.value.map(item => {
    if (item === 'tv') {
      return 'Tiếng Việt'
    } else if (item === 'ta') {
      return 'Tiếng Anh'
    } else if (item === 'tt') {
      return 'Tiếng Trung'
    }
  })
})

</script>