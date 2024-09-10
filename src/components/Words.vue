<script setup>
import { onUnmounted, ref, watch } from 'vue';

const props = defineProps({
  content: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
  },
});

const letters = ref([]);
const visibleLength = ref(-1);
let timer;

watch(
  () => props.content,
  () => {
    letters.value = [...props.content];
    visibleLength.value = -1;
    clearInterval(timer);
  },
  { immediate: true },
);

function start(speed = 200) {
  clearInterval(timer);
  return new Promise((resolve) => {
    timer = setInterval(() => {
      visibleLength.value++;
      if (visibleLength.value > letters.value.length) {
        clearInterval(timer);
        resolve();
      }
    }, speed);
  });
}

function stop() {
  console.log('stop words');
}

defineExpose({
  start,
  stop,
});

// start();

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <div class="novice-guide-words position-relative">
    <span v-show="visibleLength === -1 && placeholder" class="placeholder">
      {{ placeholder }}
    </span>
    <span
      v-for="(letter, i) in letters"
      :style="{
        visibility: i < visibleLength ? 'visible' : 'hidden',
      }"
    >
      {{ letter }}
    </span>
  </div>
</template>

<style scoped lang="less">
.novice-guide-words {
  .placeholder {
    color: #a8a8a8;
    font-weight: 200;
    position: absolute;
  }
}
</style>
