<script setup>
import { useProvideStore } from './store';
import { showToast } from 'vant';
import Page000 from '@/views/Page000.vue';
import Page010 from '@/views/Page010.vue';
import Page020 from '@/views/Page020.vue';
import Page030 from '@/views/Page030.vue';
import Page040 from '@/views/Page040.vue';
import Page050 from '@/views/Page050.vue';
import Page060 from '@/views/Page060.vue';
import Page070 from '@/views/Page070.vue';
import Page080 from '@/views/Page080.vue';
import Page090 from '@/views/Page090.vue';
import Page100 from '@/views/Page100.vue';
import Page110 from '@/views/Page110.vue';
import Page120 from '@/views/Page120.vue';
import Page130 from '@/views/Page130.vue';

const { currentPage, birdRef, isSpeaking, isTyping } = useProvideStore();

function handleClick() {
  if (currentPage.value === 0) {
    return;
  }
  if (isSpeaking.value) {
    birdRef.value.stop();
    return;
  }
  if (isTyping.value) {
    return;
  }
  showToast({ message: '请按指使进行操作', duration: 1000 });
}
</script>

<template>
  <div class="page-wrapper display-contents" @click="handleClick">
    <Page000 v-if="currentPage === 0" />
    <Page010 v-if="currentPage === 10" />
    <Page020 v-if="currentPage === 20" />
    <Page030 v-if="currentPage === 30" />
    <Page040 v-if="currentPage === 40" />
    <Page050 v-if="currentPage === 50" />
    <Page060 v-if="currentPage === 60" />
    <Page070 v-if="currentPage === 70" />
    <Page080 v-if="currentPage === 80" />
    <Page090 v-if="currentPage === 90" />
    <Page100 v-if="currentPage === 100" />
    <Page110 v-if="currentPage === 110" />
    <Page120 v-if="currentPage === 120" />
    <Page130 v-if="currentPage === 130" />
  </div>
</template>

<style scoped></style>
