<script setup>
import { ref } from 'vue';
import Hand from '@/components/Hand.vue';
import { useStore } from '../store';

const { handleNextPage } = useStore();

const pageMode = ref(0);
</script>

<template>
  <div class="novice-guide-page novice-guide-page-040">
    <div v-show="pageMode === 0" class="display-contents mode-0">
      <div class="position-relative">
        <img src="@/assets/page040_10.png" />
        <Hand @click.stop="pageMode = 1" />
      </div>
      <img src="@/assets/page040_20.png" />
    </div>
    <div v-show="pageMode === 1" class="display-contents mode-1">
      <div class="position-relative">
        <img src="@/assets/page040_30.png" />
        <Hand @click.stop="handleNextPage" />
      </div>
      <img src="@/assets/page040_40.png" />
    </div>
  </div>
</template>

<style scoped lang="less">
.novice-guide-page-040 {
  .mode-0 {
    .novice-guide-hand {
      left: unset;
      top: unset;
      bottom: -1vw;
      right: 0;
    }
  }
  .mode-1 {
    .novice-guide-hand {
      left: unset;
      top: unset;
      bottom: -2vw;
      right: 0;
    }
  }
}
</style>
