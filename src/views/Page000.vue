<script setup>
import { onMounted } from 'vue';
import { showToast } from 'vant';
import { useStore } from '../store';

onMounted(() => {
  showToast({ message: '点击任意位置开始引导', duration: 0 });
});

const { handleNextPage } = useStore();

function handleStart() {
  setTimeout(() => handleNextPage(), 0);
}
</script>

<template>
  <div class="novice-guide-page" @click="handleStart">
    <div class="novice-guide-page">
      <img src="@/assets/page000.png" />
    </div>
  </div>
</template>

<style scoped lang="less"></style>
