$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");

        }else{
            $('.navbar').removeClass("sticky");

        }

    });
    
  function onload() {
        var x = document.getElementById("navbar");
        x.style.display = "none";
      }
   // toggle menu/navbar script
   
   $('.menu-btn').click(function(){
       $('.navbar .menu').toggle("open");
       

   });
});
    

const mediaQuery = window.matchMedia('(max-width: 990px)')
if (mediaQuery.matches) {
    $('.menu a').on("click", function(){
        $('.menu').hide();
        });
}

