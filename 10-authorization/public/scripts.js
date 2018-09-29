$(document).ready(function() {
  console.log(Cookies.get())

  if(Cookies.get('nToken')){
    $('.unauthenticated').css('color', 'red'); // show signup or login
  }
  else {
    console.log("ACCESS GRANTED")
    $('.authenticated').css('display', 'none'); // hide login or signup
  }
});
