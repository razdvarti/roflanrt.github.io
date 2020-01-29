/*
Copyright (c) 2017
------------------------------------------------------------------
[Master Javascript]

Template Name: EventWings Responsive HTML Template
Version: 1.0.0

-------------------------------------------------------------------*/

(function($) {
  'use strict';
  var eventwings = {
    initialised: false,
    version: 1.0,
    mobile: false,
    init: function() {
      if (!this.initialised) {
        this.initialised = true;
      } else {
        return;
      }

      /*-------------- EventWings Functions Calling -----------------------------------*/
      this.RTL();
      this.wowanimation();
      this.MainHeading();
      this.Timer();
      this.SuccessStory();
      this.MainSlider();
      this.SponserSlider();
      this.Popup();
      this.ContactFormSubmit();
    },

    /*-------------- EventWings Functions definition ---------------------------------*/
    RTL: function() {
      // On Right-to-left(RTL) add class
      var rtl_attr = $('html').attr('dir');
      if (rtl_attr) {
        $('html')
          .find('body')
          .addClass('rtl');
      }
    },
    //Wow Animation
    wowanimation: function() {
      if ($('.wow').length > 0) {
        new WOW().init();
      }
    },
    //Main Heading(Funny text)
    MainHeading: function() {
      if ($('#banner .text1').length > 0) {
        $('#banner .text1').funnyText({
          speed: 700,
          activeColor: '#fe0000 ',
          color: '#fff'
        });
      }
      if ($('#services .text1').length > 0) {
        $('#services .text1').funnyText({
          speed: 700,
          activeColor: '#fe0000 ',
          color: '#333'
        });
      }
      if ($('#schedule .text1').length > 0) {
        $('#schedule .text1').funnyText({
          speed: 700,
          activeColor: '#fe0000 ',
          color: '#fff'
        });
      }
      if ($('#upcoming_event .text1').length > 0) {
        $('#upcoming_event .text1').funnyText({
          speed: 700,
          activeColor: '#fff',
          color: '#333',
          textshadow: '-1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff'
        });
      }
      if ($('#success .text1').length > 0) {
        $('#success .text1').funnyText({
          speed: 700,
          activeColor: '#fe0000 ',
          color: '#fff'
        });
      }
      if ($('#sponser .text1').length > 0) {
        $('#sponser .text1').funnyText({
          speed: 700,
          activeColor: '#fe0000 ',
          color: '#333',
          textshadow: '-1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff'
        });
      }
      if ($('#contact .text1').length > 0) {
        $('#contact .text1').funnyText({
          speed: 700,
          activeColor: '#fe0000 ',
          color: '#fff'
        });
      }
    },
    // timer countdown
    Timer: function() {
      if ($('.aud_uc_content').length > 0) {
        $('[data-countdown]').each(function() {
          var $this = $(this),
            finalDate = $(this).data('countdown');
          $this.countdown(finalDate, function(event) {
            $this.html(
              event.strftime(
                '<div class="aud_counter"><span><p>%D</p> <p>days</p></span> <span><p>%H</p> <p>hours</p></span> <span><p>%M</p> <p>min</p></span> <span><p>%S</p> <p>sec</p></span></div>'
              )
            );
          });
        });
      }
    },
    // Success Slider
    SuccessStory: function() {
      if ($('#success_slider').length > 0) {
        $('#success_slider').owlCarousel({
          nav: true, // Show next and prev buttons
          singleItem: true,
          items: 1,
          loop: true,
          autoplay: true
        });
      }
    },
    // Success Slider
    MainSlider: function() {
      if ($('#main_slider').length > 0) {
        $('#main_slider').owlCarousel({
          items: 1,
          loop: true,
          autoplay: true
        });
      }
    },
    // Sponser Slider
    SponserSlider: function() {
      if ($('#sponser_slider').length > 0) {
        $('#sponser_slider').owlCarousel({
          nav: false, // Show next and prev buttons
          items: 5,
          loop: true,
          autoplay: true,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              nav: false
            },
            600: {
              items: 3,
              nav: false
            },
            1000: {
              items: 5,
              nav: false
            }
          }
        });
      }
    },
    // Popup js
    Popup: function() {
      if ($('.popup-with-move-anim').length > 0) {
        $('.popup-with-move-anim').magnificPopup({
          type: 'inline',
          fixedContentPos: false,
          fixedBgPos: true,
          overflowY: 'auto',
          closeBtnInside: true,
          preloader: false,
          midClick: true,
          removalDelay: 300,
          mainClass: 'my-mfp-slide-bottom'
        });
      }
    },
    //contact form submition
    ContactFormSubmit: function() {
      if ($('#send_btn').length > 0) {
        $('#send_btn').on('click', function() {
          var e = $('#ur_name').val();
          var t = $('#ur_mail').val();
          var s = $('#sub').val();
          var r = $('#msg').val();
          $.ajax({
            type: 'POST',
            url: 'ajaxmail.php',
            data: {
              username: e,
              useremail: t,
              usersub: s,
              mesg: r
            },
            success: function(n) {
              var i = n.split('#');
              if (i[0] == '1') {
                $('#ur_name').val('');
                $('#ur_mail').val('');
                $('#sub').val('');
                $('#msg').val('');
                $('#err').html(i[1]);
              } else {
                $('#ur_name').val(e);
                $('#ur_mail').val(t);
                $('#sub').val(s);
                $('#msg').val(r);
                $('#err').html(i[1]);
              }
            }
          });
        });
      }
    }
  };

  eventwings.init();

  // Load Event
  // Loader js
  $(window).on('load', function() {
    //preloader
    $('#status').fadeOut();
    $('#preloader')
      .delay(300)
      .fadeOut('slow');
    //preloader end
  });

  // Scroll Event
  $(window).on('scroll', function() {});
  $(document).ready(function() {
    //Single page scroll
    var pluginName = 'ScrollIt',
      pluginVersion = '1.0.3';

    /* OPTIONS */
    var defaults = {
      upKey: 38,
      downKey: 40,
      easing: 'linear',
      scrollTime: 600,
      activeClass: 'active',
      onPageChange: null,
      topOffset: 0
    };

    $.scrollIt = function(options) {
      /* DECLARATIONS */
      var settings = $.extend(defaults, options),
        active = 0,
        lastIndex = $('[data-scroll-index]:last').attr('data-scroll-index');

      /* METHODS */

      /* navigate * sets up navigation animation */
      var navigate = function(ndx) {
        if (ndx < 0 || ndx > lastIndex) return;

        var targetTop =
          $('[data-scroll-index=' + ndx + ']').offset().top +
          settings.topOffset +
          1;
        $('html,body').animate(
          {
            scrollTop: targetTop,
            easing: settings.easing
          },
          settings.scrollTime
        );
      };

      /* doScroll ** runs navigation() when criteria are met */
      var doScroll = function(e) {
        var target =
          $(e.target)
            .closest('[href]')
            .attr('href') ||
          $(e.target)
            .closest('[data-scroll-goto]')
            .attr('data-scroll-goto');
        navigate(parseInt(target));
      };

      /* keyNavigation ** sets up keyboard navigation behavior */
      var keyNavigation = function(e) {
        var key = e.which;
        if (
          $('html,body').is(':animated') &&
          (key == settings.upKey || key == settings.downKey)
        ) {
          return false;
        }
        if (key == settings.upKey && active > 0) {
          navigate(parseInt(active) - 1);
          return false;
        } else if (key == settings.downKey && active < lastIndex) {
          navigate(parseInt(active) + 1);
          return false;
        }
        return true;
      };

      /** updateActive ** sets the currently active item */
      var updateActive = function(ndx) {
        if (settings.onPageChange && ndx && active != ndx)
          settings.onPageChange(ndx);

        active = ndx;
        $('[href]').removeClass(settings.activeClass);
        $('[href=' + ndx + ']').addClass(settings.activeClass);
      };

      /** watchActive ** watches currently active item and updates accordingly */
      var watchActive = function() {
        var winTop = $(window).scrollTop();

        var visible = $('[data-scroll-index]').filter(function(ndx, div) {
          return (
            winTop >= $(div).offset().top + settings.topOffset &&
            winTop <
              $(div).offset().top + settings.topOffset + $(div).outerHeight()
          );
        });
        var newActive = visible.first().attr('data-scroll-index');
        updateActive(newActive);
      };

      /* runs methods */
      $(window)
        .on('scroll', watchActive)
        .scroll();

      $(window).on('keydown', keyNavigation);

      $('.aud_menu').on('click', '[href], [data-scroll-goto]', function(e) {
        e.preventDefault();
        doScroll(e);
      });
    };

    // Contact Form Submition
    function checkRequire(formId, targetResp) {
      targetResp.html('');
      var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
      var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
      var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
      var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
      var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
      var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
      var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
      var check = 0;
      $('#er_msg').remove();
      var target = typeof formId == 'object' ? $(formId) : $('#' + formId);
      target.find('input , textarea , select').each(function() {
        if ($(this).hasClass('require')) {
          if (
            $(this)
              .val()
              .trim() == ''
          ) {
            check = 1;
            $(this).focus();
            targetResp.html('You missed out some fields.');
            $(this).addClass('error');
            return false;
          } else {
            $(this).removeClass('error');
          }
        }
        if (
          $(this)
            .val()
            .trim() != ''
        ) {
          var valid = $(this).attr('data-valid');
          if (typeof valid != 'undefined') {
            if (
              !eval(valid).test(
                $(this)
                  .val()
                  .trim()
              )
            ) {
              $(this).addClass('error');
              $(this).focus();
              check = 1;
              targetResp.html($(this).attr('data-error'));
              return false;
            } else {
              $(this).removeClass('error');
            }
          }
        }
      });
      return check;
    }
    $('.submitForm').on('click', function() {
      var _this = $(this);
      var targetForm = _this.closest('form');
      var errroTarget = targetForm.find('.response');
      var check = checkRequire(targetForm, errroTarget);
      if (check == 0) {
        var formDetail = new FormData(targetForm[0]);
        formDetail.append('form_type', _this.attr('form-type'));
        $.ajax({
          method: 'post',
          url: 'ajax.php',
          data: formDetail,
          cache: false,
          contentType: false,
          processData: false
        }).done(function(resp) {
          if (resp == 1) {
            targetForm.find('input').val('');
            targetForm.find('textarea').val('');
            errroTarget.html(
              '<p style="color:green;">Mail has been sent successfully.</p>'
            );
          } else {
            errroTarget.html(
              '<p style="color:red;">Something went wrong please try again latter.</p>'
            );
          }
        });
      }
    });
  });
})(jQuery);
