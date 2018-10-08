$(".inv").css('visibility','visible').hide().fadeIn('slow');

function scroll_to_div(div_id)
{
 $('html,body').animate(
 {
  scrollTop: $("."+div_id).offset().top
 },
 'slow');
}

$('#about_btn').eq(0).click(() => {
    $('html, body').animate({
        scrollTop: $('#aboutme').eq(0).offset().top
    }, 250);
});

$('#projects_btn').eq(0).click(() => {
    $('html, body').animate({
        scrollTop: $('#projects').eq(0).offset().top
    }, 250);
});
 