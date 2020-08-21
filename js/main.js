
$('.all').hide();
$('.sidemenu').hide();
$('.trips_by_destination').hide();
$('.mobile-all-options').hide();
$('.mobile_trip_theme').hide();


///slick .. 

    $('.owl-carousel').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
})


setTimeout(function(){ 
    $('.loader').fadeToggle();
 }, 1000);

$(document).ready(function(){
    

    var mouse  = false;
    $('#asias-menu').css("display",'none');
    $('#europes-menu').css("display",'none');
    $('.austrilas-menu').css("display",'none');
    $('.norths-menu').css("display",'none');
    $('.souths-menu').css("display",'none');
    $('.tablet-all').hide();
    $('.tablet_trip_theme').hide();
   
});

$(document).scroll(function(){
    $('#asias-menu').css("display",'none');
    $('#europes-menu').css("display",'none');
    $('.austrilas-menu').css("display",'none');
    $('.norths-menu').css("display",'none');
    $('.souths-menu').css("display",'none');
    $('#all-menu').css("display",'none');
    $('.theme_dropdown').css("display",'none');
    $('.tablet-all').hide();
    $('.tablet_trip_theme').hide();


    $('.hello').css("background-color","white");
    $('.mob-navigation').css("background-color","white");
    $('.mobile-login').css({"border":"1px solid black", "border-radius": "15px"});
    $('.logo').css("color","black");
    $('.side').css("color","black");
    $('.login-desktop').css({"border":"2px solid black" , "border-radius":"20px","padding":"5px 20px"});


});
$(document).scroll(function(){
    
    var scroll = $(window).scrollTop();
    if(scroll == 0){
        $('.hello').css("background-color","transparent");
        $('.mobile-login').css({"border":"1px solid white", "border-radius": "15px"});
        $('.mob-navigation').css("background-color","transparent");
        $('.logo').css("color","white");
        $('.side').css("color","white");
        $('.login-desktop').css({"border":"2px solid white" , "border-radius":"20px","padding":"5px 20px"});

    }
    
    });

$('.destination-hover').click(function(e){
    e.preventDefault();
    $('#all-menu').css("display",'block');
    mouse = true;
});

$('.themehover').click(function(e){
    e.preventDefault();
    $('.theme_dropdown').css("display",'block');
    mouse = true;
});


$('.search-bar').click(function(e){
    $('.search-dropdown').css("display",'block');
    mouse = true;
});

$('.tablet_trip_by_destination').click(function(e){
    e.preventDefault();
        $('.tablet-all').show();
        mouse = true;
    });


    $('.tablet_trip_by_trip').click(function(e){
        e.preventDefault();
            $('.tablet_trip_theme').show();
            mouse = true;
        });
    

$(document).mouseup(function(){
    if(mouse == true){
        $('#all-menu').css("display",'none');
        $('#asias-menu').css("display",'none');
        $('#europes-menu').css("display",'none');
        $('.austrilas-menu').css("display",'none');
        $('.norths-menu').css("display",'none');
        $('.souths-menu').css("display",'none');
        $('.theme_dropdown').css("display",'none');
        $('.search-dropdown').css("display",'none');
        $('.tablet-all').hide();
        $('.tablet_trip_theme').hide();


        mouse = false;
    }





});

$('.north').click(function(e){
    e.preventDefault();
    $('.norths-menu').css("display",'block');
    $('.souths-menu').css("display",'none');
    $('#asias-menu').css("display",'none');
    $('#all-menu').css("display",'none');
    $('#europes-menu').css("display",'none');
    $('.austrilas-menu').css("display",'none');
    });  


    $('.south').click(function(e){
        e.preventDefault();
    $('.souths-menu').css("display",'block');
    $('.norths-menu').css("display",'none');
        $('#asias-menu').css("display",'none');
        $('#all-menu').css("display",'none');
        $('#europes-menu').css("display",'none');
        $('.austrilas-menu').css("display",'none');
        });  

$('.austrila').click(function(e){
    e.preventDefault();
    $('.souths-menu').css("display",'none');
    $('.norths-menu').css("display",'none');
    $('#asias-menu').css("display",'none');
    $('#all-menu').css("display",'none');
    $('#europes-menu').css("display",'none');
    $('.austrilas-menu').css("display",'block');
    });        

$('.europe').click(function(e){
    e.preventDefault();
    $('.souths-menu').css("display",'none');
    $('.norths-menu').css("display",'none');
    $('#asias-menu').css("display",'none');
    $('#all-menu').css("display",'none');
    $('.austrilas-menu').css("display",'none');
    $('#europes-menu').css("display",'block');
    });

$('.all').click(function(e){
    e.preventDefault();
    $('.souths-menu').css("display",'none');
    $('.norths-menu').css("display",'none');
    $('.austrilas-menu').css("display",'none');
    $('#asias-menu').css("display",'none');
    $('#europes-menu').css("display",'none');
    $('#all-menu').css("display",'block');
    });

$('.asia').click(function(e){
     e.preventDefault();
    $('.souths-menu').css("display",'none');
    $('#all-menu').css("display",'none');
     $('.austrilas-menu').css("display",'none');
    $('#europes-menu').css("display",'none');
     $('#asias-menu').css("display",'block');
     });    

     ///menu-mobile
     
     

$('.menu-icon').click(function(e){
    e.preventDefault();
        $('.sidemenu').show();

});

$('.close-button').click(function(e){
    e.preventDefault();
        $('.sidemenu').hide();
        $('.trips_by_destination').hide();
        $('.mobile-all-options').hide();
        $('.mobile_trip_theme').hide();
        $('.menu-sidebar').show();
});



$('.mobile_trip_by_destination').click(function(e){
e.preventDefault();
$('.trips_by_destination').show();
$('.menu-sidebar').hide();
});


$('.mobile_trip_by_trip').click(function(e){
    e.preventDefault();
    $('.mobile_trip_theme').show();
    $('.menu-sidebar').hide();
    });
    





$('.mobile-back-level-one').click(function(e){
e.preventDefault();
$('.trips_by_destination').hide();
        $('.menu-sidebar').show();
});

$('.mobile-back-level-two').click(function(e){
e.preventDefault();
    $('.trips_by_destination').show();
    $('.menu-sidebar').hide();
    $('.mobile-all-options').hide();
});


$('.mobile-back-theme').click(function(){
    $('.mobile_trip_theme').hide();
    $('.mobile-all-options').hide();
    $('.menu-sidebar').show();
});






$('.mobile-all').click(function(e){
e.preventDefault();
    $('.trips_by_destination').hide();
    $('.menu-sidebar').hide();
    $('.mobile-all-options').show();
});


$('.').click(function(e){

});


$('.').click(function(e){

});


$('.').click(function(e){

});


$('.').click(function(e){

});