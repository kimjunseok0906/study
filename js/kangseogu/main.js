$(function(){

	//gnb
    $('.gnb li a').on({
		mouseover: function() {
            $('.depth02').addClass('active')
			return false;
		},
		focus: function() {	
            $('.depth02').addClass('active')
			return false;
		}
    });
    
    $('.headerArea').on('mouseleave', function() {
        $('.depth02').removeClass('active')
		return false;
    });

    $('.headerArea .gnb').find('a:last').on('focusout', function() {
        $('.depth02').removeClass('active')
		return false;
	});

    // gnb Scrolling
	$(window).scroll(function(){
		var scrollTop = $(this).scrollTop();
		if (scrollTop > 100) {
			$('html').addClass('fixTop');
		} else {
			$('html').removeClass('fixTop');
		}
	});

	// tab menu
	$(".menu_list li").click(function(){
        $(this).parent().parent().parent().find(".menu_list_wrap").eq($(this).index()).addClass('on').siblings().removeClass('on');
        $(this).parent().find("li").removeClass("on");
		$(this).addClass("on");
		return false;
    });

	//메인비주얼 롤링
	$('.slider').slick({
	});
});

