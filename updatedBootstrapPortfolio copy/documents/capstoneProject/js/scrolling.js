// About Us scrolling on the drop down menu
$(function() {
    let topoffset = 100;
    $('a[href*="#aboutUs"]:not([href="#commented"]):not([href*="#top"])').click(function() {
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
    $('a[href*="#commented"]:not([href="#aboutUs"]):not([href*="#top"])').click(function() {
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
    $('a[href*="#top"]').on("click",function() {
      $('body,html').animate({
          scrollTop : 0
      }, 500);
      return false;
  });

      


