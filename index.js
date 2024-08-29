(() => {
  const getSkipBtnDOM = () => {
    return document.querySelector(".ytp-skip-ad-button");
  };

  /**
   * 将标准时间格式化
   * @param {Date} time 标准时间
   * @param {String} format 格式
   * @return {String}
   */
  function moment(time) {
    // 获取年⽉⽇时分秒
    let y = time.getFullYear();
    let m = (time.getMonth() + 1).toString().padStart(2, `0`);
    let d = time.getDate().toString().padStart(2, `0`);
    let h = time.getHours().toString().padStart(2, `0`);
    let min = time.getMinutes().toString().padStart(2, `0`);
    let s = time.getSeconds().toString().padStart(2, `0`);
    return `${y}-${m}-${d} ${h}:${min}:${s}`;
  }

  /**
   * 输出信息
   * @param {String} msg 信息
   * @return {undefined}
   */
  function log(msg) {
    if (!window.dev) {
      return false;
    }
    console.log(window.location.href);
    console.log(`${moment(new Date())}  ${msg}`);
  }

  const main = () => {
    const observer = new MutationObserver(() => {
      const skipBtnDOM = getSkipBtnDOM();
      if (skipBtnDOM) {
        // observer.disconnect();
        skipBtnDOM.click();
        log("click skip button");
      }
    });

    observer.observe(document.body, { subtree: true, childList: true });
    log("start observer");
  };

  main();
})();
