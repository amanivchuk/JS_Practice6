"use strict";
function Calculator(p1,p2){
    this.p1 = p1;
    this.p2 = p2;
    this.read = function () {
        p1 = Number(prompt("Enter first param",""));
        p2 = Number(prompt("Enter second param",""));
    };
    this.sum = function () {
        return Number(p1) + Number(p2);
    };
    this.mul = function () {
        return Number(p1) * Number(p2);
    };
}
var calc = new Calculator();
calc.read();
console.log("Sum - " + calc.sum());
console.log("Mul - " + calc.mul());