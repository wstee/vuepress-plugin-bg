<template>
  <bg-wrapper :options="props.options">
    <vue-particles
        id="tsparticles"
        :particlesInit="particlesInit"
        :particlesLoaded="particlesLoaded"
        :options="props.options.options"  
      ></vue-particles>
  </bg-wrapper>
</template>
<script lang="ts" setup>
import type { BgOptions } from '../../types'
import BgWrapper from './BgWrapper.vue';
import { loadFull } from 'tsparticles'
import VueParticles from './VueParticles/VueParticles.vue'
import { loadPolygonPath } from '@tsparticles/path-polygon'
import { loadLightInteraction } from '@tsparticles/interaction-light'

const props = defineProps<{ options: BgOptions }>()


const particlesInit = async (engine) => {
  await loadPolygonPath(engine)
  await loadLightInteraction(engine)
  await loadFull(engine)
}

const particlesLoaded = async (container) => {
  console.log('Particles container loaded', container)
}
</script>
<style scoped>
  .bg {
    position:fixed;
    top:0;
    left:0;
  }
</style>