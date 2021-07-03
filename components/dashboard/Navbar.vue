<template>
  <nav
    class="sticky top-0 z-[90000] | flex items-center space-x-4 | h-14 px-4 b1 dark:b2 transition-shadow"
    ref="navbar"
  >
    <!-- logo -->
    <nuxt-link to="/dashboard" class="text-2xl font-bold">Creep</nuxt-link>
    <!-- menu -->
    <div
      class="relative w-full overflow-hidden text-lg font-bold whitespace-nowrap"
      ref="menu"
    >
      <ul class="inline-block space-x-4">
        <li
          v-for="(menu, key) in menus"
          :key="key"
          class="inline-block transition-opacity opacity-70 hover:opacity-100"
        >
          <nuxt-link :to="menu.path">
            <icon prefix="fas" :icon="menu.icon"></icon>
            <span>{{ menu.title }}</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  data() {
    return {
      menus: [
        {
          title: "图集",
          path: "/dashboard/images",
          icon: "images"
        },
        {
          title: "分类",
          path: "/dashboard/categories",
          icon: "th-large"
        },
        {
          title: "标签",
          path: "/dashboard/tags",
          icon: "hashtag"
        },
        {
          title: "会员",
          path: "/dashboard/members",
          icon: "users"
        },
        {
          title: "订单",
          path: "/dashboard/orders",
          icon: "file-alt"
        },
        {
          title: "设置",
          path: "/dashboard/settings",
          icon: "cog"
        }
      ]
    };
  },
  mounted() {
    new BScroll(this.$refs.menu, {
      scrollX: true,
      probeType: 3,
      eventPassthrough: "vertical"
    });
    window.addEventListener("scroll", () => {
      try {
        let scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        if (scrollTop > 56) {
          this.$refs.navbar.classList.add("shadow-navbar");
        }
        if (scrollTop < 56) {
          this.$refs.navbar.classList.remove("shadow-navbar");
        }
      } catch {}
    });
  }
};
</script>
