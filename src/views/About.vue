<template>
  <div class="about">
    <p>about</p>
    <router-link to="/about/page">Page</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'about',
  setup () {
    return {}
  }
})
</script>

<style scoped>
.about {
  background-color: #ffcc99;
  box-sizing: border-box;
}
</style>
