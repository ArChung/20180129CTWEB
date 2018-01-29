var swiper1, swiper2;


$(document).ready(function () {
    initSwiper();
    // $('.eventTabs .tab1').on('click', function (e) {
    //     eventsSwiper.slideTo(3, 600)
    //     $(this).addClass('active').siblings().removeClass('active');

    // })
    // $('.eventTabs .tab2').on('click', function (e) {
    //     eventsSwiper.slideTo(0, 600)
    //     $(this).addClass('active').siblings().removeClass('active');

    // })

    $('.tabWrap .tag').on('click', function () {
        var t = $(this);
        var id = t.index() * 1 + 1;
        $('.tabWrap .tag').removeClass('active');
        t.addClass('active');
        $('.contentBox').addClass('hide');
        $('.contentBox' + id).removeClass('hide');
        window['swiper' + id].slideTo(0);

        if(id==1){
            window['swiper' + id].autoplay.stop();
            window['swiper' + id].autoplay.start();    
        }
        
    });

    $('.openBtn').on('click',function(){
        $("#QABox").toggleClass('open');
    });

})



function initSwiper() {

    var vId = ['PejHh749zLw', 'CCxMM4bUDRk', 'w204dy5qcNo'];
    swiper1 = new Swiper('#slider1', {
        pagination: {
            el: '#slider1 .slider-pagination',
            // type: 'custom',
        },
        navigation: {
            nextEl: '#slider1 .swiper-button-next',
            prevEl: '#slider1 .swiper-button-prev',
        },
        on: {
            slideChangeTransitionStart: function () {
                $('.videoWrap').empty();
                var video = $('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + vId[swiper1.activeIndex] + '?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
                $(swiper1.slides[swiper1.activeIndex]).find('.videoWrap').append(video);
            }
        },
        autoplay: {
            delay: 5000,
        },
    });



    swiper2 = new Swiper('#slider2', {
        pagination: {
            el: '#slider2 .slider-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#slider2 .swiper-button-next',
            prevEl: '#slider2 .swiper-button-prev',
        },
        on: {

        },
        // autoplay: {
        //     delay: 5000,
        // },
    });


    $('.contentBox2').addClass('hide');
}