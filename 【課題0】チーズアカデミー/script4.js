
$('.slider').slick({
    autoplay:true,
    infinite:true,
    slidesToShow:2,
    slidesToShow:2,
    prevArrow:'<div class="slick-prev"></div>',
    nextArrow:'<div class="slick-next"></div>',
    dots:false,

});

$('.title').on('click',function(){
    var findElm = $(this).next(".box");
    $(findElm).slideToggle();
    if($(this).hasClass('close')){
        $(this).removeClass('close');
    }else{
        $(this).addClass('close');
    }
});

$('#page-top').click(function(){
    $('body,html').animate({
        scrollTop:0
    },500);
    return false;
});