$(function () {
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
  });

  /* ===============================================================
         HUMBERGUR MENU ACTIVATE
      =============================================================== */
    $('.navbar-toggler').on('click dblclick', function () {
        $(this).toggleClass('active');
    });
});


function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    document.getElementById("banner-cookies").style.visibility = "hidden";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

var existCookie = getCookie('GDPRVenus');
if (existCookie) {
    document.getElementById("banner-cookies").style.visibility = "hidden";
}