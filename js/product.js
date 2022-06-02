// product img swiper
var swiper = new Swiper(".product_info_swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  centeredSlides: true,
  loopAdditionalSlides: 30,

  breakpoints: {

    648: {
      slidesPerView: 1.5,
      spaceBetween: 10,

    },

    1041: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
  },


  pagination: {
    el: "#product_info_pagination",
    clickable: true,
  },

  navigation: {
    nextEl: "#product_info_swiperNext",
    prevEl: "#product_info_swiperPrev",
  },

});


// color swiper
var swiper = new Swiper(".product_info_color_swiper", {
  slidesPerView: 2.5,
  spaceBetween: 10,

  breakpoints: {

    648: {
      slidesPerView: 2.5,
    },

    1041: {
      slidesPerView: 3,
    },
  },


  scrollbar: {
    el: "#product_info_color_scrollbar",
    hide: true,
  },

});


// color checked 

$('.product_info_color_swiper .swiper-slide').click(function () {
  $(this).find('.product_color_box').addClass('colorSelected');
  $(this).siblings().find('.product_color_box').removeClass('colorSelected');
});



// size selected 

$('.size_option').click(function () {
  $(this).addClass('sizeSelected');
  $(this).siblings().removeClass('sizeSelected');
});



// quantity

function count(type) {
  // 결과를 표시할 element
  const resultElement = document.getElementById('result');
  const resultAdultsElement = document.getElementById('adults_result');

  // const reset = document.getElementById('resetbtn');

  // 현재 화면에 표시된 값
  let number = resultElement.innerText;

  // 더하기/빼기
  if (type === 'plus') {
    if (number !== 0) {
      number = parseInt(number) + 1;
    };
  } else if (type === 'minus') {
    if (number <= 0) {
      number = parseInt(number) - 0;
    } else {
      number = parseInt(number) - 1;
    };
  };

  // 결과 출력
  resultElement.innerText = number;
  resultAdultsElement.innerText = number;
};



// detail info

$('.product_detail_info h5').click(function () {
  $(this).siblings('.detail_inner').slideToggle(300);
  $(this).toggleClass('detail_info_open');
});


$('.product_detail_info li').click(function () {
  $(this).siblings().find('.detail_inner').slideUp(300);
  $(this).siblings().find('.detail_info_title').removeClass('detail_info_open');
});



// textarea

function loginFirst() {
  window.confirm("Please sign in before writing your review")
};


