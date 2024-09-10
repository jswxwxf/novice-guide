<script setup>
import Hand from '@/components/Hand.vue';
import { useStore } from '../store';

const { handleNextPage } = useStore();
</script>

<template>
  <div class="novice-guide-page novice-guide-page-070">
    <img src="@/assets/page070_10.jpg" />
    <div class="position-relative">
      <img src="@/assets/page070_20.jpg" />
      <Hand @click.stop="handleNextPage" />
    </div>
  </div>
</template>

<style scoped lang="less">
.novice-guide-page-070 {
  .novice-guide-hand {
    left: unset;
    right: 10vw;
    top: 1vw;
    &::before {
      // background-color: red;
      width: 100vw;
      left: -75vw;
      height: 20vw;
      top: -4vw;
    }
  }
}
</style>
