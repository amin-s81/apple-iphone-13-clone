$(document).ready(function () {
    responsive();
    $(window).on('resize', responsive);


    let isToggleOpen = -1;
    let delayTime;
    $(".frame").on('click', () => {
        menuBottom(isToggleOpen, delayTime);
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
        $("#navbar").addClass("hide");
        $(".tablet").removeClass("hide");
    }
    if (width > 832) {
        $("#navbar").removeClass("hide");
        $(".tablet").addClass("hide");
    }
    // -----------------other-----------------
}
//-------------------------------------------------------------------
//                              menuBottom
//-------------------------------------------------------------------
function menuBottom(isToggle, delay) {
    window.clearTimeout(delay);
    if (isToggle === 1) {
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
//-------------------------------------------------------------------
// 
//-------------------------------------------------------------------


//-------------------------------------------------------------------
// 
//-------------------------------------------------------------------


//-------------------------------------------------------------------
// 
//-------------------------------------------------------------------