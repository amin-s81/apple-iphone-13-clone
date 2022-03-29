//__________________________________________________classes__________________________________________________
class Navbar {
    //// private:
    #isToggleOpen;
    #delayTime;
    #hamburgerMenuBottom() {
        window.clearTimeout(this.#delayTime);
        if (this.#isToggleOpen == 1) {
            $(".center").removeClass("rotate");
            this.#delayTime = window.setTimeout(() => {
                $(".center").removeClass("open");
            }, 160);
        } else {
            $(".center").addClass("open");
            this.#delayTime = window.setTimeout(() => {
                $(".center").addClass("rotate");
            }, 160);
        }
    }
    #hamburgerMenuStyle() {
        if (this.#isToggleOpen == 1) {
            $("#hamburger-menu").slideUp(400, "linear");
            setTimeout(function () {
                $(".tablet").removeAttr("style");
                $(".tablet li").last().animate(
                    {
                        top: 0,
                        opacity: 1,
                    },
                    250
                );
                $("html").css("overflow", "visible");
            }, 300);
        } else {
            $("html").css("overflow", "hidden");
            $(".tablet").css("background-color", "#000");
            $(".tablet li").last().animate(
                {
                    top: 3,
                    opacity: 0,
                },
                300
            );
            $("#hamburger-menu").slideDown(400, "linear");
        }
    }

    //// public:
    constructor() {
        this.#isToggleOpen = -1;
    }
    hamburgerMenu() {
        this.#hamburgerMenuBottom();
        this.#hamburgerMenuStyle();
        this.#isToggleOpen *= -1;
    }
    responsive() {
        var width = $(window).width();
        if (width <= 832) {
            $("#navbar").hide();
            $(".tablet").show();
        }
        if (width > 832) {
            $("#navbar").show();
            $(".tablet").hide();
        }
    }
}
//__________________________________________________main()___________________________________________________
$(document).ready(function () {
    const nav = new Navbar();
    // responsive
    nav.responsive();
    $(window).on("resize", () => {
        nav.responsive();
    });
    //hamburgerMenu
    $(".frame").on("click", () => {
        nav.hamburgerMenu();
    });
});
