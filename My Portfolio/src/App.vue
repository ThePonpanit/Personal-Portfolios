<template>
  <header class="app__main-header">
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="80"
      height="80"
    />

    <div class="wrapper"></div>
    <div class="card">
      <Menubar :model="items" />
    </div>
  </header>
  <body>
    <div style="display: flex; justify-content: right">
      <DarkModeToggle />
    </div>
    <RouterView />
  </body>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import DarkModeToggle from "./components/DarkModeToggle.vue";
import { ref } from "vue";

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
  },
  {
    label: "Features",
    icon: "pi pi-star",
  },
  {
    label: "Projects",
    icon: "pi pi-search",
    items: [
      {
        label: "Components",
        icon: "pi pi-bolt",
      },
      {
        label: "Blocks",
        icon: "pi pi-server",
      },
      {
        label: "UI Kit",
        icon: "pi pi-pencil",
      },
      {
        label: "Templates",
        icon: "pi pi-palette",
        items: [
          {
            label: "Apollo",
            icon: "pi pi-palette",
          },
          {
            label: "Ultima",
            icon: "pi pi-palette",
          },
        ],
      },
    ],
  },
  {
    label: "Contact",
    icon: "pi pi-envelope",
  },
]);
</script>

<style scoped>
body {
  height: 500vh;
}

.app__main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
/* Set app__main-header sticky to the screen*/
.app__main-header {
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>
