# front

this repo is about learning note about front

## env setup

1.  setup vscode

    - vscode settings
    - vscode extension
    - terminal: zsh

2.  setup node

    - node: 16.16.0
    - npm
    - yarn
    - pnpm

3.  setup eslint

    - package.json

      ```json
      "eslintConfig": {
        "extends": "@antfu",
        // 定制化 lint
        "rules": {}
      }
      ```

    - `or` in **.eslintrc**

      ```json
      {
        "extends": "@antfu",
        // 定制化 lint
        "rules": {}
      }
      ```

4.  setup project

    ```shell
    # pnpm: 最新的包管理工具{对npm或yarn的上层封装}
    npm install -g pnpm

    # ni 根据项目选择包管理工具并执行 install (https://github.com/antfu/ni)
    pnpm install -g @antfu/ni

    # taze 将项目中所有包更新的最新 (https://github.com/antfu/taze)
    pnpm i -g taze  # taze --major -iwr: 升级

    # git clone 快速: 相当于 --depth=1
    pnpm i -g degit
    ```

5.  startup project

    ```shell
    # degit seed project
    degit https://github.com/antfu/vitesse-lite.git vue3-demo

    # 执行 install
    ni

    # 启动
    pnpm dev

    # 升级
    taze --major -iwr
    ```
