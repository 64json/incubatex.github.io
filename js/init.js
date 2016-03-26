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
sr.reveal('.dividero', divider);

$('h4.tagline').flowtype({
    fontRatio: 24
});