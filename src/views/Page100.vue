<script setup>
import { ref } from 'vue';
import Hand from '@/components/Hand.vue';
import { useStore } from '../store';

const { handleNextPage } = useStore();

const pageMode = ref(0);

function handleFill() {
  pageMode.value = 1;
}
</script>

<template>
  <div class="novice-guide-page novice-guide-page-100">
    <div v-show="pageMode === 0" class="display-contents mode-0">
      <img src="@/assets/page100_10.jpg" />
      <div class="position-relative">
        <img src="@/assets/page100_20.jpg" />
        <Hand @click.stop="handleFill" />
      </div>
    </div>
    <div v-show="pageMode === 1" class="display-contents mode-1">
      <div class="position-relative">
        <img src="@/assets/page100_30.jpg" />
        <Hand @click.stop="handleNextPage" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.novice-guide-page-100 {
  .mode-0 {
    .novice-guide-hand {
      left: unset;
      right: 3vw;
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
  .mode-1 {
    .novice-guide-hand {
      left: unset;
      top: 15vw;
      right: 1vw;
    }
  }
}
</style>
