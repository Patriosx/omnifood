/* global $ */
/*eslint-env jquery*/
$(document).ready(function () {

    //       $('h1').click(function(){
    //     $(this).css('color','#f00000');
    // }); 

    //     
    //     var waypoints = $('#handler-first').waypoint(function (direction) {
    //         notify(this.element.id + ' hit 25% from top of window')
    //     }, {
    //         offset: '25%'
    //     })

    /**** For the sticky navigation ****/
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    /*** Animation on scroll ***/
    //When you reach waypoint 1
    $('.js--wp-1').waypoint(
        (direction) => {
            $('.js--wp-1').addClass('animate__animated animate__fadeIn');
        }, {
            /*half of the page*/
            offset: '50%',
        }
    );

    //When you reach waypoint 2
    $('.js--wp-2').waypoint(
        (direction) => {
            $('.js--wp-2').addClass('animate__animated  animate__backInLeft');
        }, {
            /*half of the page*/
            offset: '50%',
        }
    );

    //When you reach waypoint 3
    $('.js--wp-3').waypoint(
        (direction) => {
            $('.js--wp-3').addClass('animate__animated  animate__fadeInUp');
        }, {
            /*half of the page*/
            offset: '50%',
        }
    );

    //When you reach waypoint 4
    $('.js--wp-4').waypoint(
        (direction) => {
            $('.js--wp-4').addClass('animate__animated  animate__pulse');
        }, {
            /*half of the page*/
            offset: '50%',
        }
    );
    
/*Mobile navigator*/
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--menu-icon');
        nav.slideToggle(200);
         
        
        if(icon.attr('name')==='reorder-three-outline'){
            icon.attr('name','close' );
            
        }else{
            icon.attr('name','reorder-three-outline' );
        }
    })
    
});
