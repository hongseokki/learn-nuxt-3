<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title> Vue & Nuxt Mastery Class </q-toolbar-title>
        <q-btn stretch flat label="Home" to="/" />
        <q-separator dark vertical />
        <q-btn stretch flat label="About" to="/about" />
        {{ disableBtn }}
        <q-btn stretch flat label="Test" @click="test" />
      </q-toolbar>
    </q-header>
    <q-page-container :style="pageContainerStyle">
      <div class="q-pa-md" :class="{ test: disableBtn }"></div>
      <slot></slot>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
const pageContainerStyle = computed(() => ({
  maxWidth: '1080px',
  margin: '0 auto',
}))

const disableBtn = ref(false)
function test() {
  disableBtn.value = !disableBtn.value
}
</script>
