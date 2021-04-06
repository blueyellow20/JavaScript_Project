var bgm = new Audio("bgm.mp3");
bgm.play();

var scream = new Audio("./sound/maleScream.wav");
var safe = new Audio("./sound/chest.wav")
var crumple = new Audio("./sound/crumple.wav");
var doorS = new Audio("./sound/door.wav");
var winG = new Audio("./sound/win.wav")
var loseG= new Audio("./sound/lose.wav");
function start() {
    
    
    document.querySelector(".start").classList.add("invisible")
    document.querySelector("#storyOne").classList.add("invisible")
    document.querySelector("#storyTwo").classList.add("visible")


    bgm.pause();
    setTimeout(function(){ 
       scream.play(); 
       document.querySelector("#next").classList.add("visible")
      }, 1700);



    
    
 }

 function next(){
    document.querySelector("#next").classList.remove("visible")
    document.querySelector("#storyTwo").classList.remove("visible")
    document.querySelector("#story3").classList.add("visible")
    document.querySelector("#story4").classList.add("visible")
    document.querySelector("#look").classList.add("visible")
    scream.pause()

 }
 function look(){
    document.querySelector("#story3").classList.remove("visible")
    document.querySelector("#story4").classList.remove("visible")
    document.querySelector("#look").classList.remove("visible")
    document.querySelector("#story5-1").classList.add("visible")
    document.querySelector("#story5-2").classList.add("visible")
    document.querySelector("#story5-3").classList.add("visible")
    document.querySelector("#door").classList.add("visible")
    document.querySelector("#safe").classList.add("visible")
    document.querySelector("#paper").classList.add("visible")
    document.querySelector("#getOut").classList.add("visible")
    document.querySelector("#hintOut").classList.add("visible")

 }

 function door(){
   document.querySelector("#story6").classList.add("visible")
   document.querySelector("#story8").classList.remove("visible")
   document.querySelector("#answer2").classList.remove("visible")
   document.querySelector("#open2").classList.remove("visible")
   document.querySelector("#quiz1").classList.remove("visible")
   document.querySelector("#quiz1-1").classList.remove("visible")
   document.querySelector("#getOut").classList.remove("visible")
   document.querySelector("#hintOut").classList.remove("visible")

   document.querySelector("#mon").classList.add("visible")
   document.querySelector("#tue").classList.add("visible")
   document.querySelector("#wen").classList.add("visible")
   document.querySelector("#thr").classList.add("visible")
   document.querySelector("#fri").classList.add("visible")
   document.querySelector("#sat").classList.add("visible")
   document.querySelector("#sun").classList.add("visible")

   document.querySelector("#quiz2").classList.remove("visible")

   doorS.play();


 }

 function chest(){
   document.querySelector("#story6").classList.remove("visible")
   document.querySelector("#story8").classList.add("visible")
   document.querySelector("#answer2").classList.add("visible")
   document.querySelector("#open2").classList.add("visible")
   document.querySelector("#quiz1").classList.remove("visible")
   document.querySelector("#quiz1-1").classList.remove("visible")
   document.querySelector("#getOut").classList.remove("visible")
   document.querySelector("#hintOut").classList.remove("visible")


   document.querySelector("#mon").classList.remove("visible")
   document.querySelector("#tue").classList.remove("visible")
   document.querySelector("#wen").classList.remove("visible")
   document.querySelector("#thr").classList.remove("visible")
   document.querySelector("#fri").classList.remove("visible")
   document.querySelector("#sat").classList.remove("visible")
   document.querySelector("#sun").classList.remove("visible")
   safe.play();
 }

 function paper(){
   document.querySelector("#getOut").classList.remove("visible")
   document.querySelector("#story6").classList.remove("visible")
   document.querySelector("#story8").classList.remove("visible")
   document.querySelector("#answer2").classList.remove("visible")
   document.querySelector("#open2").classList.remove("visible")
   document.querySelector("#quiz1").classList.add("visible")
   document.querySelector("#quiz1-1").classList.add("visible")

   document.querySelector("#mon").classList.remove("visible")
   document.querySelector("#tue").classList.remove("visible")
   document.querySelector("#wen").classList.remove("visible")
   document.querySelector("#thr").classList.remove("visible")
   document.querySelector("#fri").classList.remove("visible")
   document.querySelector("#sat").classList.remove("visible")
   document.querySelector("#sun").classList.remove("visible")
   document.querySelector("#hintOut").classList.remove("visible")

   crumple.play();
}

