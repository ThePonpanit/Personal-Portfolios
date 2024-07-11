<template>
  <div class="text-3xl text-center mt-5">
    Hello World , I am using TailWindCss
  </div>
  <header class="app__header">
    <Menubar :model="items">
      <template #end>
        <div style="display: flex">
          <DarkModeToggle />
          <span style="margin-left: 2rem">
            <OverlayBadge severity="danger">
              <Avatar label="P" size="large" />
            </OverlayBadge>
          </span>
        </div>
      </template>
    </Menubar>
  </header>
  <main>
    <div>
      <RouterView />
    </div>
  </main>
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
main {
  height: 500vh;
}

/* Set app__main-header sticky to the screen*/
header {
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
