$(window).scroll(function(){
    $scroll = $(window).scrollTop();
    
    if ($scroll > 0) {
        $('#navbar').css('background', '#666362');
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
