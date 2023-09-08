function counter(){
    var count = setInterval(function(){
        var x = parseInt($('.counter').text());
        $('.counter').text((++x).toString());
        if(x==100){
            clearInterval(count);
            $('.counter').addClass('hide');
            $('.preloader').addClass('active');
        }
    },60)
}
counter();