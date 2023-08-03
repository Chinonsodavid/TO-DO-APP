let button = document.getElementById("button");
let ul = document.getElementById("listcontainer");
let inputs = document.getElementById("input");
const reset = document.getElementById("reset")
var count = 0;
function hehe() {

    var lis = document.createElement("li");
    lis.innerHTML = inputs.value;
    ul.appendChild(lis);
    let span = document.createElement("span")
    span.innerHTML = "\u00d7"
    lis.appendChild(span)

    inputs.value = "";
}
function clickfunc() {
    /*
    IMPLEMENTATION TO DO NOTHING WHEN FIELD IS EMPTY AND USER CLICKS ON ADD*/

    if (inputs.value.length < 45 && count < 30) {
        if (inputs.value.length != 0) {
            hehe();
            count++
        }
    }

    else {
        alert("Problem? Add a valid Todo Or Character is more than 45");
    }
}


function keypressfunction(e) {
    if (e.keyCode == 13 && count < 30) {
        count++    
        if (inputs.value.length == 0 ) {
       
        } else if (inputs.value.length > 45) {
            alert("Problem? Add a valid Todo Or Character is more than 45");
        } else {
            hehe();
        }
    }
}


function ulfunction(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
       
    }
}

reset.addEventListener("click", function () {
    ul.textContent = ""
    inputs.value = "";
    count = 0
})

ul.addEventListener("click", ulfunction, false);
button.addEventListener("click", clickfunc)
inputs.addEventListener("keypress", keypressfunction)
