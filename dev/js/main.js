$(document).ready(function() {
	$('.tabs-block__item').click(function(event) {
		event.preventDefault();
		var index = $(this).index();
		$('.tabs-block__item').removeClass('active');
		$(this).addClass('active');
		$('.tabbed__slider-item').removeClass('active');
		$('.tabbed__slider .tabbed__slider-item').eq(index).addClass('active');
		$('.tabbed__slider .tabbed__slider-item').eq(index).find('.tabbed__slider-inner').slick('setPosition'); 
	});
	var $sliders = $(".tabbed__slider-inner");
    $(".tabbed__slider-item").each(function(){
        var $this = $(this);
        var slick = $this.find( $sliders ).slick({
            slidesToShow: 4,
			slidesToScroll: 1,
			prevArrow: $this.find('.sl-prev'),
			nextArrow: $this.find('.sl-next'),
        });
    });

    $('.to-anchor').on('click', function(event){
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 400);
	});

	$('.top-positions__slider').slick({
		prevArrow: $('.l-prev'),
		nextArrow: $('.l-next'),
		dots: true,
	});

	$(".popular__slider-item").each(function(){
        var $this = $(this);
        var slick = $this.find( $sliders ).slick({
            slidesToShow: 4,
			slidesToScroll: 1,
			prevArrow: $this.find('.sl-prev'),
			nextArrow: $this.find('.sl-next'),
        });
    });


});