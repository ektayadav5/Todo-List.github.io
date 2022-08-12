// check-off specific todos by clicking
$("ul").on("click" , "li" ,function(){

    //if li is gray
//      if($(this).css("color")==="rgb(128, 128, 128)"){
//       //turn it black
//       $(this).css({
//               color:"black",
//               textDecoration:"none" });
//     }
//   //else
//      else{
//              $(this).css({
//              color:"gray",
//              textDecoration:"line-through"
//     });}

$(this).toggleClass("completed");
});

 //click on trash bin to delete a TODO
 $("ul").on("click","span",function(event){
    $(this).parent().fadeOut(600,function(){
        $(this).remove();
    });
    event.stopPropagation();
 });

$("input[type='text'").keypress (function(evt){
    if(evt.which === 13){
       //grabbing new todo text from input
       var todoText = $(this).val();
       $(this).val("");
       //create a new li and to ul
       $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }
});


$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
});