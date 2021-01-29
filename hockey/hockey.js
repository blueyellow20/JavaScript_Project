
var homescore=0;
function add() {
    
   homescore++;
  
   document.getElementById("homes").innerHTML = homescore
}

var guestscore=0;
function addg() {
    
   guestscore++;
  
   document.getElementById("guests").innerHTML = guestscore
}



function sub() {
 
    homescore--
    if(homescore<0)
        homescore=0;
    
    document.getElementById("homes").innerHTML = homescore
 }

 function subg() {
  
    guestscore--
    if(guestscore<0)
        guestscore=0;
    
    document.getElementById("guests").innerHTML = guestscore
 }


function player(){



     var thediv= document.getElementById("pa");
    var one=document.getElementById("players").value

     thediv.innerHTML+=one+"<br>";

     
    // var list = document.createElement("td"); 
    // var one=document.getElementById("players").value
    // list.innerHTML = one 
    // document.body.appendChild(list);
    
     
}


function guestp(){

    var thediv= document.getElementById("hp");
    var one=document.getElementById("newg").value

    thediv.innerHTML+=one+"<br>";

}



var period=1;
function Padd() {
    
   period++;
  
   document.getElementById("period").innerHTML = period
}


function Psub() {
  
    period--
    if(period<0)
        period=0;
    
    document.getElementById("period").innerHTML = period
 }


 var shoth=0;
function addsh() {
    
    shoth++;
  
   document.getElementById("shoth").innerHTML = shoth
}


function subsh() {
  
    shoth--
    if(shoth<0)
    shoth=0;
    
    document.getElementById("shoth").innerHTML = shoth
 }


 var shotg=0;
 function addsg() {
     
    shotg++;
   
    document.getElementById("shotg").innerHTML = shotg
 }
 
 
 function subsg() {
   
    shotg--
     if(shotg<0)
     shotg=0;
     
     document.getElementById("shotg").innerHTML = shotg
  }

 function clearScore(){
    homescore=0;
    guestscore=0;
    document.getElementById("homes").innerHTML = homescore
    document.getElementById("guests").innerHTML = homescore
    shoth=0;
    shotg=0;
    period=0;
    document.getElementById("shotg").innerHTML = shotg
    document.getElementById("shoth").innerHTML = shoth
    document.getElementById("period").innerHTML = period
    document.getElementById("pa").innerHTML = "";
    document.getElementById("hp").innerHTML = "";


}

function clearshot(){

    if(shoth>shotg)
    {
        homescore++;
  
        document.getElementById("homes").innerHTML = homescore
     }
     if(shoth<shotg)
     {
        guestscore++;
  
   document.getElementById("guests").innerHTML = guestscore
    }
    
    shoth=0;
    shotg=0;
    document.getElementById("shotg").innerHTML = shotg
    document.getElementById("shoth").innerHTML = shoth
    period++;
  
   document.getElementById("period").innerHTML = period
   document.getElementById("pa").innerHTML = "";
   document.getElementById("hp").innerHTML = "";



}

function clearhomep(){
   document.getElementById("pa").innerHTML = "";
}

function clearguestp(){
   document.getElementById("hp").innerHTML = "";

}