<template>
  <div>
    <!-- filter -->
    <div class="flex flex-wrap items-center px-4 space-y-4 md:space-x-4">
      <vs-select
        placeholder="Select"
        label="分类"
        v-model="filter.category"
        :block="block"
      >
        <vs-option label="Vuesax" value="1">
          Vuesax
        </vs-option>
        <vs-option label="Vue" value="2">
          Vue
        </vs-option>
        <vs-option label="Javascript" value="3">
          Javascript
        </vs-option>
        <vs-option disabled label="Sass" value="4">
          Sass
        </vs-option>
        <vs-option label="Typescript" value="5">
          Typescript
        </vs-option>
        <vs-option label="Webpack" value="6">
          Webpack
        </vs-option>
        <vs-option label="Nodejs" value="7">
          Nodejs
        </vs-option>
      </vs-select>
      <vs-select
        multiple
        collapse-chips
        label="标签"
        v-model="filter.tags"
        :block="block"
      >
        <vs-option label="Vuesax" value="1">
          Vuesax
        </vs-option>
        <vs-option label="Vue" value="2">
          Vue
        </vs-option>
        <vs-option label="Javascript" value="3">
          Javascript
        </vs-option>
        <vs-option label="Sass" value="4">
          Sass
        </vs-option>
        <vs-option label="Typescript" value="5">
          Typescript
        </vs-option>
        <vs-option label="Webpack" value="6">
          Webpack
        </vs-option>
        <vs-option label="Nodejs" value="7">
          Nodejs
        </vs-option>
      </vs-select>
      <vs-input
        icon-after
        v-model="filter.keywords"
        label="关键字"
        @click-icon="filter.keywords = ''"
        :block="block"
      >
        <template #icon>
          <icon prefix="fas" icon="times" />
        </template>
      </vs-input>
      <vs-button flat :block="block">
        <icon prefix="fas" icon="plus" class="mr-1" />
        新增图集
      </vs-button>
    </div>
    <!-- list -->
    <div class="relative">
      <ul
        class="grid grid-cols-2 gap-4 px-4 py-4 md:grid-cols-4 lg:grid-cols-8"
        style="min-height: calc(100vh - 12rem)"
      >
        <li
          v-for="i in 24"
          :key="i"
          class="cursor-pointer d-card"
          @click="edit(i)"
        >
          <img
            src="https://img.156135784.xyz/images/2021/04/21/b17c83160ff71dac9688802a88b48952.jpg"
            class="object-cover w-full rounded-lg h-44"
          />
          <h2 class="truncate">金刚葫芦娃之他妈的大娃救救二娃吧</h2>
        </li>
      </ul>
      <div
        v-if="false"
        class="absolute top-0 left-0 w-full h-full | flex items-center justify-center | font-bold text-gray-500 text-2xl"
      >
        <icon prefix="fas" icon="frown" class="mr-1" />
        暂无数据
      </div>
    </div>
    <vs-pagination not-arrows v-model="filter.page" :length="20" />
    <edit ref="edit" />
  </div>
</template>

<script>
import Edit from "~/components/dashboard/EditImage.vue";
export default {
  components: { Edit },
  layout: "dashboard",
  data() {
    return {
      block: false,
      filter: {
        category: "",
        tags: "",
        keywords: "",
        page: 1
      }
    };
  },
  mounted() {
    this.block = window.innerWidth <= 768;
    window.addEventListener("resize", () => {
      this.block = window.innerWidth <= 768;
    });
  },
  methods: {
    create() {
      this.$refs.edit.toggle();
    },
    edit(image) {
      this.$refs.edit.toggle(image);
    }
  }
};
</script>

<style></style>
