let mobileView = document.querySelector(".mobileView");
let menu = document.querySelector(".menu");
let body = document.querySelector("body");
let navlinks = document.querySelector("ul")

menu.addEventListener("click",function(){
  mobileView.classList.toggle("show");
  body.classList.toggle("overflow-hidden");
})
navlinks.addEventListener("click",function(){
    navlinks.classList.remove("show");
})