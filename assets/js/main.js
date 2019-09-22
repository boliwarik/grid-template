$('.header-navbar__hamburger').on('click', function(){
    $(this).toggleClass('active');
    $('.header-navbar__list')
    .stop ('throw, throw')
    .fadeToggle('500');
	});