AOS.init({
  duration: 1200,
})









// header 



const showAnim = gsap.from('header', {
  yPercent: -100,
  paused: true,
  duration: 0.5
}).progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse()
  }
});

var nav = document.getElementsByClassName('header');

window.onscroll = function sticky() {
  if (window.pageYOffset > nav[0].offsetTop) {
    nav[0].classList.add("topFixed");
  } else {
    nav[0].classList.remove("topFixed");
  }
};






$(document).ready(function () {


  // input click

  $(".inputBox span").click(function () {
    $('.inputBox input').toggleClass('inputActive');
  });





  // mobile nav button 

  $('.navBtn').on('click', function () {
    this.classList.toggle('openNav');
    $('.mobile_navWrapper').slideToggle(300);

    $('body').toggleClass('bodyscroll');
  });




  // mobile nav
  $('.mobile_nav .mainmenu > li').on('click', function () {
    $('.menu_title').toggleClass('openTitle');
    $(this).find('.submenu').slideToggle(300);

    $(this).siblings().find('.menu_title').removeClass('openTitle');
    $(this).siblings().find('.submenu').hide();
  });



  // pc nav
  $('.pc_nav .mainmenu > li').click(function () {
    $('.menu_title').toggleClass('openTitle');
    $(this).find('.submenu').slideToggle(300);
    $(this).siblings().find('.menu_title').removeClass('openTitle');
    $(this).siblings().find('.submenu').hide();
  });



  // profile

  $('.profile_wrapper > a').click(function () {
    $('.profile_submenu').slideToggle(300);
  });


  $('html').click(function (e) {
    if ($(e.target).parents('.profile_box').length < 1) {
      $('.profile_submenu').fadeOut();
    };
  });



  //영역 외 클릭 시 fade out 

  $('html').mouseout(function (e) {
    if ($(e.target).parents('.gnb').length < 1) {
      $('.submenu').fadeOut();
      $('.menu_title').removeClass('openTitle');
    };
  });






  // search
  


  $('.inputBox span').click(function () {
    $('.searhWindow').fadeIn(300);
  });


  $('.search_mobile').click(function () {
    $('.searhWindow').fadeIn(300);
  });


 $('.searchClose').click(function () {
    $('.searhWindow').fadeOut();
  });






  
  // main 


  var mainswiper = new Swiper(".main_swiper", {
    slidesPerView: '1',
    // spaceBetween: 10,
    speed: 1500,
    // effect: "fade",
    loop: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "progressbar",
      // type: "fraction",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },

  });




  // mobile footer

  $('.mobile_footer_ul >li').click(function () {
    $('.footer_title').toggleClass('mfooter_open');
    $(this).find('.footer_inner').slideToggle(300);
    $(this).siblings().find('.footer_title').removeClass('mfooter_open');
    $(this).siblings().find('.footer_inner').hide();

  });



});








// rank time


var Target = document.getElementById("clock");

