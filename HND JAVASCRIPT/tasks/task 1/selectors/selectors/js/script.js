function changeText() {
    document.getElementById("output").innerHTML = "<h2> Hello I'm the New Text </h2>";
}

function changeTextColor () {
    let txtOutput = document.getElementById("output")
    txtOutput.style.color = "blue";
}

function changeMultiple() {
    let multOutput = document.getElementById("output")
    multOutput.style.cssText = `font-size:50px;
                                color:orange;
                                border:6px dashed green;
                                padding:2rem;`;
}

function selectAll() {
    let list = document.querySelectorAll("p")

    for (let i = 0; i <list.length; i++) {
        list[i].style.color = "#4CC9E3";
        list[i].style.border = "6px dashed green"
    }
}

function changeFirst() {
    let currentElement = document.querySelector("p")
    currentElement.style.cssText = `font-size:3rem;
                                    color:#5a97dc;`;
}

function changeByClass() {
    let currentElements = document.querySelectorAll(".changeCurrent");
    for (let i = 0; i <currentElements.length; i++) {
        currentElements[i].style.cssText = `font-size:3rem;
                                            color:#e7c064;`;
    }
}

function resetAll() {
    let resetOutput = document.getElementById("output");
    resetOutput.innerHTML = "New text will be inserted here";
    resetOutput.style.cssText = `margin: 0px 0 10px 0;
                                font-family: "poppins";
                                font-weight: 300;
                                font-size: 2rem;
                                color: rgb(129, 104, 47);`;
    resetOutput.style.backgroundColor = "white";
}

function changeBackgroundColor() {
    let backgroundChange = document.getElementById("dataPanel");
    backgroundChange.style.backgroundColor = "black";
}
