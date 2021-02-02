let result =0;
let inputOne=0;
let inputTwo=0;
let intOne=0;
let intTwo=0;

function add(){
    document.getElementById("print").innerHTML = "";
    inputOne=document.getElementById("input1").value
    inputTwo=document.getElementById("input2").value
    intOne= parseInt(inputOne);
    intTwo= parseInt(inputTwo);
    result = intOne + intTwo;
    var thediv= document.getElementById("print");
    thediv.innerHTML=result;
}

function sub(){
    document.getElementById("print").innerHTML = "";
    inputOne=document.getElementById("input1").value
    inputTwo=document.getElementById("input2").value
    intOne= parseInt(inputOne);
    intTwo= parseInt(inputTwo);
    result = intOne - intTwo;
    var thediv= document.getElementById("print");
    thediv.innerHTML=result;
}

function mul(){
    document.getElementById("print").innerHTML = "";
    inputOne=document.getElementById("input1").value
    inputTwo=document.getElementById("input2").value
    intOne= parseInt(inputOne);
    intTwo= parseInt(inputTwo);
    result = intOne * intTwo;
    var thediv= document.getElementById("print");
    thediv.innerHTML=result;
}

function divide(){
    document.getElementById("print").innerHTML = "";
    inputOne=document.getElementById("input1").value
    inputTwo=document.getElementById("input2").value
    intOne= parseInt(inputOne);
    intTwo= parseInt(inputTwo);
    result = intOne / intTwo;
    let quotient = parseInt(result);
    let remind = intOne % intTwo;
    var thediv= document.getElementById("print");
    thediv.innerHTML=result+" or Q: "+quotient+" R: "+remind;
}





