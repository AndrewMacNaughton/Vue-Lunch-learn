<script setup>
import { RouterView } from 'vue-router'
import TheHeader from '@/components/Navigation/TheHeader.vue'
</script>

<template>
  <the-header />
  <RouterView />
</template>

<style lang="scss">
body {
  background-color: #333;
  color: #ccc;
  font-family: 'Courier New', Courier, monospace;
  max-width: 1280px;
  margin: 0 auto;
}
.pointer {
  cursor: pointer;
}
a {
  text-decoration: none;
  &:visited {
    color: black;
  }
}
.zaui-button {
  width: 200px;
  padding: 8px;
  background-color: #ebbaef;
  border-radius: 4px;
  border: solid 1px transparent;
  font-family: inherit;
}
</style>
