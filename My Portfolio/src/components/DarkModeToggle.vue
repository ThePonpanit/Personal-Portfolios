<template>
  <div class="dark-mode-toggle toggle__main">
    <div :style="sunStyle" class="sun__icon">
      <i class="pi pi-sun" style="font-weight: 600; font-size: 1.25rem"></i>
    </div>
    <ToggleSwitch
      v-model="checked"
      :checked="isDarkMode"
      @change="toggleDarkMode"
    />
    <div :style="moonStyle" class="moon__icon">
      <i class="pi pi-moon" style="font-weight: 600; font-size: 1.25rem"></i>
    </div>
  </div>
</template>

<script setup>
import { useThemeStore } from "../stores/theme";
import { computed } from "vue";

const themeStore = useThemeStore();
const isDarkMode = computed(() => themeStore.isDarkMode);

const toggleDarkMode = () => {
  themeStore.toggleDarkMode();
};

const sunStyle = computed(() => ({
  opacity: isDarkMode.value ? 0 : 1,
}));

const moonStyle = computed(() => ({
  opacity: isDarkMode.value ? 1 : 0,
}));
</script>

<style scoped>
.dark-mode-toggle {
  display: flex;
}

.toggle__main {
  gap: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.toggle__main i {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
}

.sun__icon {
  color: #9cafaa;
}
.moon__icon {
  color: #e7f0dc;
}
</style>
