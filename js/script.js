
$(document).ready(function(){
    $( "#accordion" ).accordion({
      collapsible: true
    });
    // wow
     wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();

      // aos
    AOS.init({
        duration: 1200,
    })

});