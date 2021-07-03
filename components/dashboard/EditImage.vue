<template>
  <vs-dialog overflow-hidden full-screen v-model="active">
    <template #header>
      <h4>{{ type ? "新增" : "编辑" }}图集</h4>
    </template>

    <div class="p-4">
      <div>
        <vs-select
          multiple
          collapse-chips
          label="标签"
          v-model="filter.tags"
          block
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
      </div>
    </div>

    <template #footer>
      <div class="flex justify-end">
        <vs-button>保存</vs-button>
        <vs-button flat>取消</vs-button>
      </div>
    </template>
  </vs-dialog>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      type: 0,
      temp: {},
      filter: {
        category: "",
        tags: ""
      }
    };
  },
  watch: {
    active(value) {
      if (value) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "visible";
      }
    }
  },
  methods: {
    toggle(temp) {
      this.active = true;
      this.type = temp ? 0 : 1;
      this.temp = temp;
    }
  }
};
</script>

<style></style>
