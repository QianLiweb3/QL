//滑动标题隐藏或显示
let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-70px";
  }

  prevScrollPos = currentScrollPos;
};





// 用于复制marquee-track中的元素以实现无限循环
const marqueeTrack = document.querySelector('.marquee-track');
marqueeTrack.innerHTML += marqueeTrack.innerHTML;

// 获取marquee-track的宽度
const marqueeTrackWidth = marqueeTrack.getBoundingClientRect().width;

// 设置marquee-track的宽度以实现横向滚动
marqueeTrack.style.width = marqueeTrackWidth + 'px';



