$(function()
{
    $("#pre").load("js/script.js")
    $("#pre").load("js/ededdescript.php").function(response,status)
    {
        if(status=="error")
        {console.log("error")}
    }
})