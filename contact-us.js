var link = document.querySelector(".js-contact-button");
var popup = document.querySelector(".modal-contact-us");
var close = popup.querySelector(".modal-close");

link.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.add("modal-show");
})

close.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.remove("modal-show");
})