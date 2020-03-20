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