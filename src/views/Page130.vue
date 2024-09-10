<script setup>
function handleExit() {
  if (/(iPhone|iPad|iPod|iOS|Macintosh|Android)/i.test(navigator.userAgent)) {
    window.location.href = 'jumptorujian://closeview';
  } else if (/(Android)/i.test(navigator.userAgent)) {
    nativeMethod.closeview();
  }
}
</script>

<template>
  <div class="novice-guide-page novice-guide-page-130">
    <img src="@/assets/page130.png" />
    <div class="cong-container">
      <div class="cong-container__inner">
        <img class="cong" src="@/assets/cong.gif" />
        <img class="cong-bg" src="@/assets/cong_bg.png" />
        <div class="button" @click="handleExit">正式体验如见</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.novice-guide-page-130 {
  .cong-container {
    position: absolute;
    width: 87vw;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .cong-container__inner {
      display: flex;
      align-items: center;
      flex-direction: column;
      img {
        width: 100%;
      }
      .cong {
        position: absolute;
      }
    }
  }

  .button {
    width: 41.5vw;
    height: 10vw;
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 1);
  }
}
</style>
