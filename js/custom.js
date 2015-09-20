$(document).ready(function(){
  i18n.init(function() {
      $(".index").i18n();
      selectLanguage(window.i18n.lng().substring(0, 2));
  });

  function selectLanguage(lngCode) {
    switch (lngCode) {
      case "en":
        $('#flag-selector-btn').html('<img border="0" alt="British Flag" src="img/flags/british.png" width="20" height="20"> <span class="caret"></span>');
        $('#flag-selector-list').html('<li><a href="#" data-value="es"><img border="0" alt="Spanish Flag" src="img/flags/spanish.png" width="20" height="20"></a></li><li><a href="#" data-value="fr"><img border="0" alt="French Flag" src="img/flags/french.png" width="20" height="20"></a></li>');
        break;
      case "fr":
        $('#flag-selector-btn').html('<img border="0" alt="French Flag" src="img/flags/french.png" width="20" height="20"> <span class="caret"></span>');
        $('#flag-selector-list').html('<li><a href="#" data-value="es"><img border="0" alt="Spanish Flag" src="img/flags/spanish.png" width="20" height="20"></a></li><li><a href="#" data-value="en"><img border="0" alt="British Flag" src="img/flags/british.png" width="20" height="20"></a></li>');
        break;
      default:
        $('#flag-selector-btn').html('<img border="0" alt="Spanish Flag" src="img/flags/spanish.png" width="20" height="20"> <span class="caret"></span>');
        $('#flag-selector-list').html('<li><a href="#" data-value="fr"><img border="0" alt="French Flag" src="img/flags/french.png" width="20" height="20"></a></li><li><a href="#" data-value="en"><img border="0" alt="British Flag" src="img/flags/british.png" width="20" height="20"></a></li>');
    }

    $(".dropdown-menu li a").click(function() {
      selectLanguage($(this).data('value'));
    });

    $.i18n.setLng(lngCode, function(t) {
      $(".index").i18n();
    });
  }
});
