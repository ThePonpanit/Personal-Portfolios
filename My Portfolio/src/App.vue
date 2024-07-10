<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper"></div>
  </header>
  <DarkModeToggle />
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import DarkModeToggle from "./components/DarkModeToggle.vue";
</script>

<style scoped></style>
