var button1 = document.querySelector(".slider__button--1");
var button2 = document.querySelector(".slider__button--2");
var button3 = document.querySelector(".slider__button--3");
var slide1 = document.querySelector(".slide-1");
var slide2 = document.querySelector(".slide-2");
var slide3 = document.querySelector(".slide-3");

//При нажатии на одну из кнопок появляется содержимое, прикрепленное
//к этой кнопке и скрываются остальные два слайда.


button1.addEventListener("click", function(evt){
    evt.preventDefault();
    button1.classList.remove("slider__button--active");
    button2.classList.remove("slider__button--active");
    button3.classList.remove("slider__button--active");
    slide1.classList.remove("slide--hide");
    slide2.classList.remove("slide--hide");
    slide3.classList.remove("slide--show");
    slide1.classList.add("slide--show");
    slide2.classList.add("slide--hide");
    slide3.classList.add("slide--hide");
    button1.classList.add("slider__button--active");
})

button2.addEventListener("click", function(evt){
    evt.preventDefault();
    button1.classList.remove("slider__button--active");
    button2.classList.remove("slider__button--active");
    button3.classList.remove("slider__button--active");
    slide1.classList.remove("slide--show");
    slide2.classList.remove("slide--hide");
    slide3.classList.remove("slide--hide");
    slide1.classList.add("slide--hide");
    slide2.classList.add("slide--show");
    slide3.classList.add("slide--hide");
    button2.classList.add("slider__button--active");
})

button3.addEventListener("click", function(evt){
    evt.preventDefault();
    button1.classList.remove("slider__button--active");
    button2.classList.remove("slider__button--active");
    button3.classList.remove("slider__button--active");
    slide1.classList.remove("slide--hide");
    slide2.classList.remove("slide--show");
    slide3.classList.remove("slide--hide");
    slide1.classList.add("slide--hide");
    slide2.classList.add("slide--hide");
    slide3.classList.add("slide--show");
    button3.classList.add("slider__button--active");
})
