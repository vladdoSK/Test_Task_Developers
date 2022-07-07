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