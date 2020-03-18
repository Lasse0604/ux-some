let thebutton = document.getElementById("thebutton");

thebutton.addEventListener("click", function(){
    window.location.href = "book.html";
});


if(document.getElementById("educationinput").selectedIndex == multimediedesigner) {
    alert("test");
}


/*
document.getElementById("educationinput").onchange = function() {
    
    thebutton.href = 'book.html/"+this.value+"/';
    
}*/