<script setup>
import Hand from '@/components/Hand.vue';
import { useStore } from '../store';

const { handleNextPage } = useStore();
</script>

<template>
  <div class="novice-guide-page novice-guide-page-020">
    <img src="@/assets/page020_10.png" />
    <div class="position-relative">
      <img src="@/assets/page020_20.png" />
      <Hand @click.stop="handleNextPage" />
    </div>
  </div>
</template>

<style scoped lang="less">
.novice-guide-page-020 {
  .novice-guide-hand {
    left: 8vw;
    top: 2vw;
  }
}
</style>
