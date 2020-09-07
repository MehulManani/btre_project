const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();

// Use to Fadeout error messages in registration form after 5 seconds

setTimeout(function (){
  $('#message').fadeOut('slow');
}, 2000);
