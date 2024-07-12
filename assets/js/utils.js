$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 700) {
        $(".brand-img").css("display" , "none");
        $(".brand-title").css("display" , "block");
        $(".brand-subtitle").css("display" , "block");
        }else{
        $(".brand-img").css("display" , "block");
        $(".brand-title").css("display" , "none"); 
        $(".brand-subtitle").css("display" , "none");    
        }
    });
});

const checkpoint = 700;
window.addEventListener("scroll", () => {
const currentScroll = window.pageYOffset;
if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
} else {
    opacity = 0;
}
document.querySelector(".brand-img").style.opacity = opacity;
});