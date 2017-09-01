var fooReveal = {
  delay    : 200,
  distance : '40px',
  easing   : 'ease-in-out',
  scale    : 1,
  mobile   : false,
  duration: 500
};

window.sr = ScrollReveal();
sr.reveal('.js-card-reveal', fooReveal);