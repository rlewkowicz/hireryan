$(document).ready(function () {
      $('#nav-tabs').tabs({
         activate: function( event, ui ) {
            sessionStorage.selectedTab = ui.newTab.index() + 1;
         },
         active: sessionStorage.selectedTab ? sessionStorage.selectedTab - 1 : 1
      });
   $('a[href="#portfolio"]').focus();
   focus();
   var listener = addEventListener('blur', function() {
      if(document.activeElement === document.getElementById('iframe')) {
         $('html, body').animate({
            scrollTop: $("#nav-tabs").offset().top
         }, 500);
      }
      removeEventListener(listener);
   });
   $('.nav-bar__topic').on('click', function(event) {
      //alert('heyo');
         $('html, body').animate({
            scrollTop: $("#nav-tabs").offset().top
         }, 500);
      });
});