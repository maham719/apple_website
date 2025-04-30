
let swiper=new Swiper('.mySwiper',{
    slidesPerView: 1.3,
    centeredSlides: true,
    spaceBetween: 15,
    loop: true,
    autoplay:{
        delay:2000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true, 
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    speed:1000,
});
let swiper2=new Swiper('.videosSwiper',{
    slidesPerView: '3',
    centeredSlides: true,
    spaceBetween: 10,
    loop: true,
    autoplay:{
        delay:0,
    },
  freeMode:true,
    speed:4000,
});
