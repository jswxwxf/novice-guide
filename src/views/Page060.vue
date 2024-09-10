<script setup>
import Bird from '@/components/Bird.vue';
import Hand from '@/components/Hand.vue';
import audioUrl from '@/assets/page060.mp3';
import { useStore } from '../store';
import { usePageHelper } from './helpers';

const { handleNextPage } = useStore();

const { birdRef, pageMode } = usePageHelper();
</script>

<template>
  <div class="novice-guide-page novice-guide-page-060">
    <div v-show="pageMode === 0" class="display-contents">
      <img src="@/assets/page060_10.png" />
      <div class="position-relative">
        <img src="@/assets/page060_20.png" />
        <Bird
          :ref="(ref) => (birdRef = ref)"
          :audioUrl="audioUrl"
          caption="恭喜你🎉，盒子内存有一封书信，接着进行盒子接收人填写、解锁问题设置"
        />
      </div>
    </div>
    <div v-show="pageMode === 1" class="display-contents">
      <div class="position-relative">
        <img src="@/assets/page060_30.png" />
        <Hand @click.stop="handleNextPage" />
      </div>
      <img src="@/assets/page060_40.png" />
    </div>
  </div>
</template>

<style scoped lang="less">
.novice-guide-page-060 {
  .novice-guide-bird {
    left: 5vw;
    top: -8vw;
    :deep(.novice-guide-words) {
      width: 90%;
    }
  }
  .novice-guide-hand {
    left: 45vw;
    top: unset;
    bottom: 0;
    &::before {
      width: 100vw;
      left: -45vw;
      height: 15vw;
      top: 0;
    }
  }
}
</style>
