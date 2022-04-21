$(function(){
    $('label').on('click',function(){
        $(this).siblings('label').removeClass('on');
        $(this).addClass('on');
    });

    $('.selType01').on('click',function(){
        $(this).toggleClass('active');
    });

    // gnb Scrolling
	$(window).scroll(function(){
		var scrollTop = $(this).scrollTop();
		if (scrollTop > 100) {
			$('html').addClass('fixTop');
		} else {
			$('html').removeClass('fixTop');
		}
	})
});

//생활코딩

