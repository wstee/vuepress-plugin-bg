<template>
  <transition name="fade">
    <div class="bg" :style="boxStyle">
      <vue-particles
        id="tsparticles"
        :particlesInit="particlesInit"
        :particlesLoaded="particlesLoaded"
        :options="props.options.options"  
      ></vue-particles>
    </div>
  </transition>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { onMounted } from 'vue'
import type { BgOptions } from '../../types'
import { loadFull } from 'tsparticles'
import { isPhone } from '../utils';
import VueParticles from 'vue3-particles/src/components/Particles.vue'

const particlesInit = async (engine) => {
  await loadFull(engine)
}

const particlesLoaded = async (container) => {
  console.log('Particles container loaded', container)
}

const props = defineProps<{ options: BgOptions<any> }>()
const boxStyle = computed(() => {
  return {
    zIndex: props.options.zIndex || -1,
    opacity: props.options.opacity || 0.9,
  }
})
const canvasRef = ref()
onMounted(() => {
  if (isPhone()) return
})
</script>
<style scoped>
  .bg {
    position:fixed;
    top:0;
    left:0;
  }
</style>