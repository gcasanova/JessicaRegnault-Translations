$(document).ready(function() {
  i18n.init(function() {
    $(".index").i18n();
    selectLanguage(window.i18n.lng().substring(0, 2), false);

    var s = document.createElement('script');
    s.type = "text/javascript";
    s.async = false;
    s.src = "js/jqBootstrapValidation.js";
    var fs = document.getElementsByTagName('script')[0];
    fs.parentNode.insertBefore(s, fs);

    s = document.createElement('script');
    s.type = "text/javascript";
    s.async = false;
    s.src = "js/contact_me.js";
    fs = document.getElementsByTagName('script')[0];
    fs.parentNode.insertBefore(s, fs);

    var hostname = "gmail.com";
    var username = "jessica.regnault.translations";
    $("#email-span").html('<a href="mailto:' + username + '@' + hostname + '">' + username + '@' + hostname + '</a>');
  });

  function verifyFbButtons() {
    if ($(window).width() < 979) {
      $('#fb-share-container-xl').hide();
      $('#fb-share-container-xs').show();
    } else {
      $('#fb-share-container-xs').hide();
      $('#fb-share-container-xl').show();
    }
  }

  function selectLanguage(lngCode, resetValidation) {
    var fbLng = "en_GB";
    switch (lngCode) {
      case "en":
        $('#flag-selector-btn').html('<img border="0" alt="British Flag" src="img/flags/british.png" width="20" height="20"> <span class="caret"></span>');
        $('#flag-selector-list').html('<li><a href="#" data-value="es"><img border="0" alt="Spanish Flag" src="img/flags/spanish.png" width="20" height="20"></a></li><li><a href="#" data-value="fr"><img border="0" alt="French Flag" src="img/flags/french.png" width="20" height="20"></a></li>');
        fbLng = "en_GB";
        break;
      case "fr":
        $('#flag-selector-btn').html('<img border="0" alt="French Flag" src="img/flags/french.png" width="20" height="20"> <span class="caret"></span>');
        $('#flag-selector-list').html('<li><a href="#" data-value="es"><img border="0" alt="Spanish Flag" src="img/flags/spanish.png" width="20" height="20"></a></li><li><a href="#" data-value="en"><img border="0" alt="British Flag" src="img/flags/british.png" width="20" height="20"></a></li>');
        fbLng = "fr_FR";
        break;
      default:
        $('#flag-selector-btn').html('<img border="0" alt="Spanish Flag" src="img/flags/spanish.png" width="20" height="20"> <span class="caret"></span>');
        $('#flag-selector-list').html('<li><a href="#" data-value="fr"><img border="0" alt="French Flag" src="img/flags/french.png" width="20" height="20"></a></li><li><a href="#" data-value="en"><img border="0" alt="British Flag" src="img/flags/british.png" width="20" height="20"></a></li>');
        fbLng = "es_ES";
    }

    $.i18n.setLng(lngCode, function(t) {
      $(".index").i18n();
    });

    if (resetValidation) {
      location.reload();
    } else {
      $(".dropdown-menu li a").click(function() {
        selectLanguage($(this).data('value'), true);
      });

      // Facebook "Recommend" button
      window.fbAsyncInit = function() {
        FB.init({
          appId: '1894639840760379',
          xfbml: true,
          version: 'v2.5'
        });

        FB.Event.subscribe("xfbml.render", function () {
          verifyFbButtons();
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/" + fbLng + "/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

      $("#read-more-btn-one").click(function() {
        $(this).fadeOut(function() {
          $("#read-more-text-one").fadeIn();
        });
      });

      $("#read-more-btn-two").click(function() {
        $(this).fadeOut(function() {
          $("#read-more-text-two").fadeIn();
        });
      });

      $("#read-more-btn-three").click(function() {
        $(this).fadeOut(function() {
          $("#read-more-text-three").fadeIn();
        });
      });

      $("#read-more-btn-four").click(function() {
        $(this).fadeOut(function() {
          $("#read-more-text-four").fadeIn();
        });
      });

      $(window).resize(function() {
        verifyFbButtons();
      });
    }
  }
});
