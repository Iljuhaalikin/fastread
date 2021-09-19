$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu,.header-btn,.menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $(function(){
        $('#nav li').hover(function(){
            $(this).clildren(ul).stop(false,true ).fadeIn(300);
        }, function(){
            $(this).clildren(ul).stop(false,true ).fadeOut(300);
        })
    });

    $('.block__title').click(function(event){
        if($('.block').hasClass('one')){
            $('.block__title').not($(this)).removeClass('active');
            $('.block__text').not($(this).next()).slideUp(300);

        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
    

    $('.slider').slick({
        arrows: true,
        dots: false, 
        autoplay:true,
        autoplaySpeed:1500,
        slidesToShow: 1,
        responsive: [
    {
        breakpoint: 992,
        settings: {
            arrows: false,
            dots: true, 
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]  
    });

    $('.slider__second').slick({
        arrows: true,
        dots: false, 
        infinite: true,
         slidesToShow: 2,
         autoplay:true,
        autoplaySpeed:1100,
         slidesToScroll: 1, 
         responsive: [
            {
                breakpoint: 1540,
                settings: {
                    arrows: false,
                    dots: true, 
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  centerMode: false,
                }
            },
            {
                breakpoint: 1515,
                settings: {
                    arrows: false,
                    dots: true, 
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: true,
                }
            },
            {
                breakpoint: 1015,
                settings: {
                    arrows: false,
                    dots: true, 
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: false,
                }
            },
            {
                breakpoint: 703,
                settings: {
                    arrows: false,
                    dots: true, 
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: true,
                }
            },
            {
                breakpoint: 547,
                settings: {
                    arrows: false,
                    dots: false, 
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: false,
                }
            },
         ]
    });

    $('.third__slider').slick({
        arrows: false,
        dots: false, 
        infinite: true,
        centerMode: true,
         slidesToShow: 6,
         slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1658,
                settings: {
                    arrows: false,
                    infinite: true,
                    dots: false, 
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  centerMode: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    infinite: true,
                    dots: false, 
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  centerMode: false,
                }
            },
            {
                breakpoint: 552,
                settings: {
                    arrows: false,
                    dots: false, 
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: false,
                }
            },
        ]
    });

    var $window = $(window), $element = $('.nav__history-school');

      if ($window.width() < 1760) {
        $('.history__slider').slick({ 
            arrows:false,
            dots: false, 
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: true,
        });
      }

      jQuery(function($) {

        const section = $('.section'),
              nav = $('.nav__history-school'),
              navHeight = nav.outerHeight(); // получаем высоту навигации 
    
    
        $(window).on('scroll', function () {
            const position = $(this).scrollTop();
    
            section.each(function () {
                const top = $(this).offset().top - navHeight - 5,
                      bottom = top + $(this).outerHeight();
    
                if (position >= top && position <= bottom) {
                    nav.find('a').removeClass('nav__history-school__link_active');
                    section.removeClass('nav__history-school__link_active');
    
                    nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('nav__history-school__link_active');
                }
            });
        });
    });


    $('.history__photos__slider').slick({
        arrows:true,
        dots: false, 
        infinite: true,
        slidesToShow: 2,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1533,
                settings: {
                    arrows: false,
                    dots: true, 
                  slidesToShow: 2,
                  variableWidth: true,
                }
            },
        ]
    });


    $('.timetable__tabs__item-btn').click(function(e){
        e.preventDefault();

        $('.timetable__tabs__item-btn').removeClass('timetable__tabs__item-btn_active');
        $('.tabs__block').removeClass('tabs__block_active');

        $(this).addClass('timetable__tabs__item-btn_active');
        $($(this).attr('href')).addClass('tabs__block_active')
    });

    $('.timetable__tabs__item-btn:first').click();


    $('.history__records__title-area').click(function(e){
        if($('.history__records').hasClass('only_one')){
            $('.history__records__title-area').not($(this)).removeClass('spoiler-active');
            $('.history__records__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('spoiler-active').next().slideToggle(300);
    });


           $('.patents__item').slice(0, 5).show();
           $('#show_more').click(function(e){
            e.preventDefault();
            $('.patents__item:hidden').slice(0, 3).slideDown();
           });
});