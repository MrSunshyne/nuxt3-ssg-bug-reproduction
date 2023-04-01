<style scoped>
* {
  box-sizing: border-box;
}
</style>

<template>
  <el-container>
    <el-aside width="200px"> aside </el-aside>

    <el-container>
      <el-main>
        <slot></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup></script>
