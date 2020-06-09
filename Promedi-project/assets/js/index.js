$(document).ready(function () {


    $(".site-header").load("_header.html",test);
    $(".site-footer").load("_footer.html");


 

});

function test(){
    //  let li = $('#li');
    let hidden = $('#hidden');

    // $(li).hover(function () {
    //         // over
    //         $(hidden).removeClass('none');
    //     }, function () {
    //         // out
    //         $(hidden).addClass('none');
    //     }
    // );

    let lis=$('.ul li');

    $.each(lis, function (queue, element) { 
         
            $(element).hover(function () {
            // over
            $(hidden).removeClass('none');           ////////////////qaldigim yer hiddeni de dovre sal sora hoveri yoxla
        }, function () {
            // out
            $(hidden).addClass('none');
        }
    );

    });



    console.log(lis);

}
