
function start() {
    
    
    document.querySelector(".start").classList.add("invisible")
    document.querySelector("#storyOne").classList.add("invisible")
    document.querySelector("#storyTwo").classList.add("visible")
    document.querySelector("#next").classList.add("visible")

    var vid = document.getElementById("audio");
    vid.pause();
    
    
 }

 function next(){
    document.querySelector("#next").classList.remove("visible")
    document.querySelector("#storyTwo").classList.remove("visible")
    document.querySelector("#story3").classList.add("visible")
    document.querySelector("#story4").classList.add("visible")
    document.querySelector("#look").classList.add("visible")

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
 }

 function door(){
   document.querySelector("#story6").classList.add("visible")
   document.querySelector("#story8").classList.remove("visible")
   document.querySelector("#answer2").classList.remove("visible")
   document.querySelector("#open2").classList.remove("visible")
   document.querySelector("#quiz1").classList.remove("visible")
   document.querySelector("#quiz1-1").classList.remove("visible")

   document.querySelector("#mon").classList.add("visible")
   document.querySelector("#tue").classList.add("visible")
   document.querySelector("#wen").classList.add("visible")
   document.querySelector("#thr").classList.add("visible")
   document.querySelector("#fri").classList.add("visible")
   document.querySelector("#sat").classList.add("visible")
   document.querySelector("#sun").classList.add("visible")

   document.querySelector("#quiz2").classList.remove("visible")


 }

 function chest(){
   document.querySelector("#story6").classList.remove("visible")
   document.querySelector("#story8").classList.add("visible")
   document.querySelector("#answer2").classList.add("visible")
   document.querySelector("#open2").classList.add("visible")
   document.querySelector("#quiz1").classList.remove("visible")
   document.querySelector("#quiz1-1").classList.remove("visible")
 }

 function paper(){
   document.querySelector("#story6").classList.remove("visible")
   document.querySelector("#story8").classList.remove("visible")
   document.querySelector("#answer2").classList.remove("visible")
   document.querySelector("#open2").classList.remove("visible")
   document.querySelector("#quiz1").classList.add("visible")
   document.querySelector("#quiz1-1").classList.add("visible")
   
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

}

function closer(){

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
function nextB(){
   document.querySelector("#welcome").classList.remove("visible")
   document.querySelector("#nextB").classList.remove("visible")

   document.querySelector("#lastDoor").classList.add("visible")
   document.querySelector("#out1").classList.add("visible")
   document.querySelector("#in1").classList.add("visible")
}

function leave(){
   document.querySelector("#lastDoor").classList.remove("visible")
   document.querySelector("#out1").classList.remove("visible")
   document.querySelector("#in1").classList.remove("visible")

   document.querySelector("#win").classList.add("visible")
   document.querySelector("#again").classList.add("visible")
}

function again(){
   document.querySelector("#win").classList.remove("visible")
   document.querySelector("#again").classList.remove("visible")

  
}

function home(){
   document.querySelector("#gameOver").classList.remove("visible")
   document.querySelector("#gameOverText").classList.remove("visible")
   document.querySelector("#home").classList.remove("visible")
   document.querySelector(".start").classList.remove("invisible")
   document.querySelector("#storyOne").classList.remove("invisible")
}
 bgm = new Audio("bgm.mp3");
 bgm.play();

