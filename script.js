// This is script file

$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:false,
    autoplayTimeout:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        700:{
            items:2,
            nav:true
        },
        800:{
            items:3
        },
    }
})

