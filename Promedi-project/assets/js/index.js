$(document).ready(function () {


    $(".site-header").load("_header.html", header);
    $(".site-footer").load("_footer.html",footer);


    

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



});

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


function footer() {
    
}
