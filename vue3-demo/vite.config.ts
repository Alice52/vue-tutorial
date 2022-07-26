/// <reference types="vitest" />

import Vue from '@vitejs/plugin-vue'
import path from 'path'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'

export default defineConfig({
  resolve: {
    // 提示, 使能点代码中
    alias: {
      // 多个项目时可以清晰引用关系
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      // 开启 vue3 的配置: ref-基本变量的双向绑定 ; reactive-对象的双向绑定
      reactivityTransform: true,
    }),

    // 页面与路由: 动态+静态 (https://github.com/hannoeru/vite-plugin-pages)
    Pages({
      // 指定项目页面的位置: 默认是 pages
      dirs: "src/pages"
    }),

    // 先都静态引入: 使用时或打包时会按需引入 (https://github.com/antfu/unplugin-auto-import)
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        'vue-router',
        '@vueuse/core',
      ],
      dts: true,
      // 将本项目的逻辑组件也启用自动导入功能
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      // 将本项目的组件也启用自动导入功能
      dts: true,
    }),

    // see unocss.config.ts for config (https://github.com/antfu/unocss)
    Unocss(),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})
