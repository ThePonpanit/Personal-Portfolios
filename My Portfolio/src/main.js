import "./assets/styles.css"; // Import your CSS file

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// PrimeVue Configuration
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

// PrimeVue Components import
import Button from "primevue/button";

// Create the Vue app
const app = createApp(App);

// PrimeVue theme configuration
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: "p", // Default prefix for CSS variables
      darkModeSelector: "system", // Use system dark mode settings
      cssLayer: false, // Disable CSS layer by default
    },
  },
});

// Use Pinia for state management
app.use(createPinia());

// Use Vue Router for navigation
app.use(router);

// Register PrimeVue Components globally
app.component("Button", Button);

// Mount the app to the DOM
app.mount("#app");
