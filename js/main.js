// gnb에서 서브메뉴 슬라이드
$('.btn_sub').click(function(){
    $(this).find('span').toggleClass('on');
    $(this).siblings('.list_sub_wrap').slideToggle();
});

// gnb 왼쪽에서 슬라이드
$('.top_left').click(function(){
    $('#gnb').animate({left:0},300,'swing');
    $('.dark').css({'display':'block'});
});
// gnb 사라짐
$('.dark').click(function(){
    $('.dark').css({'display':'none'});
    $('#gnb').animate({left:-304},300);
    $('.login_popup').hide();
});

// 로그인 팝업
$('.login_require').click(function(){
    $('.login_popup').show();
    $('#gnb').animate({left:-304},300,'swing');
});
// 로그인 팝업 사라짐
$('.btn_close').click(function(){
    $('.login_popup').hide();
    $('.dark').css({'display':'none'});
});
