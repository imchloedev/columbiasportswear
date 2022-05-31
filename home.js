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







// 남은 시간


// function CountDownTimer(dt, id) {
//   var end = new Date(dt);
//   var _second = 1000;
//   var _minute = _second * 60;
//   var _hour = _minute * 60;
//   var _day = _hour * 24;
//   var timer;

//   function showRemaining() {
//     var now = new Date();
//     var distance = end - now;
//     if (distance < 0) {
//       clearInterval(timer);
//       document.getElementById("time_left").innerText = '타임딜 종료됨';
//       return;
//     }
//     var days = Math.floor(distance / _day);
//     var hours = Math.floor((distance % _day) / _hour);
//     var minutes = Math.floor((distance % _hour) / _minute);
//     var seconds = Math.floor((distance % _minute) / _second);
//     document.getElementById("time_days").innerText = days + 'Days ';
//     document.getElementById("time_hours").innerText += hours + 'hrs ';
//     document.getElementById("time_mins").innerText += minutes + 'mins ';
//     document.getElementById("time_secs").innerText += seconds + 'secs';
//   }

//   timer = setInterval(showRemaining, 1000);

// }
// CountDownTimer('12/31/2022 00:00:00', 'timeDeal'); // 2020-12-06 오후10시 50분까지




// function remaindTime() {
//   var now = new Date(); //현재시간을 구한다. 
//   var open = new Date(2022, 12, 11, 11, 00, 00);

//   var nt = now.getTime(); // 현재의 시간만 가져온다
//   var ot = open.getTime(); // 오픈시간만 가져온다

//   if (nt < ot) { //현재시간이 오픈시간보다 이르면 오픈시간까지의 남은 시간을 구한다.   
//     sec = parseInt(ot - nt) / 1000;
//     hour = parseInt(sec / 60 / 60);
//     sec = (sec - (hour * 60 * 60));
//     min = parseInt(sec / 60);
//     sec = parseInt(sec - (min * 60));

//     if (hour < 10) {
//       hour = "0" + hour;
//     }
//     if (min < 10) {
//       min = "0" + min;
//     }
//     if (sec < 10) {
//       sec = "0" + sec;
//     }
//     $("#time_hours").html(hour);
//     $("#time_mins").html(min);
//     $("#time_secs").html(sec);
//   } else { //현재시간이 종료시간보다 크면
//     $("#d-day-hour").html('00');
//     $("#d-day-min").html('00');
//     $("#d-day-sec").html('00');
//   }
// }
// setInterval(remaindTime, 1000);













// weather

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}




// weather.js

// var weather = document.getElementById('js-weather');


// const getJSON = function (url, callback) {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', url, true);
//   xhr.responseType = 'json';
//   xhr.onload = function () {
//     const status = xhr.status;
//     if (status === 200) {
//       callback(null, xhr.response);
//     } else {
//       callback(status, xhr.response);
//     }
//   };
//   xhr.send();
// };

// getJSON('http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=1eb1d18602c0e2dde562cdc2005a4495&units=metric',
//   function (err, data) {
//     if (err !== null) {
//       alert('Unexpected error occured.' + err);
//     } 

//     else {
//       weather.innerText = (`${data.main.temp}°
//       Wind ${data.wind.speed}m/s
//       Humidity ${data.main.humidity}%
//       High ${data.main.temp_max}°
//       Low ${data.main.temp_min}°`);
//     }
//   });








$(document).ready(function () {
  let weatherIcon = {
    '01': 'fas fa-sun',
    '02': 'fas fa-cloud-sun',
    '03': 'fas fa-cloud',
    '04': 'fas fa-cloud-meatball',
    '09': 'fas fa-cloud-sun-rain',
    '10': 'fas fa-cloud-showers-heavy',
    '11': 'fas fa-poo-storm',
    '13': 'far fa-snowflake',
    '50': 'fas fa-smog'
  };
  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=1eb1d18602c0e2dde562cdc2005a4495&units=metric',
    dataType: 'json',
    type: 'GET',
    success: function (data) {
      var $Icon = (data.weather[0].icon).substr(0, 2);
      var $Temp = Math.floor(data.main.temp) + 'º';
      var $city = data.name;
      $('.CurrIcon').append('<i class="' + weatherIcon[$Icon] + '"></i>');
      $('.CurrTemp').prepend($Temp);
      $('.City').append($city);
    },

  })
});











// getJSON('http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=1eb1d18602c0e2dde562cdc2005a4495&units=metric', function (err, data) {
//   if (err !== null) {
//     alert('Sorry!' + err);
//   } else {
//     function (data) {
//       var $Icon = (data.weather[0].icon).substr(0, 2);
//       var $Temp = Math.floor(data.main.temp) + 'º';
//       var $city = data.name;
//       $('.CurrIcon').append('<i class="' + weatherIcon[$Icon] + '"></i>');
//       $('.CurrTemp').prepend($Temp);
//       $('.City').append($city);
//     },
//   }
// })
























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