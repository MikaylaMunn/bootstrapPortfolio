// Smooth scrolling from navbar
$(function() {
    let topoffset = 100;
    $('a[href*="#portfolio"]:not([href="#aboutME"]):not([href*="#contactME"]):not([href*="#topPage"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - topoffset
          }, 500);
          return false;
        }
      }
    });
    $('a[href*="#aboutME"]:not([href="#contactME"]):not([href*="#portfolio"]):not([href*="#topPage"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top - topoffset
            }, 500);
            return false;
          }
        }
      });
      $('a[href*="#contactME"]:not([href="#aboutME"]):not([href*="#portfolio"]):not([href*="#topPage"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top - topoffset
            }, 500);
            return false;
          }
        }
      });
    });
    $('a[href*="#topPage"]').on("click",function() {
      $('body,html').animate({
          scrollTop : 0
      }, 500);
      return false;
  });