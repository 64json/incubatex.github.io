function countUp() {
    var e = new CountUp("counter1", 0, 3e3, 0, 3, special);
    e.start();
    var n = new CountUp("counter2", 0, 16, 0, 3, options);
    n.start();
    var o = new CountUp("counter3", 0, 30, 0, 3, options);
    o.start();
    var t = new CountUp("counter4", 0, 1, 0, 3, options);
    t.start()
}! function (e) {
    e(function () {
        e(".button-collapse").sideNav(), e(".parallax").parallax(), e(".scrollspy").scrollSpy()
    })
}(jQuery), $(".button-collapse").sideNav({
    closeOnClick: !0
}), window.onblur = function () {
    document.title = "Hey! Come back!"
}, window.onfocus = function () {
    document.title = "IncubateX"
};
var svgOne = new Vivus("svgOne", {
        type: "async",
        duration: 10,
        dashGap: 2,
        forceRender: !1
    }),
    svgTwo = new Vivus("svgTwo", {
        type: "async",
        duration: 10,
        dashGap: 2,
        forceRender: !1
    }),
    svgThree = new Vivus("svgThree", {
        type: "async",
        duration: 10,
        dashGap: 2,
        forceRender: !1
    }),
    easingFn = function (e, n, o, t) {
        var a = (e /= t) * e,
            s = a * e;
        return n + o * (s + -3 * a + 3 * e)
    },
    options = {
        useEasing: !0,
        useGrouping: !1,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: ""
    },
    special = {
        useEasing: !0,
        useGrouping: !1,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: "+"
    };
countUp();
var stuff = [{
    selector: "#counter1",
    offset: 0,
    callback: "countUp()"
}];
Materialize.scrollFire(stuff);