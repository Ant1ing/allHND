let outputImageTea = "images/tea2.png";
let newoutputImageCoffee = "images/coffee1.jpg";

function selectDrink(drink) {

    switch(drink) {

        case "Tea":
            let imageTea = document.getElementById("imgDisplay");
            imageTea.innerHTML = "<img src=" + outputImageTea + "/>";
            break;
        case "Coffee":
            let imageCoffee = document.getElementById("imgDisplay");
            imageCoffee.innerHTML = "<img src=" + newoutputImageCoffee + " />";
            break;
        case "Earl Grey":
            let imageEarlGrey = document.getElementById("imgDisplay");
            imageEarlGrey.innerHTML = "<img src" + outputImageTea + "/>";
            break;
        default:
            return "Didnt Chose A Drink"
    }

    let method = document.getElementById('selection2').value;
    let sugar = document.getElementById('sugar').value;
    let milk = document.getElementById('milk').value;

    let drinkDetails = document.getElementById("drinkDetails");
    drinkDetails.innerHTML = `youve chosen ${drink} with ${sugar} sugar & ${milk}% milk and you have chose to ${method}`;
    document.getElementById("myform").reset();
}



