// vanila :  리소스(이미지, 폰트 등등등 로딩완료)
window.addEventListener("load", function (event) {
  // 코드 위치
  const header = document.querySelector(".header");
  const banner = document.querySelector(".banner");
  const visual = document.querySelector(".visual");
  // 스크롤을 하면 header 의 position 변경
  window.addEventListener("scroll", function () {
    // 스크롤에 따른 처리
    // 일정한 스크롤 이동높이 파악
    // 얼마 이상이면 header 를 고정(fixed)
    // 얼마 이하이면 header 를 상대적(relative)
    // 스크롤바가 이동한 거리를 파악하는 코드
    let scY = this.scrollY;
    //console.log(scY);
    // 꼭 기억해 두세요.
    // 자연스럽게 처리하게 위해서 classList.add()
    // 자연스럽게 처리하게 위해서 classList.remove()
    // if (scY > 0) {
    //   // 헤더를 postion: fixed;
    //   header.classList.add("header-fix");
    //   banner.classList.add("banner-fix");
    //   visual.classList.add("visual-fix");
    // } else {
    //   // 헤더를 postion: fixed; 제거
    //   header.classList.remove("header-fix");
    //   banner.classList.remove("banner-fix");
    //   visual.classList.remove("visual-fix");
    // }
  });
});

// jQuery:  html DOM 완료 후 실행
$(document).ready(function () {
  // 코드 위치
  const header = $(".header");
  const banner = $(".banner");
  const visual = $(".visual");
  // 스크롤을 하면 header 의 position 변경
  $(window).scroll(function () {
    // 스크롤 처리
    // 일정한 스크롤 이동높이 파악
    // 얼마 이상이면 header 를 고정(fixed)
    // 얼마 이하이면 header 를 상대적(relative)
    // 스크롤바가 이동한 거리를 파악하는 코드
    let scY = $(window).scrollTop();
    //console.log(scY);
    if (scY > 0) {
      // 헤더를 postion: fixed;
      header.addClass("header-fix");
      banner.addClass("banner-fix");
      //   visual.addClass("visual-fix");
      visual.css("margin-top", banner.height() + header.height());
    } else {
      // 헤더를 postion: fixed; 제거
      header.removeClass("header-fix");
      banner.removeClass("banner-fix");
      //   visual.removeClass("visual-fix");
      visual.css("margin-top", 0);
    }
  });
});
