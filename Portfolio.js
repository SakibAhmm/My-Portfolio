

var typed = new Typed('#element', {
  strings: ["I'm a Front-End Developer","with basic Knowledge"],
  typeSpeed: 100,
  backSpeed:80,
  backDelay:1000,
  loop:true
});

function showPackages(){
  $('.active').trigger('click');
  $('.about-img').trigger('slideDown');
}