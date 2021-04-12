<template>
  <div class="home">
    <p>num--{{ num }}</p>
    <p>doubleNum--{{ doubleNum }}</p>
    <button @click="add">+</button>
    <button @click="addAsync">addAsync+</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  name: 'Home',
  setup () {
    const store = useStore()
    const num = computed(() => store.state.home.num)
    const doubleNum = computed(() => store.getters['home/doubleNum'](2))
    const add = () => {
      store.commit('home/add', 1)
    }
    const addAsync = () => {
      store.dispatch('home/addAsync', 1000)
    }

    return {
      num,
      add,
      addAsync,
      doubleNum
    }
  }
})
</script>

<style scoped>
.home {
  background-color: #99cccc;
  box-sizing: border-box;
}
</style>
