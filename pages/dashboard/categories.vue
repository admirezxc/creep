<template>
  <div class="space-y-4">
    <vs-button flat><icon prefix="fas" icon="plus" />新增分类</vs-button>
    <ul class="grid grid-cols-2 gap-4 md:grid-cols-4">
      <li
        v-for="i in 10"
        :key="i"
        class="p-4 cursor-pointer border border-dashed rounded-lg | flex justify-between"
      >
        <h2>分类{{ i }}</h2>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: "dashboard"
};
</script>

<style></style>
