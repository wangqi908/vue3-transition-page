<template>
  <div class="page">
    <p>二级页面</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'page',
  setup () {
    return {}
  }
})
</script>

<style scoped>
.page {
  background-color: #ffcccc;
  box-sizing: border-box;
}
</style>
