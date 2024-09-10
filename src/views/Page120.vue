<script setup>
import { ref } from 'vue';
import Hand from '@/components/Hand.vue';
import { useStore } from '../store';

const { handleNextPage } = useStore();

const pageMode = ref(0);

function handleCheck() {
  pageMode.value = 1;
}
</script>

<template>
  <div class="novice-guide-page novice-guide-page-120">
    <div v-show="pageMode === 0" class="display-contents mode-0">
      <img src="@/assets/page120_10.png" />
      <div class="position-relative">
        <img src="@/assets/page120_20.png" />
        <Hand @click.stop="handleCheck" />
      </div>
    </div>
    <div v-show="pageMode === 1" class="display-contents mode-1">
      <div class="position-relative">
        <img src="@/assets/page120_30.png" />
        <Hand @click.stop="handleNextPage" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.novice-guide-page-120 {
  .mode-0 {
    .novice-guide-hand {
      left: unset;
      right: 3vw;
      top: 5vw;
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
