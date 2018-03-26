console.info("page loaded");
var age = 24;
var name = "cristian";
var employed = true;
var weather = "rainy";

console.info("Cum e vremea?:" + weather);
console.info("numele:" + name);
console.info("varsta:" + age);
console.info("angajat:" + employed);

var x = myFunction(10,3);
function myFunction(a,b){
    return a/b;
}
function getinfo(name) {
    var msg = "Hello" + name + ", welcome at FasttrackIT";
    return msg;
}

function addApples(firstNumber, secondNumber) {
    var count = firstNumber + secondNumber;
    if (count <3){
    }
   return count -0;
}

var rezultat = addApples(2,4);

function square (number,number){
    return 10*10;
}
function myFunc(theObject) {
    theObject.make = 'ford';
}
var mycar= {make: 'dacia sport', model:'usa lunga', year: 1988};
var x,y;
x=mycar.make;
myFunc(mycar);
y=mycar.make;



