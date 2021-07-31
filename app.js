$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

});

document.getElementById('memberships').addEventListener("click", function() {
	document.querySelector('.popup').style.display = "flex";
});

document.getElementById('grants').addEventListener("click", function() {
	document.querySelector('.popup').style.display = "flex";
});

document.getElementById('camps').addEventListener("click", function() {
	document.querySelector('.popup').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.popup').style.display = "none";
});