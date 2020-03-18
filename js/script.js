let thebutton = document.getElementById("thebutton");

thebutton.addEventListener("click", function(){
    window.location.href = "book.html";
});






document.getElementById("educationinput").onchange = function() {
    
    document.getElementById("thebutton").href = 'http://book.html/"+this.value+"/';
    
}


