
//detecting button press
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML;
        buttonAnimation(buttonInnerHTML);
        handleClick(buttonInnerHTML);
    });
}

document.addEventListener("keypress" , function(event){
    handleClick(event.key);
    buttonAnimation(event.key);
});

//detecting keyboard press
function handleClick(key){
    
    switch(key){
        case "w":
            var file="sounds/tom-1.mp3"
            break;
        case "a":
            var file="sounds/tom-2.mp3"
            break;
        case "s":
            var file="sounds/tom-3.mp3"
            break;
        case "d":
            var file="sounds/tom-4.mp3"
            break;
        case "j":
            var file="sounds/crash.mp3"
            break;
        case "k":
            var file="sounds/kick-bass.mp3"
            break;
        case "l":
            var file="sounds/snare.mp3"
            break;
    }
    
    var audio=new Audio(file)
    audio.play()
}


function buttonAnimation(currentKey){
    var activeButton=document.querySelector("." +currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)

}
