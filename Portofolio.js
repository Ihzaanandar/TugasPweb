$('.btn').click(function(){
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
});

$('.feat-btn').click(function() {
    $('nav ul .feat-show').toggleClass("show");
});

$('.serv-btn').click(function() {
    $('nav ul .serv-show').toggleClass("show1");
});