var id;
var flag = false;
var strOrignal = [];
var strCheck = [];
var index;
var n = 1;
var check=0;
var color;

$(document).on("keypress", function () {
  flag = true;
  $("h1").text("Level 1");
  gameStart();
});

function gameStart() {
  var randomNum = Math.floor(Math.random() * 4);
  var arr = ["green", "red", "blue", "yellow"];

  color = "#" + arr[randomNum];

  strOrignal.push(arr[randomNum]);

  console.log(color);

  $(color).addClass("pressed");
  setTimeout(function () {
    $(".btn").removeClass("pressed");
  }, 300);

  buttonClicks()
  
  
}





function buttonClicks(){
    $(".btn")
    .off("click")
    .on("click", function () {
      id = "#" + this.id;

      $(id).addClass("pressed");
      setTimeout(function () {
        $(".btn").removeClass("pressed");
      }, 300);

      strCheck.push(this.id);
      check++;
      
      if(this.id!=color){
        console.log(color);
        console.log(this.id);
        gameOver();
      }

      if(strOrignal.length==strCheck.length){

        Check();
      }else{
        buttonClicks();
      }
      
    });
}

// function Check() {
//   console.log(strCheck);
//   console.log(strOrignal);

//   for(int i=0; i<strCheck ;i++){
//     bool s=true
//     if (strCheck[i] != strOrignal[i]){
//       s=false;
//     }
//   }
//   if(s=true)
//    {
//     setTimeout(function () {
//       check=0;
//       strCheck = [];
//       $("h1").text("Level " + ++n);
//       gameStart();
//     }, 400);
//   }
// }
function Check() {
  console.log(strCheck);
  console.log(strOrignal);

  if (strCheck == strOrignal) {
    setTimeout(function () {
      check=0;
      strCheck = [];
      $("h1").text("Level " + ++n);
      gameStart();
    }, 400);
  }
}

//if wrong click then gameover 
// change inner html 
function gameOver(){
  $("h1").text("Game Over");
}


//use array instead of string , check at every step 