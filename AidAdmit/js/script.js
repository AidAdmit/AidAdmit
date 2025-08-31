(function($) {

    "use strict";

    var searchPopup = function () {
      // open search box
      $('.navbar').on('click', '.search-button', function (e) {
        $('.search-popup').toggleClass('is-visible');
      });
  
      $('.navbar').on('click', '.btn-close-search', function (e) {
        $('.search-popup').toggleClass('is-visible');
      });
  
      $(".search-popup-trigger").on("click", function (b) {
        b.preventDefault();
        $(".search-popup").addClass("is-visible"),
          setTimeout(function () {
            $(".search-popup").find("#search-popup").focus()
          }, 350)
      }),
        $(".search-popup").on("click", function (b) {
          ($(b.target).is(".search-popup-close") || $(b.target).is(".search-popup-close svg") || $(b.target).is(".search-popup-close path") || $(b.target).is(".search-popup")) && (b.preventDefault(),
            $(this).removeClass("is-visible"))
        }),
        $(document).keyup(function (b) {
          "27" === b.which && $(".search-popup").removeClass("is-visible")
        })
    }

    // init Chocolat light box
    var initChocolat = function() {
      Chocolat(document.querySelectorAll('.image-link'), {
        imageSize: 'contain',
        loop: true,
      })
    }

    var initExitPopup = function() {
      // setTimeout(function(){
      //     $('#leadModal').modal('show');
      // }, 5000);
      
      // Handle form submission
      $('#leadForm').submit(function(e){
          e.preventDefault();
          // Here you would typically send the data to your server
          alert('Thank you! Your assessment request has been received. We\'ll contact you shortly.');
          $('#leadModal').modal('hide');
      });
      
      // Alternatively, show modal when user tries to leave
      $(window).on('mouseout', function(e) {
          if (e.clientY < 0) {
              $('#leadModal').modal('show');
          }
      });
    }

    $(document).ready(function() {
      searchPopup();
      initChocolat();
      initExitPopup();
      
      AOS.init({
        duration: 1200,
        once: true
      })
  
      $(".youtube").colorbox({
        iframe: true,
        innerWidth: 960,
        innerHeight: 585
      });

      var swiper = new Swiper(".main-banner", {
        slidesPerView: 5,
        spaceBetween: 10,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: "#mobile-products .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          980: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 20,
          }
        },
      });

      var swiper = new Swiper(".testimonial-swiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          }
        },
      });

    }); // End of a document ready

})(jQuery);