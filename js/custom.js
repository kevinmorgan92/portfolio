
// Function to populate email with subject and message from form in contact page
function SendMail() {
    var body = document.getElementById("Message").value;
    var SubjectLine = document.getElementById("Subject").value;
    window.location.href = "mailto:Morgan-k18@ulster.ac.uk?subject=" + SubjectLine + "&body=" + body;
}


(function($){

    // Animation for the skills section progress bars
    $(".w-25-p").animate({width: "25%"}, 2500);
    $(".w-50-p").animate({width: "50%"}, 2500);
    $(".w-75-p").animate({width: "75%"}, 2500);
    $(".w-100-p").animate({width: "100%"}, 2500);

    // Counter animation for the counter section
    $('.counter').counterUp();

    // Animation for sections 
    new WOW().init();

    var $grid = $('.filter-items').isotope();
    $('.filter ul').on('click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        $(this).siblings(".active").removeClass('active');
        $(this).addClass("active");
    });

    // Carousel animation for grades of modules section //
    $(document).ready(function(){
        $('.grade-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:1,
                    nav:false
                },
                1000:{
                    items:1,
                    nav:true,
                    loop:false
                }
            }
        });
    });

    // Carousel for clients whom i worked for section // 
    $(document).ready(function(){
        $('.client-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                400:{
                    items:2
                },
                600:{
                    items:3
                },
                800:{
                    items:4
                },
                1000:{
                    items:5
                }
            }
        });
        
        // Carousel for Screenshots of projects //
        $('.photo-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:false,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:1,
                    nav:false
                },
                1000:{
                    items:1,
                    nav:true,
                    loop:false
                }
            }
        });
    });

    // Preloader animation // 
    $(window).on('load',function(){
        $('#preloader_inner').fadeOut();
        $('#preloader').fadeOut();   
    });

    // The scroll up arrow to appear after 100px //
    $(window).on('scroll',function() {
        if($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    // The speed at which is scrolls back up //
    $('.scrollup').on('click',function(){
        $('html,body').animate({scrollTop:0},250);
        return false;
    });


})(jQuery);