<template>
  <vs-switch v-model="mode" class="fixed right-4 bottom-4">
    <template #circle>
      <icon v-if="!mode" prefix="fas" icon="sun" />
      <icon v-else prefix="fas" icon="moon" />
    </template>
  </vs-switch>
</template>
<script>
export default {
  data() {
    return {
      mode: false
    };
  },
  mounted() {
    this.mode = this.$colorMode.preference === "dark";
  },
  watch: {
    mode(value) {
      if (value) {
        this.$colorMode.preference = "dark";
      } else {
        this.$colorMode.preference = "light";
      }
    }
  }
};
</script>
