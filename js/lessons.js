$('.questions').hide();
$('.content1').hide();
$('.content2').hide();
$('.answer1').hide();
$('.answer2').hide();
$('.answer3').hide();
$('.answer4').hide();


$('.understandBtn').mouseover(function(){
    $('.understandImg').addClass('spinImg');
});

$('.understandBtn').mouseout(function(){
    $('.understandImg').removeClass('spinImg');
});

$('.understandBtn').click(function () {
    var clicks = $('.understandBtn').data('clicks');
    if (clicks) {
        $('.understandImg').animate({
            left: 0,
            top: 0
        });
        $('.questions').fadeOut(300);
        $('.understandImg').removeClass('spinImg');
    }
    else {
        $('.understandImg').animate({
            left: 230,
            top: 120
        });
        $('.questions').fadeIn(1200);
        $('.understandImg').removeClass('spinImg');
    }
    $('.understandBtn').data("clicks", !clicks);
});



$('.answer1Btn').click(function () {
    $('.answer1').fadeToggle(400);
});
$('.answer2Btn').click(function () {
    $('.answer2').fadeToggle(400);
});
$('.answer3Btn').click(function () {
    $('.answer3').fadeToggle(400);
});
$('.answer4Btn').click(function () {
    $('.answer4').fadeToggle(400);
});



$('.content1Btn').click(function () {
   $('.content1').slideToggle();
});

$('.content2Btn').click(function () {
    $('.content2').slideToggle();
});



