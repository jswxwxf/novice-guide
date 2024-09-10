<script setup>
import { nextTick, ref } from 'vue';
import Words from './Words.vue';
import { until } from '@/utils';
import { useAllImagesLoaded } from './helpers';

const { allLoaded: showBird } = useAllImagesLoaded();

const props = defineProps({
  audioUrl: {
    type: String,
  },
  caption: {
    type: String,
  },
  position: {
    type: String,
    default: 'left',
  },
});

const wordsRef = ref();
const audio = ref();

function loadAudio() {
  return new Promise((resolve) => {
    audio.value = new Audio(props.audioUrl);
    audio.value.load();
    audio.value.addEventListener('canplay', () => {
      resolve();
    });
  });
}

function playAudio() {
  return new Promise((resolve) => {
    audio.value.play();
    audio.value.addEventListener('ended', () => {
      resolve();
    });
  });
}

const emit = defineEmits(['speaking', 'doneSpeaking']);

async function start(speed) {
  await Promise.all([
    loadAudio(),
    until(() => showBird.value, { maxRetry: Infinity }),
    until(() => wordsRef.value),
  ]);
  return Promise.all([playAudio(), wordsRef.value.start(speed)]);
}

async function stop() {
  console.log('stop birds');
  await until(() => wordsRef.value);
  wordsRef.value.stop();
}

defineExpose({
  start,
  stop,
});
</script>

<template>
  <div
    v-show="showBird"
    class="novice-guide-bird"
    :class="`position-${position}`"
  >
    <img src="@/assets/bird.gif" />
    <Words :ref="(ref) => (wordsRef = ref)" :content="caption" />
  </div>
</template>

<style scoped lang="less">
.novice-guide-bird {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  // background-color: red;
  padding: 1rem;
  img {
    width: 25%;
  }
  .novice-guide-words {
    width: 80%;
    background: linear-gradient(90deg, #3ccb52 2%, #c2ce34 94%);
    border-radius: 20px;
    padding: 0.5rem 1rem;
    color: white;
    position: relative;
    margin-top: -5px;

    &::before {
      content: '';
      position: absolute;
      top: -20px;
      left: 13%;
      margin-left: -10px;
      border-width: 10px;
      border-style: solid;
      border-color: transparent transparent #3ccb52 transparent;
    }
  }
  &.position-right {
    img {
      align-self: flex-end;
      margin-right: 15vw;
    }
    .novice-guide-words {
      &::before {
        left: 78%;
        border-color: transparent transparent #c2ce34 transparent;
      }
    }
  }
}
</style>
