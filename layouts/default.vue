<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

ul {
  display: flex;
  gap: 10;
}
</style>

<template>
  <div>
    <ul>
      <nuxt-link :to="{ path: '/' }">Home</nuxt-link>
      <nuxt-link :to="{ path: '/posts' }">Blogs</nuxt-link>
    </ul>
  </div>
  <slot></slot>
</template>

<script setup></script>
