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



let classByCategory = {
    A: ["E19-a", "E19-b", "E19-c", "E19-e", "E19-x"],
    B: ["No options"],
}

    function changecat(value) {
        if (value.length == 0) document.getElementById("category").innerHTML = "<option></option>";
        else {
            let catOptions = "";
            for (categoryId in classByCategory[value]) {
                catOptions += "<option>" + classByCategory[value][categoryId] + "</option>";
            }
            document.getElementById("category").innerHTML = catOptions;
        }
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

function scrollUpFunction(){
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







