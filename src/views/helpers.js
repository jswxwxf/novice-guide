import { onMounted, ref } from 'vue';
import { useStore } from '@/store';
import { until } from '@/utils';

export function usePageHelper(options = {}) {
  const opts = {
    speed: 190,
    ...options,
  };
  const { birdRef, isSpeaking } = useStore();
  const pageMode = ref(0);

  onMounted(async () => {
    pageMode.value = 0;
    try {
      isSpeaking.value = true;
      await until(() => birdRef.value);
      await birdRef.value.start(opts.speed);
    } finally {
      setTimeout(() => {
        isSpeaking.value = false;
        pageMode.value = 1;
      }, 300);
    }
  });

  return {
    birdRef,
    pageMode,
  };
}