function open2(){
   var one=document.getElementById("answer2").value
    
    if(one==87){
      document.querySelector("#story5-3").classList.remove("visible")
      document.querySelector("#paper").classList.remove("visible")
      document.querySelector("#story5-2").classList.remove("visible")
      document.querySelector("#story5-4").classList.add("visible")
      document.querySelector("#story5-5").classList.add("visible")
      document.querySelector("#note").classList.add("visible")
      document.querySelector("#safe").classList.remove("visible")
      document.querySelector("#quiz1").classList.remove("visible")
      document.querySelector("#quiz1-1").classList.remove("visible")
      document.querySelector("#story8").classList.remove("visible")
      document.querySelector("#open2").classList.remove("visible")
      document.querySelector("#answer2").classList.remove("visible")
   }
   else{
      document.querySelector("#story5-3").classList.remove("visible")
      document.querySelector("#paper").classList.remove("visible")
      document.querySelector("#story5-2").classList.remove("visible")
      document.querySelector("#note").classList.add("visible")
      document.querySelector("#safe").classList.remove("visible")
      document.querySelector("#quiz1").classList.remove("visible")
      document.querySelector("#quiz1-1").classList.remove("visible")
      document.querySelector("#story5-1").classList.remove("visible")
      document.querySelector("#note").classList.remove("visible")
      document.querySelector("#door").classList.remove("visible")
      document.querySelector("#story8").classList.remove("visible")
      document.querySelector("#open2").classList.remove("visible")
      document.querySelector("#answer2").classList.remove("visible")

      document.querySelector("#gameOver").classList.add("visible")
      document.querySelector("#gameOverText").classList.add("visible")
      document.querySelector("#home").classList.add("visible")
      loseG.play();

   }
 }

function note(){
   document.querySelector("#story6").classList.remove("visible")
   document.querySelector("#story8").classList.remove("visible")
   document.querySelector("#answer2").classList.remove("visible")
   document.querySelector("#open2").classList.remove("visible")
   document.querySelector("#quiz2").classList.add("visible")

   document.querySelector("#mon").classList.remove("visible")
   document.querySelector("#tue").classList.remove("visible")
   document.querySelector("#wen").classList.remove("visible")
   document.querySelector("#thr").classList.remove("visible")
   document.querySelector("#fri").classList.remove("visible")
   document.querySelector("#sat").classList.remove("visible")
   document.querySelector("#sun").classList.remove("visible")
}

function sun(){
   document.querySelector("#story6").classList.remove("visible")
   document.querySelector("#story8").classList.remove("visible")
   document.querySelector("#answer2").classList.remove("visible")
   document.querySelector("#open2").classList.remove("visible")
   document.querySelector("#quiz2").classList.remove("visible")
   document.querySelector("#story5-4").classList.remove("visible")
   document.querySelector("#story5-5").classList.remove("visible")
   document.querySelector("#story5-1").classList.remove("visible")
   document.querySelector("#openedDoor").classList.add("visible")

   document.querySelector("#note").classList.remove("visible")
   document.querySelector("#door").classList.remove("visible")

   document.querySelector("#go").classList.add("visible")

   document.querySelector("#mon").classList.remove("visible")
   document.querySelector("#tue").classList.remove("visible")
   document.querySelector("#wen").classList.remove("visible")
   document.querySelector("#thr").classList.remove("visible")
   document.querySelector("#fri").classList.remove("visible")
   document.querySelector("#sat").classList.remove("visible")
   document.querySelector("#sun").classList.remove("visible")


   document.querySelector("#safe").classList.remove("visible")
   document.querySelector("#door").classList.remove("visible")
   document.querySelector("#paper").classList.remove("visible")
   document.querySelector("#story5-2").classList.remove("visible")
   document.querySelector("#story5-3").classList.remove("visible")

}

