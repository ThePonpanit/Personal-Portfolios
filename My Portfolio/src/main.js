import "./assets/styles.css"; // Import your CSS file

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// PrimeVue Configuration
import PrimeVue from "primevue/config";
import "primeicons/primeicons.css";
import Aura from "@primevue/themes/aura";
import { definePreset } from "@primevue/themes";

// Define a custom preset based on Aura with custom primary color
const CustomAura = definePreset(Aura, {
  semantic: {
    primary: {
      50: "{indigo.50}",
      100: "{indigo.100}",
      200: "{indigo.200}",
      300: "{indigo.300}",
      400: "{indigo.400}",
      500: "{indigo.500}",
      600: "{indigo.600}",
      700: "{indigo.700}",
      800: "{indigo.800}",
      900: "{indigo.900}",
      950: "{indigo.950}",
    },
  },
});

// PrimeVue Components import
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Menubar from "primevue/menubar";

// Create the Vue app
const app = createApp(App);

// PrimeVue theme configuration
app.use(PrimeVue, {
  theme: {
    preset: CustomAura,
    options: {
      prefix: "p",
      darkModeSelector: ".app-dark",
      cssLayer: false,
    },
  },
});

// Use Pinia for state management
app.use(createPinia());

// Use Vue Router for navigation
app.use(router);

// Register PrimeVue Components globally
app.component("Button", Button);
app.component("InputText", InputText);
app.component("Menubar", Menubar);

// Mount the app to the DOM
app.mount("#app");
