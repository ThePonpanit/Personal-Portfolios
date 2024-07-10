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
  <DarkModeButton />
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import DarkModeButton from "./components/DarkModeButton.vue";
</script>

<style scoped></style>
