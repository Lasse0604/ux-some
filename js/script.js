let thebutton = document.getElementById("thebutton");

thebutton.addEventListener("click", function(){
    window.location.href = "book.html";
});



//dropdown

function changeClass() {
    let selectHTML = "";

    let A = ["E19-a", "E19-b", "E19-c", "E19-e", "E19-x"];
    let B = ["Under construction"];

    if (document.getElementById("educationinput").value == "multimediedesigner") {
        let select = document.getElementById('classname').options.length;

        for (let i = 0; i < select; i++) {
            document.getElementById('classname').options.remove(i);
        }

        for (let i = 0; i < A.length; i++) {
            let newSelect = document.createElement('option');
            selectHTML = "<option value='" + A[i] + "'>" + A[i] + "</option>";
            newSelect.innerHTML = selectHTML;
            document.getElementById('classname').add(newSelect);
        }
    }

    else if (document.getElementById("educationinput").value == "default") {
        let select = document.getElementById('classname').options.length;

        for (let i = 0; i < select; i++) {
            document.getElementById('classname').options.remove(i);
        }

        for (let i = 0; i < B.length; i++) {
            let newSelect = document.createElement('option');
            selectHTML = "<option value='" + B[i] + "'>" + B[i] + "</option>";
            newSelect.innerHTML = selectHTML;
            document.getElementById('category').add(newSelect);
        }
    }

}
    
}

const buttonOne = document.getElementById("button1");
const buttonTwo = document.getElementById("button2");
const buttonThree = document.getElementById("button3");
const buttonFour = document.getElementById("button4");
const buttonFive = document.getElementById("button5");
const buttonSix = document.getElementById("button6");
const buttonSeven = document.getElementById("button7");
