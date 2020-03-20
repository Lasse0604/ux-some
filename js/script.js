let buttonOne = document.getElementById("button1");
let buttonTwo = document.getElementById("button2");
let buttonThree = document.getElementById("button3");
let buttonFour = document.getElementById("button4");
let buttonFive = document.getElementById("button5");
let buttonSix = document.getElementById("button6");
let buttonSeven = document.getElementById("button7");

let scheduleOne = document.getElementById("schedule1");
let scheduleTwo = document.getElementById("schedule2");
let scheduleThree = document.getElementById("schedule3");
let scheduleFour = document.getElementById("schedule4");
let scheduleFive = document.getElementById("schedule5");
let scheduleSix = document.getElementById("schedule6");
let scheduleSeven = document.getElementById("schedule7");

buttonOne.addEventListener("click", changeBackgroundColorOne);

function changeBackgroundColorOne() {
    scheduleOne.style.backgroundColor = "#C5393E";
    scheduleOne.style.color = "white";
};

buttonTwo.addEventListener("click", changeBackgroundColorTwo);

function changeBackgroundColorTwo() {
    scheduleTwo.style.backgroundColor = "#C5393E";
    scheduleTwo.style.color = "white";
};

buttonThree.addEventListener("click", changeBackgroundColorThree);

function changeBackgroundColorThree() {
    scheduleThree.style.backgroundColor = "#C5393E";
    scheduleThree.style.color = "white";
};

buttonFour.addEventListener("click", changeBackgroundColorFour);

function changeBackgroundColorFour() {
    scheduleFour.style.backgroundColor = "#C5393E";
    scheduleFour.style.color = "white";
};

buttonFive.addEventListener("click", changeBackgroundColorFive);

function changeBackgroundColorFive() {
    scheduleFive.style.backgroundColor = "#C5393E";
    scheduleFive.style.color = "white";
};

buttonSix.addEventListener("click", changeBackgroundColorSix);

function changeBackgroundColorSix() {
    scheduleSix.style.backgroundColor = "#C5393E";
    scheduleSix.style.color = "white";
};

buttonSeven.addEventListener("click", changeBackgroundColorSeven);

function changeBackgroundColorSeven() {
    scheduleSeven.style.backgroundColor = "#C5393E";
    scheduleSeven.style.color = "white";
};




const backToTopBtn = document.querySelector("#back-to-top-btn");
const downArrow = document.querySelector("#down-arrow");

window.addEventListener("scroll", scrollFunction);

function scrollFunction(){
    if (window.pageYOffset < 2010){
        downArrow.style.display = "block";
    }
    else{
        downArrow.style.display = "none";
    }
}

window.addEventListener("scroll", scrollUpFunction);

function scrollUpFunction() {
    if (window.pageYOffset > 2010){
        backToTopBtn.style.display = "block";
    }
    else{
        backToTopBtn.style.display = "none";
    }
}


backToTopBtn.addEventListener("click", backToTop);

function backToTop(){
    window.scroll(0, 0);
}


function backToTop(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

/*
const getVejlederElement = document.getElementById("getVejleder");

getVejlederElement.addEventListener("click",getVejleder);
*/

function getVejleder(){
    fetch('https://api.myjson.com/bins/16co6k')
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        
        let output = '';  
        data.forEach(function(answer){
            output += `
             <h3 id="vejleder">Vejleder: ${answer.vejlederA}</h3>
            `;
        })
        document.getElementById('output').innerHTML = output;
    })
}





