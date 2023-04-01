<script setup lang="ts">
const { data: posts } = await useFetch('/api/posts');
</script>

<template>
  <div v-for="post in posts" class="">
    <div>
      {{ post.title }}
    </div>
  </div>
</template>
