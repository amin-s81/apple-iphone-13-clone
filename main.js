$(document).ready(function () {
    responsive();
    $(window).on('resize', responsive);


    let isToggleOpen = -1; // -1 === false
    let delayTime;
    $(".frame").on('click', () => {
        hamburgerMenuBottom(isToggleOpen, delayTime);
        hamburgerMenuStyle(isToggleOpen);
        isToggleOpen *= -1;
    });
});
//-------------------------------------------------------------------
//                              Responsive
//-------------------------------------------------------------------
function responsive() {
    // -----------------navbar-----------------
    var width = $(window).width();
    if (width <= 832) {
        $("#navbar").hide();
        $(".tablet").show();
    }
    if (width > 832) {
        $("#navbar").show();
        $(".tablet").hide();
    }
    // -----------------other-----------------
}
//-------------------------------------------------------------------
//                              hamburgerMenuBottom & style
//-------------------------------------------------------------------
function hamburgerMenuBottom(isToggle, delay) {
    window.clearTimeout(delay);
    if (isToggle == 1) {
        $(".center").removeClass("rotate");
        delay = window.setTimeout(() => {
            $(".center").removeClass("open");
        }, 160);

    } else {
        $(".center").addClass("open");
        delay = window.setTimeout(() => {
            $(".center").addClass("rotate");
        }, 160);

    }
}

function hamburgerMenuStyle(isToggle) {

    if (isToggle == 1) {
        $("#hamburger-menu").slideUp(400,"linear");
        setTimeout(function () {
            $(".tablet").removeAttr("style");
            $(".tablet li").last().animate({
                top: 0,
                opacity: 1
            }, 250);
            $("html").css("overflow", "visible");
        }, 300)
    } else {
        $("html").css("overflow", "hidden");
        $(".tablet").css("background-color", "#000");
        $(".tablet li").last().animate({
            top: 3,
            opacity: 0
        }, 300);
        $("#hamburger-menu").slideDown(400,"linear");
    }
}
//-------------------------------------------------------------------
// 
//-------------------------------------------------------------------


//-------------------------------------------------------------------
// 
//-------------------------------------------------------------------


//-------------------------------------------------------------------
// 
//-------------------------------------------------------------------