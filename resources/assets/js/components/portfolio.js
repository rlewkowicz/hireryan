//$('#nav-tabs').tabs({
//    active: 1
//});
//$('a[href="#portfolio"]').focus();
//focus();
//var listener = addEventListener('blur', function() {
//    if(document.activeElement === document.getElementById('iframe')) {
//        $('html, body').animate({
//            scrollTop: $("#nav-tabs").offset().top
//        }, 1000);
//    }
//    removeEventListener(listener);
//});
//$('.nav-bar__topic').on('click', function(event) {
//    //alert('heyo');
//    $('html, body').animate({
//        scrollTop: $("#nav-tabs").offset().top
//    }, 1000);
//});

$(document).ready(function () {

    if (sessionStorage.getItem("selectedTab1") === null){

        sessionStorage.selectedTab1=false
    }

    $('#time-line-tabs').tabs({
        activate: function( event, ui ) {
            var index = $('#time-line-tabs a[href="'+ui.newPanel.selector+'"]').parent().index();
            index <= 0 ? sessionStorage.selectedTab1 = 0 : sessionStorage.selectedTab1  = index-2;
            //console.log($('#time-line-tabs a[href="'+ui.newPanel.selector+'"]').parent().index(), localStorage.selectedTab1);
        },
        collapsible: true,
        active: sessionStorage.selectedTab1
    });
});