function clock() {
  var time = new Date();

  var month = time.getMonth();
  var date = time.getDate();
  var day = time.getDay();
  var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();

  Target.innerText =
    `${month + 1}. ${date} ${week[day]}` +
    ` ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

}
clock();
setInterval(clock, 1000); // 1초마다 실행






// rank swiper

var rankswiper = new Swiper(".rank_swiper", {
  slidesPerView: '1',
  spaceBetween: 20,
  speed: 1000,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },


  breakpoints: {


    648: {
      slidesPerView: 3, //브라우저가 768보다 클 때
      spaceBetween: 20,
    },

    1041: {
      slidesPerView: 4, //브라우저가 768보다 클 때
      spaceBetween: 20,
    },

  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // type: "fraction",
  },

  navigation: {
    nextEl: "#rankNext",
    prevEl: "#rankPrev"
  },

});



$('.like').click(function () {
  $(this).toggleClass('liked');
});










//video




// 스크롤 시 동영상 재생
$(window).scroll(function () {
  var hT = $('.videoBox').offset().top,
    hH = $('.videoBox').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > (hT + hH - wH)) {
    var video = $('.videoBox').find('video');


    video.get(0).play();

    //동영상 재생시간 초기화
    // video.get(0).currentTime = 0;

    //동영상 일시정지
    // video.get(0).pause();
  }
});













// arrival

// 0 ~ 1 까지의 난수를 생성하는 Math 객체의 random 메소드를 사용합니다.

// random 메소드로 생성된 난수에 ( 예: 0.335435 ) 10 을 곱해줍니다.

// 50을 곱한 난수를 ceil 메소드를 사용하여 올림 값으로 변경합니다.
// var resultUp = Math.ceil(result);
// document.write(resultUp);



function arrival() {
  var sum = Math.random();

  var total = sum * 50;
  var resultUp = Math.ceil(total);

  var Arrival = document.getElementById("arrivalNum");



  Arrival.innerText = resultUp;
}






// tab

var swiper = new Swiper(".tabSwiper", {

  slidesPerView: 4,
  spaceBetween: 10,

  breakpoints: {

    1040: {
      // slidesPerView: 2,
      direction: "vertical",
      touchRatio: 0,
      spaceBetween: 20,

    },

  },

  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});



var tab = new Swiper('.tabCon', {
  slidesPerView: 1,
  spaceBetween: 10,
  autoHeight: true,
  // touchRatio: 0,
  allowTouchMove: false,
  // important!!!! 전체 슬라이드가 넘어가는 것을 막기 위해 사용

  thumbs: {
    swiper: {
      el: '.tabSwiper',
      slidesPerView: 3.5,
    }
  },
});


var swiper = new Swiper("#con1", {
  slidesPerView: 1.5,
  // content 안에서는 터치 드래그가 가능해야함.
  spaceBetween: 10,

  breakpoints: {

    1041: {
      slidesPerView: 2.5,

    },

  },


  navigation: {
    nextEl: "#con1_next",
    prevEl: "#con1_prev",
  },

});





var swiper = new Swiper("#con2", {
  slidesPerView: 1.5,
  spaceBetween: 15,

  breakpoints: {

    1041: {
      slidesPerView: 2.5,

    },

  },

  navigation: {
    nextEl: "#con2_next",
    prevEl: "#con2_prev",
  },


});




var swiper = new Swiper("#con3", {
  slidesPerView: 1.5,
  spaceBetween: 15,

  breakpoints: {

    1041: {
      slidesPerView: 2.5,

    },

  },

  navigation: {
    nextEl: "#con3_next",
    prevEl: "#con3_prev",
  },


});





var swiper = new Swiper("#con4", {
  slidesPerView: 1.5,
  spaceBetween: 15,

  breakpoints: {

    1041: {
      slidesPerView: 2.5,

    },

  },

  navigation: {
    nextEl: "#con4_next",
    prevEl: "#con4_prev",
  },

});








// weather

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}




// weather.js

const weather = document.querySelector(".js-weather");

// const API_KEY = "API KEY 입력";
const COORDS = "coords";

function getWeather(lat, lng) {
  fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
    )
    .then(function (response) { // .then = fetch가 완료 된 후 실행됨
      return response.json(); // json형태로 변환
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj) { // localStorage에 저장
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) { // 요청 수락
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj); // localStorage에 저장 함수
}

function handleGeoError() { // 요청 거절
  console.log("Not allowed.");
}

function askForCoords() { // 사용자 위치 요청 (요청 수락, 요청 거절)
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS); // localStorage에서 위치정보 가져옴
  if (loadedCoords === null) { // 위치 정보가 없으면
    askForCoords(); // 위치 정보 요청 함수
  } else {
    const parseCoords = JSON.parse(loadedCoords); // json형식을 객체 타입으로 바꿔서 저장
    getWeather(parseCoords.latitude, parseCoords.longitude); // 날씨 요청 함수
  }
}

function init() {
  loadCoords();
}

init();















// inspiration



const boxes = document.querySelectorAll('.box');

const config = {
  threshold: 0.5
};

const tl = new TimelineMax()

let observer = new IntersectionObserver(function (entries, self) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let overlap = '-=0.4';

      if (!tl.isActive()) {
        overlap = '+=0';
      }

      tl.to(entry.target, 0.5, {
        autoAlpha: 1
      }, overlap);
      self.unobserve(entry.target);
    }
  });
}, config);

boxes.forEach(box => {
  observer.observe(box);
});