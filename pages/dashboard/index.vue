<template>
  <div>
    <!-- row 1 -->
    <div class="flex" style="min-height: calc(100vh - 5.5rem);">
      <div
        class="flex items-center justify-center w-full lg:w-2/5"
        style="min-height: calc(100vh - 5.5rem);"
      >
        <div class="space-y-4">
          <h1 class="text-6xl font-bold">Creep 后台管理系统</h1>
          <h2 class="text-2xl font-bold">欢迎回来Admin</h2>
          <div class="flex">
            <vs-button to="/dashboard/images">
              <icon class="h-6 mr-2" prefix="fas" icon="images" />
              <span>图集列表</span>
            </vs-button>
            <vs-button border>
              <icon class="h-6 mr-2" prefix="fas" icon="file-alt" />
              <span>订单列表</span>
            </vs-button>
            <div class="relative">
              <vs-button border>
                <icon class="h-6" prefix="fas" icon="users" />
              </vs-button>
              <span
                class="absolute -top-2 -right-6 p-1 | bg-black text-white rounded-2xl rounded-bl-md text-xs z-10"
                >14423</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- right -->
      <div
        class="items-center justify-center hidden overflow-hidden lg:flex lg:w-3/5"
        style="min-height: calc(100vh - 5.5rem);"
      >
        <div class="relative">
          <!-- charts -->
          <div
            class="absolute overflow-hidden -left-72 top-[-25rem] d-card anm-up"
            ref="chart"
            style="width: 300px; height: 180px;"
          ></div>

          <!-- wordcloud -->
          <div
            class="absolute p-4 overflow-hidden rounded-lg select-none -top-80 left-20 anm-down d-card"
          >
            <vue-word-cloud
              style="width: 300px;height:250px;"
              :words="words"
              :color="
                ([, weight]) =>
                  weight > 10
                    ? '#5110E5'
                    : weight > 5
                    ? '#34D399'
                    : $colorMode.preference === 'dark'
                    ? '#EEE'
                    : '#000'
              "
              font-family="Roboto"
            />
          </div>

          <!-- hot -->
          <div
            class="absolute top-[-11rem] left-[-25rem] b1 dark:b2 d-card anm-down w-72"
          >
            <nuxt-link to="#">
              <img
                src="https://vuesax.com/foto2.jpg"
                class="rounded-tl-2xl rounded-tr-2xl"
              />
              <div class="p-4">
                <h1 class="truncate">
                  金刚葫芦娃之他妈的无敌大铁头娃之他妈一个一个救爷爷
                </h1>
                <div class="flex items-center space-x-4">
                  <span><icon class="mr-2" prefix="fas" icon="eye" />4423</span>
                  <span
                    ><icon
                      class="mr-2"
                      prefix="fas"
                      icon="th-large"
                    />热门</span
                  >
                  <span
                    ><icon class="mr-2" prefix="fas" icon="images" />43P</span
                  >
                </div>
              </div>
              <div
                class="absolute -top-5 -left-5 | flex items-center justify-center | bg-red-200 text-red-400 w-10 h-10 rounded-2xl"
              >
                <icon prefix="fas" icon="fire" />
              </div>
            </nuxt-link>
          </div>

          <!-- status -->
          <div class="absolute -left-14 top-4 w-72 anm-up d-card">
            <vs-alert relief>
              <template #title>
                服务器状态
              </template>
              <p>
                <icon prefix="fas" icon="server" />
                <span>192.168.2.4 已运行322天</span>
              </p>
              <p>
                <icon prefix="fas" icon="microchip" />
                <span>CPU占用率：77%</span>
              </p>
              <p>
                <icon prefix="fas" icon="memory" />
                <span>内存占用：7GB/8GB</span>
              </p>
              <p>
                <icon prefix="fas" icon="hdd" />
                <span>硬盘占用：54GB/64GB</span>
              </p>
            </vs-alert>
          </div>

          <!-- visit -->
          <div class="absolute top-56 -left-40 w-80 anm-down d-card">
            <vs-alert>
              <template #title>
                网站访问量
              </template>
              <div>
                <span>今日：4533</span>
                <span>昨日：2533</span>
                <span class="px-1 text-white bg-green-400 rounded"
                  ><icon prefix="fas" icon="chart-line" /> 增长35%</span
                >
              </div>
            </vs-alert>
          </div>

          <!-- heart -->
          <div class="absolute -left-80 top-52 anm-up">
            <vs-button icon relief danger animation-type="rotate" class="p-4">
              <i class="bx bx-like"></i>
              <template #animate>
                <icon class="text-2xl" prefix="fas" icon="heart" />
              </template>
            </vs-button>
          </div>
        </div>
      </div>
    </div>

    <!-- row 2 -->
    <div
      class="flex items-center justify-center"
      style="min-height: calc(100vh - 5.5rem);"
    >
      <div class="w-full">
        <div class="text-2xl font-bold text-center">最近上传</div>
        <div
          class="relative w-full py-20 overflow-hidden select-none whitespace-nowrap"
          ref="recent"
        >
          <ul class="inline-block px-10 space-x-4">
            <li
              class="inline-block w-32 h-32 overflow-hidden d-card"
              v-for="i in 10"
              :key="i"
            >
              <nuxt-link to="#">
                <img
                  src="https://vuesax.com/tipe.png"
                  class="object-cover w-32 h-32"
                  draggable="false"
                />
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import VueWordCloud from "vuewordcloud";
import BScroll from "@better-scroll/core";
export default {
  components: { [VueWordCloud.name]: VueWordCloud },
  layout: "dashboard",
  data() {
    return {
      words: [
        ["像我", 1],
        ["这样", 2],
        ["一行一个", 3],
        ["词语", 4],
        ["进行", 2],
        ["输入后", 5],
        ["并且", 5],
        ["用英文", 2],
        ["逗号", 2],
        ["分隔", 1],
        ["词频", 3],
        ["然后", 1],
        ["点击", 7],
        ["生成", 8],
        ["按钮", 3],
        ["即可", 2]
      ],
      options: {
        xAxis: {
          show: false,
          type: "category",
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
        },
        yAxis: {
          show: false,
          type: "value"
        },
        series: [
          {
            data: [
              4185,
              2190,
              804,
              2220,
              940,
              5133,
              1222,
              5201,
              421,
              3501,
              851,
              5251,
              4200,
              2400
            ],
            type: "line",
            smooth: true,
            symbol: "none"
          }
        ]
      }
    };
  },
  mounted() {
    const chart = echarts.init(this.$refs.chart);
    chart.setOption(this.options);
    window.addEventListener("resize", chart.resize);
    new BScroll(this.$refs.recent, {
      scrollX: true,
      probeType: 3,
      eventPassthrough: "vertical"
    });
  }
};
</script>

<style></style>
