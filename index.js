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

var isExpanded = false;

function expandCerti() {
  if(!isExpanded){
  $(".certifications").css("height","240vh");
  $(".certificates").css("height","240vh");
  $(".certiexpbutton").css("display","none");
  $(".internshala").css("display","block");
  $(".hps").css("display","block");
  $(".hjava").css("display","block");
  $(".certiminbutton").css("display","block");
  isExpanded=true;
  }
}
function minimiseCerti(){
  if(isExpanded){
    $(".certifications").css("height","150vh");
    $(".certificates").css("height","150vh");
    $(".certiexpbutton").css("display","block");
    $(".internshala").css("display","none");
    $(".hps").css("display","none");
    $(".hjava").css("display","none");
    $(".certiminbutton").css("display","none");
    isExpanded=false;
  }
}