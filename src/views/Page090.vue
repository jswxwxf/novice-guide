<script setup>
import Bird from '@/components/Bird.vue';
import Hand from '@/components/Hand.vue';
import audioUrl from '@/assets/page090.mp3';
import { useStore } from '../store';
import { usePageHelper } from './helpers';

const { handleNextPage } = useStore();

const { birdRef, pageMode } = usePageHelper();
</script>

<template>
  <div class="novice-guide-page novice-guide-page-090">
    <div v-show="pageMode === 0" class="display-contents">
      <img src="@/assets/page090_10.png" />
      <div class="position-relative">
        <img src="@/assets/page090_20.png" />
        <Bird
          :ref="(ref) => (birdRef = ref)"
          :audioUrl="audioUrl"
          caption="恭喜你🎉，完成盒子接收人的填写，现在跟随着完成解锁问题的设置吧。"
          position="right"
        />
      </div>
    </div>
    <div v-show="pageMode === 1" class="display-contents">
      <img src="@/assets/page090_30.jpg" />
      <div class="position-relative">
        <img src="@/assets/page090_40.jpg" />
        <Hand @click.stop="handleNextPage" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.novice-guide-page-090 {
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
