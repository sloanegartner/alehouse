$(window).scroll(function(){
    $scroll = $(window).scrollTop();
    
    if ($scroll > 0) {
        $('#navbar').css('background', '#2a0e07');
    } else {
        $('#navbar').css('background', 'Transparent');
    }
});

//Reviews
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items: 1,
    smartSpeed: 600,

})
