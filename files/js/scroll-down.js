jQuery(document).ready(function(){
  jQuery("a").on('click', function(event) {
      /* This has been modified to only work if classname of 'scrolldown' is included */
    if (this.hash !== "" && this.className.includes("scrolldown")) {
      event.preventDefault();
      var hash = this.hash;
      jQuery('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});