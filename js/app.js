const block_offers = document.querySelector('.block_offers');
const offer_menu_1 = document.querySelector(".offer_menu_1");
const offer_menu_2 = document.querySelector(".offer_menu_2");
const offer_menu_3 = document.querySelector(".offer_menu_3");
const offer_menu_4 = document.querySelector(".offer_menu_4");
const offer_menu_5 = document.querySelector(".offer_menu_5");



block_offers.addEventListener("click", function(event){
    var id = event.target.id;
    if(id == "offer_1")
    {
        offer_menu_1.classList.toggle('active');
    }
    if(id == "offer_2")
    {
        offer_menu_2.classList.toggle('active');
    }
    if(id == "offer_3")
    {
        offer_menu_3.classList.toggle('active');
    }
    if(id == "offer_4")
    {
        offer_menu_4.classList.toggle('active');
    }
    if(id == "offer_5")
    {
        offer_menu_5.classList.toggle('active');
    }
});

new Swiper('.swiper', {
    navigation:
    {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },

    breakpoints:{
        0:{
            slidesPerView: 1,
            spaceBetween:30,
            initialSlide:0,
        },
        376:{
            slidesPerView: 2.2,
            spaceBetween:25,
            initialSlide:0,
        },

    }

});

new Swiper('.swiper-exapmle', {
    navigation:
    {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },

    slidesPerView: 2,
    spaceBetween:33,
    initialSlide:0,
})


const nav_items = document.querySelector('.nav_items');
const block_burger_point = document.querySelector('.block_burger_point');

block_burger_point.addEventListener("click", function(event){
    nav_items.classList.toggle('active');
})