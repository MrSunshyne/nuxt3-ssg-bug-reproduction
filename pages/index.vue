<template>
  <div>{{ data }}</div>
</template>

<script setup>
const { data, refresh } = await useAsyncData('hello', async () => {
  return 'hello';
});
</script>
