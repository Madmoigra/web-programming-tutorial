console.info("page loaded");
var age = 24;
var name = "cristian";
var employed = true;
var location = "cluj-napoca";

console.info("Locatia unde locuiesti:" + location);
console.info("numele:" + name);
console.info("varsta:" + age);
console.info("angajat:" + employed);

function getinfo(name) {
    var msg = "Hello" + name + ", welcome at FasttrackIT";
    return msg;
}

function addApples(firstNumber, secondNumber) {
    var count = firstNumber + secondNumber;
}

var rezultat = addApples(4, 6);

console.info(rezultat);