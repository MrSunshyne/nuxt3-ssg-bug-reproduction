<script setup lang="ts">
const { data: posts } = await useFetch('/api/posts');
</script>

<template>
  <div class="contain">
    <h1>List all blogs</h1>
    <div class="blog-posts">
      <template v-for="post in posts">
        <div>
          {{ post.title }}
        </div>
      </template>
    </div>
  </div>
</template>
