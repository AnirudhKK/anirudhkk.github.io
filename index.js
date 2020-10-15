$(document).ready(function () {
  // Transition effect for navbar
  $(window).scroll(function () {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 100) {
      $(".navbar").addClass("solid");
    } else {
      $(".navbar").removeClass("solid");
    }
  });
});


function handleMenu() {
  if (window.matchMedia('(max-width: 860px)').matches) {
  if($("ul").css("display")==="none"){
  $("ul").css("display","flex");
  }
  else if($("ul").css("display")==="flex"){
    $("ul").css("display","none");
  }
  
  $( ".hamburger" ).toggle();
  $( ".cross" ).toggle();
}
}