$(document).ready(function () {


// header and footer 
    $(".site-header").load("_header.html", header);
    $(".site-footer").load("_footer.html",footer);    




    // Doctor slider ajax 
// First doctor
    $.ajax({
        type: "GET",
        url: "http://kamranaeff1994-002-site3.ctempurl.com/api/Doctors/2",
        success: function (response) {
          console.log(response.image);
            $('.item-1 h3').text(response.name);
            $('.item-1 span').text(response.profession);
            $('.item-1 p').text(response.description);

        },
        error: function (response) {
            console.log('Error');
            
        }
    });

    // Second doctor
    $.ajax({
        type: "GET",
        url: "http://kamranaeff1994-002-site3.ctempurl.com/api/Doctors/3",
        success: function (response) {
           $('.item-2 h3').text(response.name);
           $('.item-2 span').text(response.profession);
           $('.item-2 p').text(response.description);
           
        },
        error: function (response) {
            console.log('Error');
            
        }
    });

    // Third doctor
    $.ajax({
        type: "GET",
        url: "http://kamranaeff1994-002-site3.ctempurl.com/api/Doctors/4",
        success: function (response) {

            $('.item-3 h3').text(response.name);
            $('.item-3 span').text(response.profession);
            $('.item-3 p').text(response.description);
        },
        error: function (response) {
            console.log('Error');
            
        }
    });

    // Fifth doctor
    $.ajax({
        type: "GET",
        url: "http://kamranaeff1994-002-site3.ctempurl.com/api/Doctors/5",
        success: function (response) {
            $('.item-4 h3').text(response.name);
            $('.item-4 span').text(response.profession);
            $('.item-4 p').text(response.description);
        },
        error: function (response) {
            console.log('Error');
            
        }
    });



//counter up
    
    $('.counter').counterUp(
        {  delay:10,
          time:2000
          
      }
      );



    //  scroll
$(document).scroll(function () { 

  if($(document).scrollTop() >= 155)
  {
     $('.header-bottom').removeClass('scroll');
    $('.header-bottom').addClass('fixed-top');
     
  }
  else{
    $('.header-bottom').addClass('scroll');
    $('.header-bottom').removeClass('fixed-top');

  }

  if($(document).scrollTop() >= 0)
  {
      $('.arrow-top').removeClass('right');

  }
   if($(document).scrollTop() == 0)
  {
      $('.arrow-top').addClass('right');
  }
  
  $('.arrow-top').click(function (e) { 
    e.preventDefault();
    $(document).scrollTop(0);
});


});


// Photo carousel
$('.photo-carousel').owlCarousel({
    loop:true,
    nav:true,   
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:1
        }
    },
    navText : ["<i class='fas fa-angle-double-left'></i>","<i class='fas fa-angle-double-right'></i>"]
})


// doctors carousel
$('.doctor-carousel').owlCarousel({
    loop:true,
    nav:true,   
    dots:false,
    margin:30,
    // autoplay:true,
    // autoplayTimeout:3000,
    // autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600 :{
           items:2
        },
        1000:{
            items:3
        }
    },
    navText : ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"]
})

});


//Header functions
function header() {
    let lis = $('.ul li');
    $(lis).each(function (index, element) {
        // element == this

        // console.log(element);

        $(element).hover(function () {
            // over
            if(element.id==''){
                return
            }
            let hidden = $(`#${element.id} div`);
        
            // console.log(hidden);

            $(hidden).removeClass('none');

            
        }, function () {
            // out
            $(hidden).addClass('none');
        });

       

    });
    // console.log(hidden);

 
}

// Footer
function footer() {
    
}

 
// Call ac tion aid kid hover
$('.call-action').hover(function () {
    // over
    $('.call-action-text i').css({
        top: '20px',
        color:'#333333'
    });
    setTimeout(function(){
        $('.call-action-text i').css({
            display:'none'
        })
    },250);
    setTimeout(function(){
        $('.call-action-text i').css({
            display:'inline-block',
            top:'-25px'
        })
    },450);
    setTimeout(function(){
        $('.call-action-text i').css({
            top:'0'
        })
    },470);


}, function () {
    // out
    $('.call-action-text i').css('color', '#ffffff');
}
);