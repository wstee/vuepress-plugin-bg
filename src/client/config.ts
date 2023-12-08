import { defineComponent, h } from 'vue'
import { defineClientConfig } from '@vuepress/client'
import LineBg from './components/LineBg.vue'
import ParticlesBg from './components/ParticlesBg.vue'

declare const __BG_OPTIONS__ 
const comps = {
  line: LineBg,
  particles: ParticlesBg
}
function getComp(type: string) {
  return comps[type]
}
export default defineClientConfig({
  rootComponents: [
    defineComponent(() => {
      // @ts-ignore
      if (__VUEPRESS_SSR__) return () => null
      return () => h(getComp(__BG_OPTIONS__.type), { options: __BG_OPTIONS__ })
    }),
  ],
})
