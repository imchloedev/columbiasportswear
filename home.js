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
    $('.navWrapper').slideToggle(300);
    $('header').toggleClass('openWhite');

    $('body').toggleClass('bodyscroll');
  });

  //  nav
  $('.mainmenu > li').on('click', function () {
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
setInterval(clock, 1000); // 1sec



// rank swiper
var rankswiper = new Swiper(".rank_swiper", {
  slidesPerView: '1.5',
  spaceBetween: 20,
  speed: 1000,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {

    648: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1041: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: "#rankNext",
    prevEl: "#rankPrev"
  },

});



// like button
$('.like').click(function () {
  $(this).toggleClass('liked');
});


//video

// scroll down -> video play
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
  // important!!!! 

  thumbs: {
    swiper: {
      el: '.tabSwiper',
      slidesPerView: 3.5,
    }
  },
});


var swiper = new Swiper("#con1", {
  slidesPerView: 1.5,
  spaceBetween: 10,

  breakpoints: {

    648: {
      slidesPerView: 2,
    },

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
    648: {
      slidesPerView: 2,
    },

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
    648: {
      slidesPerView: 2,
    },

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

    648: {
      slidesPerView: 2,
    },

    1041: {
      slidesPerView: 2.5,
    },
  },

  navigation: {
    nextEl: "#con4_next",
    prevEl: "#con4_prev",
  },

});



// remaining Time

const remainDay = document.querySelector("#time_days");
const remainHour = document.querySelector("#time_hours");
const remainMin = document.querySelector("#time_mins");
const remainSec = document.querySelector("#time_secs");


function diffDay() {
  const masTime = new Date("2022-12-31");
  const todayTime = new Date();

  const diff = masTime - todayTime;

  const diffDay = String(Math.floor(diff / (1000 * 60 * 60 * 24)));
  const diffHour = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0");
  const diffMin = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
  const diffSec = String(Math.floor(diff / 1000 % 60)).padStart(2, "0");

  remainDay.innerHTML = `${diffDay}<span>DAYS</span>`;
  remainHour.innerHTML = `${diffHour}<span>HRS</span>`;
  remainMin.innerHTML = `${diffMin}<span>MINS</span>`;
  remainSec.innerHTML = `${diffSec}<span>SECS</span>`;
}

diffDay();
setInterval(diffDay, 1000);




// weather

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}


// $(document).ready(function () {
//   let weatherIcon = {
//     '01': 'fas fa-sun',
//     '02': 'fas fa-cloud-sun',
//     '03': 'fas fa-cloud',
//     '04': 'fas fa-cloud-meatball',
//     '09': 'fas fa-cloud-sun-rain',
//     '10': 'fas fa-cloud-showers-heavy',
//     '11': 'fas fa-poo-storm',
//     '13': 'far fa-snowflake',
//     '50': 'fas fa-smog'
//   };
//   $.ajax({
//     url: 'http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=1eb1d18602c0e2dde562cdc2005a4495&units=metric',
//     dataType: 'json',
//     type: 'GET',
//     success: function (data) {
//       var $Icon = (data.weather[0].icon).substr(0, 2);
//       var $Temp = Math.floor(data.main.temp) + 'º';
//       var $city = data.name;
//       $('.CurrIcon').append('<i class="' + weatherIcon[$Icon] + '"></i>');
//       $('.CurrTemp').prepend($Temp);
//       $('.City').append($city);
//     },

//   })
// });



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



  // mobile footer

  $('.mobile_footer_ul >li').click(function () {
    $('.footer_title').toggleClass('mfooter_open');
    $(this).find('.footer_inner').slideToggle(300);
    $(this).siblings().find('.footer_title').removeClass('mfooter_open');
    $(this).siblings().find('.footer_inner').hide();
  });


// top 버튼

$(document).ready(function () {
  $(".topBtn").hide(); // 탑 버튼 숨김
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        // 스크롤 내릴 표시
        $('.topBtn').fadeIn(200);
      } else {
        $('.topBtn').fadeOut(200);
      }
    });
    $('.topBtn').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 400);
      // 탑 이동 스크롤 속도
      return false;
    });
  });
});