function mon(){
   document.querySelector("#story6").classList.remove("visible")
   document.querySelector("#story8").classList.remove("visible")
   document.querySelector("#answer2").classList.remove("visible")
   document.querySelector("#open2").classList.remove("visible")
   document.querySelector("#quiz2").classList.remove("visible")
   document.querySelector("#story5-4").classList.remove("visible")
   document.querySelector("#story5-5").classList.remove("visible")
   document.querySelector("#story5-1").classList.remove("visible")

   document.querySelector("#note").classList.remove("visible")
   document.querySelector("#door").classList.remove("visible")
   document.querySelector("#safe").classList.remove("visible")
   document.querySelector("#paper").classList.remove("visible")

   document.querySelector("#story5-2").classList.remove("visible")
   document.querySelector("#story5-3").classList.remove("visible")

   document.querySelector("#mon").classList.remove("visible")
   document.querySelector("#tue").classList.remove("visible")
   document.querySelector("#wen").classList.remove("visible")
   document.querySelector("#thr").classList.remove("visible")
   document.querySelector("#fri").classList.remove("visible")
   document.querySelector("#sat").classList.remove("visible")
   document.querySelector("#sun").classList.remove("visible")

   document.querySelector("#gameOver").classList.add("visible")
   document.querySelector("#gameOverText").classList.add("visible")
   document.querySelector("#home").classList.add("visible")
   loseG.play();

}

function goDoor(){
   document.querySelector("#go").classList.remove("visible")
   document.querySelector("#openedDoor").classList.remove("visible")
   document.querySelector("#hallway").classList.add("visible")

   document.querySelector("#left").classList.add("visible")
   document.querySelector("#right").classList.add("visible")
   document.querySelector("#hint").classList.add("visible")

}

function left(){
   document.querySelector("#busHint").classList.remove("visible")
   document.querySelector("#busHintq").classList.remove("visible")
   document.querySelector("#hallway").classList.remove("visible")
   document.querySelector("#left").classList.remove("visible")
   document.querySelector("#right").classList.remove("visible")
   document.querySelector("#hint").classList.remove("visible")
   document.querySelector("#dead").classList.add("visible")
   document.querySelector("#closer").classList.add("visible")
   document.querySelector("#ignore").classList.add("visible")

}

function right(){
   document.querySelector("#busHint").classList.remove("visible")
   document.querySelector("#busHintq").classList.remove("visible")
   document.querySelector("#hallway").classList.remove("visible")
   document.querySelector("#left").classList.remove("visible")
   document.querySelector("#right").classList.remove("visible")
   document.querySelector("#hint").classList.remove("visible")

   document.querySelector("#gameOver").classList.add("visible")
   document.querySelector("#gameOverText").classList.add("visible")
   document.querySelector("#home").classList.add("visible")
   loseG.play();

}

function closer(){

   document.querySelector("#dead").classList.remove("visible")
   document.querySelector("#closer").classList.remove("visible")
   document.querySelector("#ignore").classList.remove("visible")

   document.querySelector("#gameOverZombi").classList.add("visible")
   document.querySelector("#gameOverText").classList.add("visible")
   document.querySelector("#home").classList.add("visible")
   loseG.play();

}

function ignore(){
   document.querySelector("#dead").classList.remove("visible")
   document.querySelector("#closer").classList.remove("visible")
   document.querySelector("#ignore").classList.remove("visible")

   document.querySelector("#red").classList.add("visible")
   document.querySelector("#blue").classList.add("visible")
   document.querySelector("#green").classList.add("visible")

   document.querySelector("#redB").classList.add("visible")
   document.querySelector("#blueB").classList.add("visible")
   document.querySelector("#greenB").classList.add("visible")
}



