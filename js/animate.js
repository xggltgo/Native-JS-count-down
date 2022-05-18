function animation(options) {
  var from = options.from; //起始值
  var to = options.to; //终止值
  var totalTime = options.totalTime || 1000; //总时间
  var duration = options.duration || 15; //间隔时间
  var execNum = totalTime / duration; //执行次数
  var changeAmount = (to - from) / execNum; //每次改变的量
  var initAmount = 0; //初始量
  var totalAmount = to -from;
  var timerId = setInterval(function () {
    from += changeAmount;
    initAmount += changeAmount;
    if (Math.abs(initAmount) >= Math.abs(totalAmount)) {
      from = to;
      clearInterval(timerId);
      options.onend && options.onend();
    }
    options.everychange && options.everychange(from);
  }, duration);
}
