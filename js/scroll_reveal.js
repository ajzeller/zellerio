window.sr = ScrollReveal();

    // animate up
    sr.reveal('.animate1', { scale: 1, duration: 2000, distance:'20px', viewFactor: .2, easing: 'cubic-bezier(.2, 0.5, 0.5, 1)'}); // animate up

    // fade in
    sr.reveal('.animate2', { scale: 1, duration: 1000, distance:'0px', viewFactor: .5, easing: 'cubic-bezier(1, 0.5, 0.5, .5)'}); // fade in

    // slide in from left
    sr.reveal('.animate3', { scale: 1, duration: 500, origin: 'left', distance:'100px', viewFactor: .3, easing: 'cubic-bezier(1, 0.5, 0.5, .5)'});

    // slide in from right
    sr.reveal('.animate4', { scale: 1, duration: 500, origin: 'right', distance:'100px', viewFactor: .3, easing: 'cubic-bezier(1, 0.5, 0.5, .5)'});

sr.reveal('.animate-projects-navbar', { scale: 1, duration: 1000, origin: 'bottom', distance:'400px', viewFactor: .1, easing: 'cubic-bezier(1, 0.5, 0.5, .5)'});

sr.reveal('.animate5', { scale: 1, duration: 2000, distance:'30px', viewFactor: .5, easing: 'cubic-bezier(.2, 0.5, 0.5, 1)'}); // animate up
