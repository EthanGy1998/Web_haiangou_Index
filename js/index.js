$(window).scroll(function () {
    var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
    var backTop = $("#world").offset().top - $(window).height();

    if (scrollT > backTop) {
        $(".a1").addClass("animated bounceInRight show").removeClass("fade");
        $(".a2").addClass("animated bounceInDown show").removeClass("fade");
        $(".a3").addClass("animated bounceInUp show").removeClass("fade");
        $(".a4").addClass("animated bounceInLeft show").removeClass("fade");
    }
})