# vuepress-plugin-bg

vuepress 背景插件

## 使用方法

`pnpm add vuepress-plugin-bg -D`

或

`npm i vuepress-plugin-bg -D`

或

`yarn add vuepress-plugin-bg -D`

```js
// 配置文件
import { defineUserConfig } from 'vuepress';
import { bgPlugin } from 'vuepress-plugin-bg';
export default defineUserConfig({
  plugins: [
    bgPlugin({
      // 配置参数
    }),
  ],
});
```

## 配置参数

```js
{
  type: 'line', // 背景类型 目前有 line praticles
  zIndex: -1, // canvas层级
  opacity: 0.9, // canvas透明度
  options: {
    color: '#666',
    count: 166
  } // 对应类型的配置
}
```

## 类型对应参数

### `line`

```js
bgPlugin({
  type: 'line', // 背景类型 目前有 line praticles
  zIndex: -1, // canvas层级
  opacity: 0.9, // canvas透明度
  options: {
    color: '#666', // 线的颜色
    count: 166, // 线的数量 多了可能会卡顿
  }, // 对应类型的配置
});
```

### `particles`

```js
bgPlugin({
  type: 'particles',
  options: {
    background: {
      color: '#000',
    },
    fullScreen: {
      zIndex: -1,
    },
    interactivity: {
      events: {
        onHover: {
          mode: 'trail',
          enable: true,
        },
      },
      modes: {
        trail: {
          delay: 0.005,
          quantity: 5,
          pauseOnStop: true,
          particles: {
            color: {
              value: '#ff0000',
              animation: {
                enable: true,
                speed: 400,
                sync: true,
              },
            },
            collisions: {
              enable: false,
            },
            links: {
              enable: false,
            },
            move: {
              outModes: {
                default: 'destroy',
              },
              speed: 2,
            },
            size: {
              value: {
                min: 1,
                max: 5,
              },
              animation: {
                enable: true,
                speed: 5,
                sync: true,
                startValue: 'min',
                destroy: 'max',
              },
            },
          },
        },
      },
    },
    particles: {
      color: {
        animation: {
          enable: true,
          sync: false,
          speed: 50,
        },
        value: '#ff0000',
      },
      links: {
        color: 'random',
        enable: true,
      },
      move: {
        enable: true,
      },
      number: {
        value: 100,
        density: {
          enable: true,
        },
      },
      opacity: {
        animation: {
          enable: true,
          speed: 0.5,
        },
        value: {
          min: 0.3,
          max: 0.8,
        },
      },
      size: {
        animation: {
          enable: true,
          speed: 3,
        },
        value: {
          min: 1,
          max: 3,
        },
      },
    },
    emitters: [],
  },
}),
```

详细使用请查阅官网
[tsparticles 官网](https://particles.js.org/)

#### 快捷设置

官网右上角，选择预设，然后自行调整后，点击导出，拿到配置 json 文件

![1702370910523(1)-2023-12-12](<https://res.wstee.com/blog/imgs/1702370910523(1)-2023-12-12.png>)
