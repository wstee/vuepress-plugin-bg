# vuepress-plugin-bg

vuepress背景插件

## 使用方法

``pnpm add vuepress-plugin-bg``

或

``npm i vuepress-plugin-bg``

或

``yarn add vuepress-plugin-bg``

```js
// 配置文件
import { defineUserConfig } from 'vuepress';
import { bgPlugin } from '../../plugins/lib/node/index';
export default defineUserConfig({
  plugins: [
    bgPlugin({ 
      // 配置参数
    })
  ],
});
```

## 配置参数

```js
{
  type: 'line', // 背景类型
  zIndex: -1, // canvas层级
  opacity: 0.9, // canvas透明度
  options: {
    color: '#666',
    count: 166
  } // 对应类型的配置
}
```

## 类型对应参数

### ``line``

```js
{
  color: '#666', // 线的颜色
  count: 166, // 线的数量 多了可能会卡顿
}
```

