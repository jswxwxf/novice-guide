import { ref } from 'vue';
import { createInjectionState } from '@vueuse/core';
import { closeToast } from 'vant';

function store() {
  const currentPage = ref(0);
  const birdRef = ref();
  const isSpeaking = ref(false);
  const isTyping = ref(false);

  function handleNextPage() {
    closeToast(true);
    currentPage.value += 10;
  }

  return {
    currentPage,
    birdRef,
    isSpeaking,
    isTyping,
    handleNextPage,
  };
}

const [useProvideStore, useStore] = createInjectionState(store);

export { useProvideStore, useStore };
