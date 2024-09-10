import { onMounted, ref } from 'vue';
import { waitForAllImagesLoaded } from '@/utils';

export function useAllImagesLoaded(...args) {
  const allLoaded = ref(false);

  onMounted(async () => {
    await waitForAllImagesLoaded(...args);
    allLoaded.value = true;
  });

  return { allLoaded };
}
