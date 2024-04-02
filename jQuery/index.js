//$("h1").css("color","red");

$("h1").addClass("big-title margin-50"); //adding both classes 

//to check for class 
//$("h1").hasClass("big-title")

// changes the text inside all the buttons 
//$("button").text("uhj");


//html makes it so that the inner html is also taken into consideration
// $("button").html("<em>uhj</em>"); 

$("a").attr("href" ,"https://www.google.com");

$("h1").click(function(){
    $("h1").css("color", "purple");
})

//in dom we have to select all buttons using a for loop to add eventlistener but with jsquery its much easier 

// $("button").click(function(){
//     $("h1").css("color", "purple");
// })

//we can detect input using 
$("input").keypress(function(event){
    var heading= event.key;
    $("h1").text(heading);
})

$(document).on("click", function(){
    $("h1").css("color", "purple");
})

$("h1").before("<button> before </button");
$("h1").after("<button> after </button");
$("h1").prepend("<button> prepend </button");
$("h1").append("<button> append </button");


// $("h1").hide();
// $("h1").show();
// $("h1").toggle();
// $("h1").fadeOut();
// $("h1").fadeIn();
// $("h1").fadeToggle();
// $("h1").slideUp();
// $("h1").slideDown ();
// $("h1").animate({opacity:0.5});;//opcaticty , margin etc 


$("button").click(function(){
     
    
})

//we can chane them together as well