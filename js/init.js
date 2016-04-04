(function ($) {
    $(function () {

        $('.button-collapse').sideNav();
        $('.parallax').parallax();
        $('.scrollspy').scrollSpy();

    }); // end of document ready
})(jQuery); // end of jQuery name space


$('.button-collapse').sideNav({
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
});


var appear = {
    reset: false,
    delay: 0,
    distance: '10vw',
    easing: 'ease-in-out',
    scale: 0.1
};


var slide = {
    reset: false,
    origin: 'bottom',
    delay: 0,
    distance: '10vw',
    easing: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    scale: 0.1
};

var slideLeft = {
    reset: false,
    origin: 'left',
    delay: 0,
    distance: '10vw',
    easing: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    scale: 1
};

var slideRight = {
    reset: false,
    origin: 'right',
    delay: 0,
    distance: '10vw',
    easing: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    scale: 1
};

var divider = {
    reset: false,
    delay: 0,
    distance: '10vw',
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    scale: 0.05
};

// JavaScript
window.sr = ScrollReveal();
sr.reveal('.appear', appear);
sr.reveal('.slide', slide);
sr.reveal('.slide-left', slideLeft);
sr.reveal('.slide-right', slideRight);

window.onblur = function () {
    document.title = "Hey! Come back!";
}
window.onfocus = function () {
    document.title = "IncubateX";
}

var easingFn = function (t, b, c, d) {
    var ts = (t /= d) * t;
    var tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
}
var options = {  
    useEasing: false,
      easingFn: easingFn,
      useGrouping: false,
      separator: ',',
      decimal: '.',
      prefix: '',
      suffix: ''
};
var special = {  
    useEasing: false,
      easingFn: easingFn,
      useGrouping: false,
      separator: ',',
      decimal: '.',
      prefix: '',
      suffix: '+'
};



function countUp() {
    var demo = new CountUp("counter1", 0, 3000, 0, 0.7, special);
    demo.start();
    var demo2 = new CountUp("counter2", 0, 16, 0, 0.7, options);
    demo2.start();
    var demo3 = new CountUp("counter3", 0, 30, 0, 0.7, options);
    demo3.start();
    var demo4 = new CountUp("counter4", 0, 1, 0, 0.7, options);
    demo4.start();
}

countUp();

var stuff = [
    {
        selector: '#counter1',
        offset: -200,
        callback: 'countUp()'
    }
  ];
Materialize.scrollFire(stuff);