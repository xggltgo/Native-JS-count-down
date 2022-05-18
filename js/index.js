//简化代码
function $(selector) {
  return document.querySelector(selector);
}
function $$(selector) {
  return document.querySelectorAll(selector);
}

//获取dom元素
var item = $(".item");
var low_second = $(".low-second");
var high_second = $(".high-second");
var low_minute = $(".low-minute");
var high_minute = $(".high-minute");
var low_hour = $(".low-hour");
var high_hour = $(".high-hour");

//获取每一次的滚动高度
var rollHeight = item.clientHeight;

/**
 * 
 * @param {Dom} container 传入需要滚动处理的dom容器
 * @param {Number} duration 传入间隔时间 
 */
function roll(container, duration) {
  setInterval(function () {
    var img = container.querySelector("img");
    container.style.transition = "all 0.5s linear";
    container.style.top = -rollHeight + "px";
    container.addEventListener("transitionend", function () {
      this.style.transition = "";
      this.appendChild(img);
      this.style.top = 0 + "px";
    });
  }, duration);
}


//按照毫秒数换算 调用函数
roll(low_second,1000);
roll(high_second,10000);
roll(low_minute,60000);
roll(high_minute,600000);
roll(low_hour,3600000);
roll(high_hour,36000000);



