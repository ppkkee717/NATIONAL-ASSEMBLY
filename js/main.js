$(function () {
    //menu 변수 
    var winWidth = $(window).outerWidth();
    var fix = $(".fixBg").outerWidth();
var moveTop=0;
    var menuBg = winWidth - fix;
    //tab 메뉴
    var tab = $(this).index();
      var selected = $(this).text();
    //scroll
    //    var moveTop = null;
    console.log("윈도우 너비" + winWidth)
    console.log("픽스 너비" + fix)
    console.log("menu 너비" + menuBg)
    //스크롤 이벤트
    $(".page").each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
       
            var event = e.originalEvent;
            var d = 0;
            if (event.detail) {
                d = event.detail * -40;
            } else {
                d = event.wheelDelta;
            };
            // 마우스휠을 위에서 아래로
            if (d < 0) {
                if ($(this).next().length) {
                    moveTop = $(this).next().offset().top;

                }
                // 마우스휠을 아래에서 위로
            } else {
                if ($(this).prev().length) {
                    moveTop = $(this).prev().offset().top;
                }
            }

            // 화면 이동 0.8초(800)
            if (index != 4 && d < 0 || index <= 4 && d > 0) {
                $("html").stop().animate({
                    scrollTop: moveTop + 'px'
                }, 500);
            }
        });
    });

    //menuBg
    function menuResize() {
        if (winWidth > 1300) {
            $(".menu").outerWidth(1200 + "px");
        }
        if (winWidth <= 1300) {
            $(".menu").outerWidth(menuBg);

        }
    }
    menuResize();
    $(window).resize(function () {
        winWidth = $(window).outerWidth();
        fix = $(".fixBg").outerWidth();
        menuBg = winWidth - fix;
        menuResize();

    })

    //    #nav

    $(".ham>a").click(function (e) {
        e.preventDefault();
        if ($(this).hasClass("close")) {
            $(".menu").css("right", "-1200px");
            $("html").css({
                "overflow": "auto",
                "height": "100%"
            })
            $(".menuBg").stop().fadeOut(300);
        } else {
            $(".menu").css("right", "150px");
            $(".menuBg").stop().fadeIn(300);
            $("html").css({
                "overflow": "hidden",
                "height": "100%"
            })

        }
        $(this).toggleClass("close");
    })
    //    서브메뉴
    $("#nav>li>a").click(function (e) {
        e.preventDefault();
        $(".sub2").stop().slideUp(300);
        $(".sub").css("display", "none")
        $("#nav>li>a").removeClass("active");
        $(this).addClass("active");
        $(this).next(".sub").css("display", "block");

    })

    //    서브2메뉴
    $(".sub>li>a").click(function (e) {
         e.preventDefault();
        $(".sub2").stop().slideUp(300);
        $(this).next(".sub2").stop().slideDown(300);

    })


    //메인 탭메뉴
    $(".tabMenu>li").click(function (e) {
        e.preventDefault();
        tab = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".banner").eq(tab).css("display", "block").siblings(".banner").css("display", "none");
    })
    //quick
    $(".quick>li").mouseover(function () {
        $(this).find(".img1").css("display", "none");
        $(this).find(".img2").css("display", "block");
    })
    $(".quick>li").mouseout(function () {
        $(this).find(".img2").css("display", "none");
        $(this).find(".img1").css("display", "block");
    })



    //퍼센트
    $(".GaugeMeter").gaugeMeter();
    //달력
    $("#cal").simpleCalendar({
        months: ['2019.01', '2019.02', '2019.03', '2019.04', '2019.05', '2019.06', '2019.07', '2019.08', '2019.09', '2019.10', '2019.11', '2019.12'],
        days: ['일', '월', '화', '수', '목', '금', '토']
    });
    //page2
    $(".pBottom>ul>li").mouseover(function () {
        $(this).addClass("active").siblings().removeClass("active");

    })
    $(".pBottom>ul>li").mouseout(function () {
        $(this).removeClass("active");

    })
    //유튜브 탭
    $(".thum>li").click(function (e) {
        e.preventDefault();
        tab = $(this).index();
        $(".bigWrap>div").eq(tab).css("display", "block").siblings().css("display", "none")
        $(this).addClass("active").siblings().removeClass("active")
    })
    //패밀리사이트 옵션
   
    $(".family>a").click(function (e) {
        e.preventDefault();
        $(".over").stop().slideToggle(300);
    })
    $(".over>ul>li").click(function (e) {
        e.preventDefault();
        selected = $(this).text();
        $(".family>a").text(selected);
        $(".over").stop().slideUp(300);
    })
    
    
    
    //1024 옵션
    
    
    //1024탭 메뉴 

    if(winWidth<=1024){
           $(".tabMain").click(function(e){
        e.preventDefault();
        $(".tabMenu,.tabBg").stop().slideToggle(300);
    })
    $(".tabMenu>li").click(function(e){
        e.preventDefault();
        selected = $(this).text();
        $(".tabMain a").text(selected);
        $(".tabMenu,.tabBg").stop().slideUp(300);
    })
    }
 
})
