$(function(){

    $('.questions__list li').on('click', function(){
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
    });

});




