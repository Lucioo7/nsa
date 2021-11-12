$(document).ready(function(){

    // // DYNAMIC WIDTH 
    // const no_of_bbb = $(".bbb").length;
    // for (i=1; i<= no_of_bbb; i++){
    //     const no_of_a1_in_bbb = $(".max_health:nth-child("+i+") .a1").length;
    //     const bbblen = (300 * no_of_a1_in_bbb) + "px";
    //     $(".max_health:nth-child("+i+") .aaa").css({"width":bbblen});
    // }



    // const slidd = $(".bbb");
    // let clicked = false;
    // let start;
    // let scroll;

    // slidd.mousedown(function (e) {
    //     const sliddthis = $(this);
    //     clicked = true;
    //     start = e.pageX - sliddthis.offset().left;
    //     scroll = sliddthis.scrollLeft();
    // });

    // slidd.mouseleave(function () {
    //     clicked = false;
    // });

    // slidd.mouseup(function () {
    //     clicked = false;
    // });

    // slidd.mousemove(function (e) {
    //     const sliddthis2 = $(this);
    //     if (!clicked) return;
    //     e.preventDefault();
    //     const x = e.pageX - sliddthis2.offset().left;
    //     const walk = (x - start) * 3;
    //     sliddthis2.scrollLeft(scroll - walk);
    //     console.log(walk);
    // });



// let slider = $('.bbb');
// let isDown = false;
// let startX;
// let scrollLeft;


// slider.addEventListener('mousedown', (e) => {
//     isDown = true;
//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
// });

// slider.addEventListener('mouseleave', () => {
//     isDown = false;
// });

// slider.addEventListener('mouseup', () => {
//     isDown = false;
// });

// slider.addEventListener('mousemove', (e) => {
//     if (!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - slider[i].offsetLeft;
//     const walk = (x - startX) * 3; //scroll-fast
//     slider.scrollLeft = scrollLeft - walk;
//     console.log(walk);
// });



$('.clientSlick').slick({
    
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    linear:true,
    arrows:false,
    speed: 300,
    responsive: [
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
        }
    ]

});

});

