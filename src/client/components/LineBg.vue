<template>
  <bg-wrapper :options="props.options">
    <canvas ref="canvasRef"></canvas>
  </bg-wrapper>
</template>
<script lang="ts" setup>
import { ref, onMounted} from 'vue';
import { BgOptions } from '../../types';
import BgWrapper from './BgWrapper.vue';
const props = defineProps<{ options: BgOptions }>()
const options = props.options
const canvasRef = ref()
function color2Rgb(color: string) {
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  var sColor = color.toLowerCase();
  if(sColor && reg.test(sColor)){
      if(sColor.length === 4){
          var sColorNew = "#";
          for(var i=1; i<4; i+=1){
              sColorNew += sColor.slice(i,i+1).concat(sColor.slice(i,i+1));   
          }
          sColor = sColorNew;
      }
      //处理六位的颜色值
      var sColorChange: number[] = [];
      for(var i=1; i<7; i+=2){
          sColorChange.push(parseInt("0x"+sColor.slice(i,i+2)));  
      }
      return sColorChange.join(",");
  }else{
      return sColor;  
  }
}
onMounted(() => {
    let winWidth, winHeight, u: {x: number | null; y: number | null; xa?: number; ya?: number; max: number }[], s: {x: number; y: number; xa: number; ya: number; max: number }[] = [], oCanvas = canvasRef.value,
      color = options.options?.color ? color2Rgb(options.options.color) : '#666',
      count = options.options?.count || 166,
      l,
      ctx = oCanvas.getContext("2d"),
      animate = window.requestAnimationFrame ||
        function (n) {
          window.setTimeout(n, 1e3 / 45)
        },
      move = {
        x: -1,
        y: -1,
        max: 20000
      }; // 鼠标移动坐标
    function getWindowSize () {
      winWidth = oCanvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        winHeight = oCanvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
    function dwawLine () {
      ctx.clearRect(0, 0, winWidth, winHeight);
      s.forEach(function (i, x) {
        i.x += i.xa;
        i.y += i.ya;
        i.xa *= (i.x > winWidth || i.x < 0) ? -1 : 1;
        i.ya *= (i.y > winHeight || i.y < 0) ? -1 : 1;
        ctx.fillRect(i.x - .5, i.y - .5, 1, 1);
        for ( let e = x + 1; e < u.length; e++) {
          let n = u[e];
          if(null !== n.x&& null !== n.y) {
            let o = i.x - n.x;
            let m = i.y - n.y;
            let  l = o * o + m * m;
            if(l < n.max ) {
              // 吸引点
              n === move && l >= n.max / 2 && (i.x -= .03 * o, i.y -= .03 * m);
              let t = (n.max - l) / n.max;
              ctx.beginPath();
              ctx.lineWidth = t / 2;
              ctx.strokeStyle = "rgba(" + color + "," + (t + .2) + ")";
              ctx.moveTo(i.x, i.y);
              ctx.lineTo(n.x, n.y);
              ctx.closePath();
              ctx.stroke();
            }
          }
        }
      });
        animate(dwawLine)
    }
    getWindowSize();
    window.onresize = getWindowSize;
    window.onmousemove = function (e) {
      e = e || window.event;
      move.x = e.clientX;
      move.y = e.clientY;
    };
    window.onmouseout = function () {
      move.x = -1;
      move.y = -1;
    };
      // 随机产生线条
    
    for (let f = 0; count > f; f++) {
      let x = Math.random() * winWidth,
        y = Math.random() * winHeight,
        xa = 2 * Math.random() - 1,
        ya = 2 * Math.random() - 1;
      s.push({
        x,
        y,
        xa,
        ya,
        max: 6000
      })
    }
    u = [...s, move],
    setTimeout(function () {
      dwawLine()
    },
      100)
})
</script>