function hint(){
   document.querySelector("#busHint").classList.toggle("visible")
   document.querySelector("#busHintq").classList.toggle("visible")
   document.querySelector("#hallway").classList.toggle("visible")

}
function red(){
   document.querySelector("#red").classList.remove("visible")
   document.querySelector("#blue").classList.remove("visible")
   document.querySelector("#green").classList.remove("visible")
   document.querySelector("#redB").classList.remove("visible")
   document.querySelector("#blueB").classList.remove("visible")
   document.querySelector("#greenB").classList.remove("visible")

   document.querySelector("#welcome").classList.add("visible")
   document.querySelector("#nextB").classList.add("visible")
   
}

function blue(){
   document.querySelector("#red").classList.remove("visible")
   document.querySelector("#blue").classList.remove("visible")
   document.querySelector("#green").classList.remove("visible")
   document.querySelector("#redB").classList.remove("visible")
   document.querySelector("#blueB").classList.remove("visible")
   document.querySelector("#greenB").classList.remove("visible")

   document.querySelector("#gameOverBlue").classList.add("visible")
   document.querySelector("#gameOverText").classList.add("visible")
   document.querySelector("#home").classList.add("visible")
   loseG.play();

}
function green(){
   document.querySelector("#red").classList.remove("visible")
   document.querySelector("#blue").classList.remove("visible")
   document.querySelector("#green").classList.remove("visible")
   document.querySelector("#redB").classList.remove("visible")
   document.querySelector("#blueB").classList.remove("visible")
   document.querySelector("#greenB").classList.remove("visible")

   document.querySelector("#gameOverGreen").classList.add("visible")
   document.querySelector("#gameOverText").classList.add("visible")
   document.querySelector("#home").classList.add("visible")
   loseG.play();

}
function nextB(){
   document.querySelector("#welcome").classList.remove("visible")
   document.querySelector("#nextB").classList.remove("visible")

   document.querySelector("#lastDoor").classList.add("visible")
   document.querySelector("#out1").classList.add("visible")
   document.querySelector("#in1").classList.add("visible")
}

function out1(){
   document.querySelector("#lastDoor").classList.remove("visible")
   document.querySelector("#out1").classList.remove("visible")
   document.querySelector("#in1").classList.remove("visible")

   document.querySelector("#happyE").classList.add("visible")
   document.querySelector("#again").classList.add("visible")
   winG.play();
}

function in1(){
   document.querySelector("#lastDoor").classList.remove("visible")
   document.querySelector("#out1").classList.remove("visible")
   document.querySelector("#in1").classList.remove("visible")

   document.querySelector("#badE").classList.add("visible")
   document.querySelector("#gameOverText2").classList.add("visible")
   document.querySelector("#home").classList.add("visible")
   loseG.play();

}
function again(){
   document.querySelector("#win").classList.remove("visible")
   document.querySelector("#again").classList.remove("visible")
   document.querySelector(".start").classList.remove("invisible")
   document.querySelector("#storyOne").classList.remove("invisible")
   document.querySelector("#happyE").classList.remove("visible")
  
}

function home(){
   document.querySelector("#gameOver").classList.remove("visible")
   document.querySelector("#gameOverText").classList.remove("visible")
   document.querySelector("#gameOverText2").classList.remove("visible")
   document.querySelector("#home").classList.remove("visible")
   document.querySelector(".start").classList.remove("invisible")
   document.querySelector("#storyOne").classList.remove("invisible")
   document.querySelector("#gameOverZombi").classList.remove("visible")
   document.querySelector("#gameOverGreen").classList.remove("visible")
   document.querySelector("#gameOverBlue").classList.remove("visible")
   document.querySelector("#badE").classList.remove("visible")

}
 