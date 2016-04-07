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


window.onblur = function () {
    document.title = "Hey! Come back!";
}
window.onfocus = function () {
    document.title = "IncubateX";
}

var svgOne = new Vivus('svgOne', {
        animTimingFunction: Vivus.EASE,
        type: 'async'
    }),
    svgTwo = new Vivus('svgTwo', {
        animTimingFunction: Vivus.EASE,
        type: 'async'
    }),
    svgThree = new Vivus('svgThree', {
        animTimingFunction: Vivus.EASE,
        type: 'async'
    });

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
    var demo = new CountUp("counter1", 0, 3000, 0, 0.5, special);
    demo.start();
    var demo2 = new CountUp("counter2", 0, 16, 0, 0.5, options);
    demo2.start();
    var demo3 = new CountUp("counter3", 0, 30, 0, 0.5, options);
    demo3.start();
    var demo4 = new CountUp("counter4", 0, 1, 0, 0.5, options);
    demo4.start();
}

countUp();

var stuff = [
    {
        selector: '#counter1',
        offset: 0,
        callback: 'countUp()'
    }
  ];
Materialize.scrollFire(stuff);