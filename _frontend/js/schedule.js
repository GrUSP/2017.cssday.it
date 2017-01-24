$(function () {

  function checkCurrentEvent () {
    var today = moment().format('M-D');

    $('.schedule tbody td:first-child').each(function(){
      var dates = $(this).closest('.schedule').data('dates').split(',');

      console.log(dates);

      var enable = false;
      for (var i = 0; i < dates.length; i++) {
        if (dates[i] === today) {
          enable = true;
        }
      }


      if (enable) {
        var now = moment().format('H.mm');
        var from = $.trim($(this).find('.schedule__time').text().split('-')[0]);
        var to = $.trim($(this).find('.schedule__time').text().split('-')[1]);

        $(this).closest('tr').removeClass('schedule__current');
        console.log(now, from, to);
        if (now >= from && now < to) {
          console.log(enable);
          $(this).closest('tr').addClass('schedule__current');
        }
      }
    });
  }

  setInterval(checkCurrentEvent, 60000);
  checkCurrentEvent();

});
