<template>
  <transition name="fade">
    <div class="bg" :style="boxStyle" v-if="!isPhone">
      <slot />
    </div>
  </transition>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { onMounted } from 'vue'
import type { BgOptions } from '../../types'
import { isPhone as isPhoneFn } from '../utils';

const props = defineProps<{ options: BgOptions }>()

const isPhone = ref(false)
const boxStyle = computed(() => {
  return {
    zIndex: props.options.zIndex || -1,
    opacity: props.options.opacity || 0.9,
  }
})
onMounted(() => {
  isPhone.value = isPhoneFn()
})
</script>
<style scoped>
  .bg {
    position:fixed;
    top:0;
    left:0;
  }
</style>