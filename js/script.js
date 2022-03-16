$(function(){
  "use strict";
  $('.js-preloader').preloadinator({
      animation:'fadeOut',
      animationDuration: 100,
      minTime: 2000

    });
          // ====navbar sticky=====
          $(window).scroll(function(){
            var top = $(this).scrollTop()
            if(top > 700){
              $(".navbar").addClass("sticky")
            }
            else(
              $(".navbar").removeClass("sticky")
            )
            if(top > 200){
              $(".back-to-top").fadeIn(900)
            }
            else{
              $(".back-to-top").fadeOut(300)
            }
          })
        
          $(".back-to-top").click(function(){
            $("html,body").animate({scrollTop: 0},1000)
          })


          
//scroll-spy & Smooth-scrolling
  var scrollLink = $('.scroll-link');
  $(scrollLink).on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - 20
    }, 1000);
  });
  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    scrollLink.each(function () {
      var sectionhead = $(this.hash).offset().top - 40;
      if (scrollTop >= sectionhead) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });


    $("#MyButton").click(function() {
        alert('Confirm to refresh alert messages.');
        $("#refreshDivID").load("#refreshDivID .reloaded-divs > *");
      }); 
      $('.tes-slider').slick({
        slidesToShow:3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows:true,
        prevArrow:".right",
        nextArrow:".left",
      });
      $('.col').slick({
        slidesToShow:2,
        slidesToScroll: 1,
        autoplay:false,
        autoplaySpeed: 200,
        arrows:true,
        prevArrow:".next",
        nextArrow:".prev",
      });
      document.querySelector('.humburger')
      .onclick = function(){
        this.classList.toggle(active);
      };
})