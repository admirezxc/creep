<template>
  <div class="min-h-screen b1 dark:b2">
    <navbar />
    <nuxt class="p-4" />
    <color-theme />
  </div>
</template>

<script>
import ColorTheme from "~/components/ColorTheme.vue";
import Navbar from "~/components/dashboard/Navbar.vue";
export default {
  components: { Navbar, ColorTheme }
};
</script>

<style></style>
