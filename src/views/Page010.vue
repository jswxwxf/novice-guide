<script setup>
import Bird from '@/components/Bird.vue';
import Hand from '@/components/Hand.vue';
import audioUrl from '@/assets/page010.mp3';
import { useStore } from '../store';
import { usePageHelper } from './helpers';

const { handleNextPage } = useStore();

const { birdRef, pageMode } = usePageHelper();
</script>

<template>
  <div class="novice-guide-page novice-guide-page-010">
    <div v-show="pageMode === 0" class="display-contents">
      <div class="position-relative">
        <img src="@/assets/page010_10.jpg" />
        <Bird
          :ref="(ref) => (birdRef = ref)"
          :audioUrl="audioUrl"
          caption="跟随引导，首先完成盒子的创建，首页“+”按钮点击"
        />
      </div>
      <img src="@/assets/page010_20.jpg" />
    </div>
    <div v-show="pageMode === 1" class="display-contents">
      <img src="@/assets/page010_30.png" />
      <div class="position-relative">
        <img src="@/assets/page010_40.png" />
        <Hand @click.stop="handleNextPage" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.novice-guide-page-010 {
  .novice-guide-bird {
    top: auto;
    bottom: 0;
  }
  .novice-guide-hand {
    left: unset;
    top: 1vw;
    right: 4vw;
  }
}
</style>
