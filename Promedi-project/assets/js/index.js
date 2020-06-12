$(document).ready(function () {


    $(".site-header").load("_header.html", test);
    $(".site-footer").load("_footer.html");




});

function test() {
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