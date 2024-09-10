<script setup>
import Bird from '@/components/Bird.vue';
import Hand from '@/components/Hand.vue';
import audioUrl from '@/assets/page030.mp3';
import { useStore } from '../store';
import { usePageHelper } from './helpers';

const { handleNextPage } = useStore();

const { birdRef, pageMode } = usePageHelper();
</script>

<template>
  <div class="novice-guide-page novice-guide-page-030">
    <div v-show="pageMode === 0" class="display-contents">
      <div class="position-relative">
        <img src="@/assets/page030_10.png" />
        <Bird
          :ref="(ref) => (birdRef = ref)"
          :audioUrl="audioUrl"
          caption="恭喜你🎉，私密盒子创建成功，进入创建好的私密盒子内，放入一封书信吧！"
        />
      </div>
      <img src="@/assets/page030_20.png" />
    </div>
    <div v-show="pageMode === 1" class="display-contents">
      <div class="position-relative">
        <img src="@/assets/page030_30.png" />
        <Hand @click.stop="handleNextPage" />
      </div>
      <img src="@/assets/page030_40.png" />
    </div>
  </div>
</template>

<style scoped lang="less">
.novice-guide-page-030 {
  .novice-guide-bird {
    top: auto;
    bottom: -5vw;
    :deep(.novice-guide-words) {
      width: 90%;
    }
  }
  .novice-guide-hand {
    left: unset;
    top: unset;
    bottom: 10vw;
    right: 30vw;
    &::before {
      // background-color: red;
      width: 60vw;
      left: -35vw;
      height: 60vw;
      top: -35vw;
    }
  }
}
</style>
