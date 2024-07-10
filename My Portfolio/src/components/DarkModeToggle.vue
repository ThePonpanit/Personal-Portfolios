<template>
  <div class="theme__toggle_container">
    <strong style="margin-bottom: 0.15rem">Theme Toggle</strong>
    <label for="theme" class="theme">
      <span class="theme__toggle-wrap">
        <input
          type="checkbox"
          class="theme__toggle"
          id="theme"
          role="switch"
          name="theme"
          value="dark"
          @change="toggleDarkMode"
        />
        <span class="theme__fill"></span>
        <span class="theme__icon">
          <span class="theme__icon-part"></span>
          <span class="theme__icon-part"></span>
          <span class="theme__icon-part"></span>
          <span class="theme__icon-part"></span>
          <span class="theme__icon-part"></span>
          <span class="theme__icon-part"></span>
          <span class="theme__icon-part"></span>
          <span class="theme__icon-part"></span>
          <span class="theme__icon-part"></span>
        </span>
      </span>
    </label>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};

onMounted(() => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    isDarkMode.value = true;
  }
});

// Watch the `isDarkMode` to apply the class when the state changes
watch(isDarkMode, (newValue) => {
  const element = document.documentElement;
  if (newValue) {
    element.classList.add("app-dark");
  } else {
    element.classList.remove("app-dark");
  }
});
</script>

<style scoped>
* {
  border: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.theme__toggle_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  padding: 0.25rem;
  border-radius: 20px;
  -webkit-box-shadow: 3px 3px 10px 3px #dddddd;
  -moz-box-shadow: 3px 3px 10px 3px #dddddd;
  box-shadow: 3px 3px 10px 3px #dddddd;
}
</style>

<style>
:root {
  --hue: 223;
  --bg: hsl(40, 20%, 94%);
  --fg: hsl(var(--hue), 10%, 0%);
  --primary: hsl(var(--hue), 90%, 55%);
  --primaryT: hsla(var(--hue), 90%, 55%, 0);
  --transDur: 0.3s;
  font-size: calc(16px + (32 - 16) * (100vw - 320px) / (1280 - 320));
}
html,
body {
  background-color: var(--bg);
}
body,
input {
  font: 0.5rem / 1.5 Fredoka, sans-serif;
}
body {
  color: var(--fg);
}
/* Default */
.theme {
  display: flex;
  align-items: center;
  -webkit-tap-highlight-color: transparent;
}
.theme__fill,
.theme__icon {
  pointer-events: none;
  transition: transform var(--transDur) ease-in-out;
}
.theme__fill {
  background-color: var(--bg);
  display: block;
  mix-blend-mode: difference;
  position: fixed;
  inset: 0;
  height: 100%;
  transform: translateX(-100%);
}
.theme__icon,
.theme__toggle {
  z-index: 1;
}
.theme__icon,
.theme__icon-part {
  position: absolute;
}
.theme__icon {
  display: block;
  top: 0.75em; /* Adjust icon position */
  left: 0.75em; /* Adjust icon position */
  width: 1.5em; /* Adjust icon size */
  height: 1.5em; /* Adjust icon size */
}
.theme__icon-part {
  border-radius: 50%;
  box-shadow: 0.4em -0.4em 0 0.5em hsl(0, 0%, 100%) inset;
  top: calc(50% - 0.5em);
  left: calc(50% - 0.5em);
  width: 1em;
  height: 1em;
  transition: box-shadow var(--transDur) ease-in-out,
    opacity var(--transDur) ease-in-out, transform var(--transDur) ease-in-out;
  transform: scale(0.5);
}
.theme__icon-part ~ .theme__icon-part {
  background-color: hsl(0, 0%, 100%);
  border-radius: 0.05em;
  box-shadow: none;
  top: 50%;
  left: calc(50% - 0.05em);
  transform: rotate(0) translateY(0.5em);
  transform-origin: 50% 0;
  width: 0.1em;
  height: 0.2em;
}
.theme__icon-part:nth-child(3) {
  transform: rotate(45deg) translateY(0.5em);
}
.theme__icon-part:nth-child(4) {
  transform: rotate(90deg) translateY(0.5em);
}
.theme__icon-part:nth-child(5) {
  transform: rotate(135deg) translateY(0.5em);
}
.theme__icon-part:nth-child(6) {
  transform: rotate(180deg) translateY(0.5em);
}
.theme__icon-part:nth-child(7) {
  transform: rotate(225deg) translateY(0.5em);
}
.theme__icon-part:nth-child(8) {
  transform: rotate(270deg) translateY(0.5em);
}
.theme__icon-part:nth-child(9) {
  transform: rotate(315deg) translateY(0.5em);
}
.theme__label,
.theme__toggle,
.theme__toggle-wrap {
  position: relative;
}
.theme__toggle,
.theme__toggle::before {
  display: block;
}
.theme__toggle {
  background-color: hsl(48, 90%, 85%);
  border-radius: 25% / 50%;
  box-shadow: 0 0 0 0.125em var(--primaryT);
  padding: 0.25em;
  width: 6em; /* Adjust width */
  height: 3em; /* Adjust height */
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  transition: background-color var(--transDur) ease-in-out,
    box-shadow 0.15s ease-in-out, transform var(--transDur) ease-in-out;
}
.theme__toggle::before {
  background-color: hsl(48, 90%, 55%);
  border-radius: 50%;
  content: "";
  width: 2.5em; /* Adjust inner circle size */
  height: 2.5em; /* Adjust inner circle size */
  transition: background-color var(--transDur) ease-in-out,
    transform var(--transDur) ease-in-out;
}
.theme__toggle:focus {
  box-shadow: 0 0 0 0.125em var(--primary);
  outline: transparent;
}
/* Checked */
.theme__toggle:checked {
  background-color: hsl(198, 90%, 15%);
}
.theme__toggle:checked::before,
.theme__toggle:checked ~ .theme__icon {
  transform: translateX(3em);
}
.theme__toggle:checked::before {
  background-color: hsl(198, 90%, 55%);
}
.theme__toggle:checked ~ .theme__fill {
  transform: translateX(0);
}
.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(1) {
  transform: scale(1);
  box-shadow: 0.2em -0.2em 0 0.2em hsl(0, 0%, 100%) inset;
}
.theme__toggle:checked ~ .theme__icon .theme__icon-part ~ .theme__icon-part {
  opacity: 0;
}
.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(2) {
  transform: rotate(45deg) translateY(0.8em);
}
.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(3) {
  transform: rotate(90deg) translateY(0.8em);
}
.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(4) {
  transform: rotate(135deg) translateY(0.8em);
}
.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(5) {
  transform: rotate(180deg) translateY(0.8em);
}
.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(6) {
  transform: rotate(225deg) translateY(0.8em);
}
.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(7) {
  transform: rotate(270deg) translateY(0.8em);
}
.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(8) {
  transform: rotate(315deg) translateY(0.8em);
}
.theme__toggle:checked ~ .theme__icon .theme__icon-part:nth-child(9) {
  transform: rotate(360deg) translateY(0.8em);
}
.theme__toggle-wrap {
  margin: 0 0.75em;
}
</style>
