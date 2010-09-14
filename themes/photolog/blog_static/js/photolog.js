$(function() {  
    $('#gallery1 a.lightbox').lightBox();  
});  

$(document).ready(function(){
    $('#gallery2 li').css('visibility', 'visible');
    $('#gallery2 li').find('a').fadeTo(0,0);
    $('#gallery2 li').find('img').fadeTo(0,0);

    var isMSIE = /*@cc_on!@*/false; 

    $('#gallery1').css('visibility', 'visible');
    $('#gallery1').fadeTo(0,0);
    if(!isMSIE){
        $('.main-index').fadeTo(0,0);
        $('.main-index').fadeTo(1500,1);
    }
    $('#gallery1').fadeTo(1500,1,function(){
        $('#gallery2 li').find('a').fadeTo(1500,1);
        $('#gallery2 li').find('img').fadeTo(1500,0.3);
    });

    $('.archive #gallery2 li').css('visibility', 'visible');
    $('.archive #gallery2 li').find('a').fadeTo(0,0);
    $('.archive #gallery2 li').find('img').fadeTo(0,0);
    $('.archive #gallery2 li').find('a').fadeTo(1500,1);
    $('.archive #gallery2 li').find('img').fadeTo(1500,0.3);

    $('#gallery2 li').hover(
    function() {
        $(this).find('img').fadeTo(200,1);
    },
    function() {
        $(this).find('img').fadeTo(200,0.3);
    });
});
