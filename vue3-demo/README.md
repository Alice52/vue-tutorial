## vue3

1. dir explain: `vite.config.ts` + `index.html+main.ts+app.vue`

   ```shell
   .
   |-- auto-imports.d.ts                    # ts autoimport 相关
   |-- components.d.ts                      # 组件的自动导入相关
   |-- index.html                           # 主文件入口
   |-- package.json                         # npm version
   |-- pnpm-lock.yaml                       # npm version lock file
   |-- public                               # 静态资源文件, 不参与build 但是最终会出现在打包中
   |-- shims.d.ts                           # 使用ts的相关定义接口
   |-- src                                  # vue 文件目录
   |   |-- App.vue                          # vue 主文件入口
   |   |-- components                       # vue 组件
   |   |   `-- Footer.vue
   |   |-- composables                      # vue 逻辑组件
   |   |   `-- index.ts
   |   |-- main.ts                          # vue 逻辑主入口: 路由等
   |   |-- pages                            # 项目页面
   |   |   |-- [...all].vue                 # 动态路由相关
   |   |   |-- hi                           # 路径会被放入路由
   |   |   |   `-- [name].vue
   |   |   `-- index.vue
   |   `-- styles
   |       `-- main.css                     # vue style
   |-- test                                 # 单测
   |   |-- basic.test.ts
   |   `-- component.test.ts
   |-- tsconfig.json                        # ts全局配置
   |-- unocss.config.ts                     # unocss 配置
   |-- vite.config.ts                       # vite 脚手架配置
   ```

2. vite cli config detail

   - [link](vite.config.ts)

3. Path Aliasing: `~/` is aliased to `./src/` folder.

   - For example, instead of having

     ```ts
     import { isDark } from '../../../../composables'
     ```

   - now, you can use

     ```ts
     import { isDark } from '~/composables'
     ```

4. [动态路由](https://github.com/hannoeru/vite-plugin-pages)

   - 文件路径会被映射进路由
   - 文件名可以作为属性被读取

5. 生命周期
6. vue 三件套: template + script + style
7. 组件间通信

   - 类型: 兄弟间 / 父子间
   - ~~pubsub~~
   - vuex
   - **store**
   - vue3: pinia

8. 页面间数据传递
9. await/sync/promise
10. axios: http
11. css

    - 布局: flex + absolution/relative
    - css 找元素

---

## issues

1. vue3 下为什么一定要写: `setup lang="ts"`

   - 语法糖

2. auto import 没有生效
3. `let counter = $ref(0)` 为什么也能双向绑定
4. vite cli 去初始化项目: `pnpm create vite`
