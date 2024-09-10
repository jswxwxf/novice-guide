export function until(conditionFunction, options = {}) {
  const opts = {
    maxRetry: 3,
    retryTimer: 400,
    ...options,
  };
  let retryCount = 0;
  const poll = (resolve) => {
    if (conditionFunction()) {
      resolve();
      return;
    }
    retryCount++;
    if (retryCount > opts.maxRetry) {
      return;
    }
    setTimeout((_) => poll(resolve), opts.retryTimer);
  };

  return new Promise(poll);
}

function isElementVisible(el) {
  if (!el) {
    return false;
  }
  const style = window.getComputedStyle(el);
  if (style.display === 'none') {
    return false;
  }
  return el.parentElement ? isElementVisible(el.parentElement) : true;
}

export function waitForAllImagesLoaded(selector = '.novice-guide-page img') {
  const images = document.querySelectorAll(selector);
  return Promise.all(
    [...images].map(
      (img) =>
        new Promise((resolve) => {
          // 图片不可见
          if (!isElementVisible(img)) {
            resolve(`notvisible`);
            return;
          }
          // 图片已经加载过了
          if (img.complete) {
            resolve('cached');
            return;
          }
          // 图片已被内联
          if (img.src.startsWith('data:image/png;base64')) {
            resolve('base64');
            return;
          }
          // gif太大了不等了
          if (img.src.endsWith('.gif')) {
            resolve('toolarge');
            return;
          }
          // 如果图片尺寸是否已知，就提前resolve
          until(() => img.naturalWidth > 0 && img.naturalHeight > 0, {
            maxRetry: 1,
            retryTimer: 1000,
          }).then(() => {
            console.log(
              `Image size known: ${img.naturalWidth}x${img.naturalHeight}`,
            );
            resolve('sizeknown');
          });
          // console.log(`loading ${img.src}`);
          // 老老实实等load事件
          img.addEventListener('load', () => resolve('loaded'));
        }),
    ),
  );
}
