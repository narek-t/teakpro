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

    $('.single-big__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.single-thumb__slider',
    });

    $('.single-thumb__slider').slick({
    	slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.single-big__slider',
		focusOnSelect: true,
		arrows: false,
    });

    $('.popup-with-move-anim').magnificPopup({
      type: 'inline',
      fixedContentPos: true,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-slide-bottom'
    });


});