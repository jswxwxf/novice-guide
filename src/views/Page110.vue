<script setup>
import Bird from '@/components/Bird.vue';
import Hand from '@/components/Hand.vue';
import audioUrl from '@/assets/page110.mp3';
import { useStore } from '../store';
import { usePageHelper } from './helpers';

const { handleNextPage } = useStore();

const { birdRef, pageMode } = usePageHelper();
</script>

<template>
  <div class="novice-guide-page novice-guide-page-110">
    <div v-show="pageMode === 0" class="display-contents">
      <img src="@/assets/page110_10.png" />
      <div class="position-relative">
        <img src="@/assets/page110_20.png" />
        <Bird
          :ref="(ref) => (birdRef = ref)"
          :audioUrl="audioUrl"
          caption="恭喜你🎉，完成盒子接收人的填写，解锁问题设置成功。接下来只要在发送机制里激活盒子"
          position="right"
        />
      </div>
    </div>
    <div v-show="pageMode === 1" class="display-contents">
      <img src="@/assets/page110_30.jpg" />
      <div class="position-relative">
        <img src="@/assets/page110_40.jpg" />
        <Hand @click.stop="handleNextPage" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.novice-guide-page-110 {
  .novice-guide-bird {
    left: 5vw;
    top: -15vw;
    :deep(.novice-guide-words) {
      width: 92%;
    }
  }
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
