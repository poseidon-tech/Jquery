// $(document).ready(function()
// {
// $(".red-box").fadeOut(2000).delay(1000).slideDown(2000);
// $(".blue-box").fadeOut(2000).delay(2000).slideDown(2000,function()
// {
//     alert("callback function called");
// });
// });
$(document).ready(function()
{
// $(".lightbox").delay(500).fadeIn();
$(".red-box").fadeOut(2000).delay(1000).slideUp(2000,function()
{$(".green-box").fadeOut(2000).delay(1000).slideUp(2000,function(){

    $(".blue-box").fadeOut(2000).delay(1000).slideUp(2000)
    $("input:text").css("background-color","red");
})});

})

