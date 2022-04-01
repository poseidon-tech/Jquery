$(function() {
  
   $(".red-box").fadeOut(2000); //fades out element within 2000ms 
   $(".red-box").fadeIn(2000); //fades in element within 2000ms 
   $(".red-box").fadeIn(2000);
  $(".red-box").fadeTo(2000,0.3);   //change the fade according to opacity 0-1
  $(".green-box").fadeTo(2000,0.5);
  $(".blue-box").fadeTo(2000,0.7);
  $(".blue-box").fadeToggle();      //if element is fade out then it fades in element &viceversa
  $(".blue-box").fadeToggle();
  $(".red-box").hide(1000);         // hides element display=none;
  $(".red-box").show(1000);         // shows element
  $(".red-box").slideUp(2000);      // fades element in slide up manner
  $(".red-box").slideToggle();
  $(".blue-box").animate(
    {
      "margin-left":"+=200px"         // move the element to right by increasing margin to 200  within 1000ms in linear way
    }
  ,1000,"linear");
$(".blue-box").animate(
  {
    marginLeft:"+=200px",
    opacity:"0"   ,
    width:"50px",
    height:"50px"      // move the element to right by increasing margin to 200  within 1000ms in linear way and decreasing height,weight
  }
,1000,"linear");
$("p").animate({
  fontSize:"20px"
},1000);
});

$(document).ready(
  function()
  {
    jQuery(".green-box").fadeOut(2000);
  }
)


