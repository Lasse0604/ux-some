let thebutton = document.getElementById("thebutton");

thebutton.addEventListener("click", function(){
    window.location.href = "book.html";
});






document.getElementById("educationinput").onchange = function() {
    
    document.getElementById("thebutton").href = 'http://book.html/"+this.value+"/';
    
}

const buttonOne = document.getElementById("button1");
const buttonTwo = document.getElementById("button2");
const buttonThree = document.getElementById("button3");
const buttonFour = document.getElementById("button4");
const buttonFive = document.getElementById("button5");
const buttonSix = document.getElementById("button6");
const buttonSeven = document.getElementById("button7");
