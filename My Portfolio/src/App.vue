<template>
  <header class="app__main-header">
    <div class="app__card">
      <Menubar :model="items" />
    </div>
    <div>
      <DarkModeToggle />
    </div>
  </header>
  <body>
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
  background-color: #f8f9fa;
  border-radius: 20px;
  -webkit-box-shadow: 3px 3px 10px 3px #dddddd;
  -moz-box-shadow: 3px 3px 10px 3px #dddddd;
  box-shadow: 3px 3px 10px 3px #dddddd;
  padding: 1vh;
}
/* Set app__main-header sticky to the screen*/
.app__main-header {
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>

<style>
body.app-dark {
  background-color: #121212;
  color: #f8f9fa;
}
</style>
