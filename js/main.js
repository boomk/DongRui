/**
 * Created by csm on 2017/11/10.
 */
$(function () {
    $(".news-its ol li").on("click",function (e) {
        $(this).addClass("current").siblings().removeClass("current");
        $(".news-items > div").eq($(this).index()).fadeIn("fast").siblings().fadeOut();
        e.preventDefault();
        e.stopPropagation();
        
    });


//箭头
            
   $("#arrow .arrow-top").on("click",function(e){
        // alert('up');
        var index = $(".news-slider.actived").attr('data-index');
        if(index == 3){
            index = 0;
        }else{
            index++;
        }
        $(".news-its ol li").eq(index).addClass("current").siblings().removeClass("current");
        $(".news-items > div").eq(index).addClass("actived").siblings().removeClass("actived");
        $(".news-items > div").eq(index).fadeIn("fast").siblings().fadeOut();
    });
    $("#arrow .arrow-bottom").on('click',function(e){
        var index = $(".news-slider.actived").attr('data-index');
        if(index == 0){
            index = 3;
        }else{
            index--;
        }
        $(".news-its ol li").eq(index).addClass("current").siblings().removeClass("current");
        $(".news-items > div").eq(index).addClass("actived").siblings().removeClass("actived");
        $(".news-items > div").eq(index).fadeIn("fast").siblings().fadeOut();
    });


});