// 畫棟至指定位置

$(function(){
    // 畫棟至指定位置
$(".menu a").click(function(){
        let btn = $(this).attr('href');
        let pos = $(btn).offset();
        $('html,body').animate({scrollTop:pos.top},1000);
    });





    //畫棟至頂
$('#goTop').click(function(){
    $('html,body').animate({scrollTop:0},1000);
});


//指定卷軸位置淡出淡入
    $(window).scroll(function(){
        if($(this).scrollTop()>200){     /* ,1  透明度 */
            $('#goTop').stop().fadeIn('fast',1);
        }else{
            $('#goTop').stop().fadeOut('fast');
        }
    });
});



$('.smoove').smoove({
    offset : '60%'
});