<template>
  <div id="content">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view v-slot="{ Component, route }">
      <div class="router-wrap">
        <transition
          appear
          :name="route.meta.transitionName"
          :mode="route.meta.transitionName === 'fade' ? 'out-in' : ''"
          @enter="active"
          @leave="active"
          @after-enter="down"
          @after-leave="down"
        >
          <component :is="Component" class="router-view" />
        </transition>
      </div>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { active, down } from '@/hooks/useHandleTransition'
import '@/assets/style/transition.css'

export default defineComponent({
  setup () {
    return { active, down }
  }
})
</script>

<style scoped>
#content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#nav {
  background-color: #99ccff;
  padding: 10px;
}
#nav a {
  transition: all 0.2s;
}
.router-wrap {
  position: relative;
  flex: 1;
}
.router-view {
  width: 100%;
  height: 100%;
}
.router-link-active {
  background-color: rgb(233, 141, 141);
  transition: all 0.2s;
  color: #fff;
}
</style>
