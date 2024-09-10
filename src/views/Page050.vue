<script setup>
import { ref } from 'vue';
import Hand from '@/components/Hand.vue';
import Words from '@/components/Words.vue';
import { useAllImagesLoaded } from '@/components/helpers';
import { useStore } from '../store';

const { allLoaded: showWords } = useAllImagesLoaded();

const { isTyping, handleNextPage } = useStore();

const titleRef = ref();
const contentRef = ref();
const pageMode = ref(0);

async function handleStart() {
  pageMode.value = 1; // typing
  try {
    isTyping.value = true;
    await titleRef.value.start();
    await contentRef.value.start();
    pageMode.value = 2; // done typing
  } finally {
    isTyping.value = false;
  }
}
</script>

<template>
  <div class="novice-guide-page novice-guide-page-050">
    <div class="position-relative mode-2">
      <img src="@/assets/page050_10.png" />
      <Hand v-if="pageMode === 2" @click.stop="handleNextPage" />
    </div>
    <div class="position-relative">
      <img src="@/assets/page050_20.png" />
      <div v-show="showWords" class="container">
        <Words
          :ref="(ref) => (titleRef = ref)"
          placeholder="请输入标题"
          content="给父母的一封信"
          class="title-words"
        />
        <Words
          :ref="(ref) => (contentRef = ref)"
          placeholder="请输入书信内容"
          content="“亲爱的爸妈，只想让你们知道，无论何时何境，我都永远爱着你们哦~”"
          class="content-words"
        />
      </div>
      <Hand v-if="pageMode === 0" @click.stop="handleStart" />
    </div>
  </div>
</template>

<style scoped lang="less">
.novice-guide-page-050 {
  .container {
    position: absolute;
    top: 0;
    left: 0;
    padding: 4vw 5vw;
    .title-words {
      font-size: 5vw;
      border-bottom: 1px dashed #a8a8a8;
      padding-bottom: 2vw;
      margin-bottom: 3vw;
    }
    .content-words {
      font-size: 4vw;
      padding-right: 4vw;
    }
  }
  .novice-guide-hand {
    left: 25vw;
    top: 1vw;
  }
  .mode-2 {
    .novice-guide-hand {
      left: unset;
      top: unset;
      right: 1vw;
      bottom: -4vw;
      z-index: 3000;
    }
  }
}
</style>
