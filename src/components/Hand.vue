<script setup>
import { useAllImagesLoaded } from './helpers';

const { allLoaded: showHand } = useAllImagesLoaded();
</script>

<template>
  <div
    v-show="showHand"
    class="novice-guide-hand position-relative"
    @click="handleClick"
  >
    <div class="inner-circle"></div>
    <div class="outer-circle"></div>
    <img src="@/assets/hand.png" class="pointer" />
  </div>
</template>

<style scoped lang="less">
.novice-guide-hand {
  position: absolute;
  top: 0;
  left: 0;
  width: 13vw;
  height: 13vw;

  &:before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%; /* 比点击元素大一倍 */
    height: 200%; /* 比点击元素大一倍 */
    background-color: transparent;
    z-index: 1000; /* 使遮罩在内容之上 */
  }

  @inner-translate10: translate(-10%, -10%);
  @inner-translate50: translate(-50%, -50%);

  .pointer {
    position: absolute;
    top: 50%;
    left: 50%;
    animation: scaleAnimation 0.5s infinite alternate;
  }

  @keyframes scaleAnimation {
    0% {
      transform: @inner-translate10 scale(1.3);
    }
    100% {
      transform: @inner-translate10 scale(1);
    }
  }

  .inner-circle,
  .outer-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
  }

  .inner-circle {
    width: 1.3vw;
    height: 1.3vw;
    background: rgba(251, 233, 213, 0.8);
    animation: innerCircleEffect 1.1s cubic-bezier(0.45, 0.05, 0.78, 0.9)
      infinite;
  }

  .outer-circle {
    width: 11vw;
    height: 11vw;
    border: 2px solid rgba(250, 181, 156, 0.24); /* Gold color with opacity */
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
    animation: outerCircleEffect 1.1s cubic-bezier(0.45, 0.05, 0.78, 0.9)
      infinite;
  }

  @keyframes innerCircleEffect {
    from {
      transform: @inner-translate50 scale(1);
      opacity: 1;
    }
    to {
      transform: @inner-translate50 scale(7);
      opacity: 0;
    }
  }

  @keyframes outerCircleEffect {
    from {
      transform: @inner-translate50 scale(1);
      opacity: 1;
    }
    to {
      transform: @inner-translate50 scale(3);
      opacity: 0;
    }
  }
}
</style>
