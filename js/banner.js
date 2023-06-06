/**
 * 작업자 : 고길동
 * 작업일 : 2023-05-23
 * 작업내역: 배너작업
 */
// event.currentTarget : 누가 발생시켰는지
// event.target : 누가 이벤트를 핸들링 하는가
// "load" : 이벤트 타입(종류) 리소스 로드완료시 실행
// "contentsLoaded.." : 이벤트 타입(종류) DOM 완성시 실행
// 콜백함수 : 이벤트 핸들러
// 매개변수 : event 는 이벤트 객체가 암묵적으로 전달해 주는 인자(argument)다.
window.addEventListener("load", function (event) {
  fetch("data/banner.json")
    .then((res) => res.json())
    .then((result) => {
      let html = "";
      result["banner-list"].forEach(function (item, index, arr) {
        let tempTag = `<div class="swiper-slide"><a href="${item.link}">${item.title}</a></div>`;
        html = html + tempTag;
      });

      // Vanila 버전
      document.querySelector(".sw-banner .swiper-wrapper").innerHTML = html;
      // jQuery 버전
      // $(".sw-banner .swiper-wrapper").html(html);
    })
    .catch((err) => console.log(err));

  const swBanner = new Swiper(".sw-banner", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 0,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".sw-banner-pg",
      clickable: true,
    },
    navigation: {
      nextEl: ".sw-banner-next",
      prevEl: ".sw-banner-prev",
    },
  });
});

// 이미지, 폰트 등 모든 리소스 로딩 완료시
// 이벤트 객체를 전달하면서 핸들러 함수실행
window.addEventListener("load", function (event) {
  let bannerSlide = document.querySelector(".banner-slide");
  let bannerBt = document.querySelector(".banner-bt");

  // html 태그가 실제로 적용되는 px 높이 알아내기
  let bannerHeight = bannerSlide.scrollHeight;
  //   bannerSlide.style.height = bannerHeight + "px";

  // banner 가 open 상태를 기록한다.
  // 사용자가 정의한 변수
  let bannerOpenState = true;

  bannerBt.onclick = function () {
    // 동적 클래스 추가
    // bannerSlide.classList.add("active");
    // 동적 클래스 삭제
    // bannerSlide.classList.remove("active");
    // 동적 클래스 토글
    // bannerSlide.classList.toggle("active");
    // 클래스 존재 여부
    // bannerSlide.classList.contain("active");
    // if (bannerOpenState === true) {
    //   anime({
    //     targets: bannerSlide,
    //     height: 0,
    //     duration: 500,
    //     easing: "easeInOutExpo",
    //   });
    //   bannerOpenState = false;
    // } else {
    //   anime({
    //     targets: bannerSlide,
    //     height: 90,
    //     duration: 500,
    //     easing: "easeInOutExpo",
    //   });
    //   bannerOpenState = true;
    // }
  };
});

////////////  jQuery /////////////////////
// DOM 완성이 되면.
$(document).ready(function () {
  let bannerSlide = $(".banner-slide");
  let bannerBt = $(".banner-bt");
  let bannerOpenState = true;
  bannerBt.click(function () {
    // bannerSlide.css("height", 0);
    // 클래스 동적 추가
    // bannerSlide.addClass("active");
    // 클래스 동적 제거
    // bannerSlide.removeClass("active");
    // 클래스 동적토글
    // bannerSlide.toggleClass("active");
    // 클래스 동적 적용 파악
    // bannerSlide.hasClass("active");
    // css transition 없이 활용 가능
    // bannerSlide.stop().slideUp();
    // bannerSlide.stop().slideDown();
    // $(".sw-banner").stop().slideToggle();

    const targetHeight = bannerOpenState ? 0 : 90;

    anime({
      targets: ".banner-slide",
      height: targetHeight,
      duration: 500,
      easing: "easeInOutExpo",
    });

    bannerOpenState = !bannerOpenState;
  });
});
