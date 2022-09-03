// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     } 
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }









// for (var i=100; i>0 ;i--){
//     console.log(i);
// }










// function fibonacciGenerator(n){
//    var output = [];
//    if (n==1){
//        output = [0];
//    }
//    else if (n==2){
//        output = [1];
//    }
//    else{
//        output = [0,1];
//        output.push(output[output.length - 2] + [output.length-1]);
//        if(n== output.length){
           
//        }else{
           
//        }

//    }
//    return output;
// }











//  Higher order function 


// function add(num1, num2) {
//     return num1 + num2;
//     }
     
//     function subtract(num1, num2) {
//     return num1 - num2;
//     }
     
//     function multiply(num1, num2) {
//     return num1 * num2;
//     }
     
//     function divide(num1, num2) {
//     return num1 / num2;
//     }
     
//     function calculator(num1, num2, operator) {
//     return operator(num1, num2);
//     }






// constructor function 

function HouseKepper (yearsOfExperienece , name , cleaningRepertoire , cleaning){
    this.yearsOfExperienece = yearsOfExperienece;
    this.name= name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.cleaning= fuction(){
        alert("may i start the cleaning");
    }

}

var houseKeeper1 = new HouseKepper(9, 'tim', ["lobby" , "bedroom"]);
var houseKeeper2 = new HouseKepper(9, 'jim', ["lobby" , "bedroom"]);
var houseKeeper3 = new HouseKepper(9, 'kim', ["lobby" , "bedroom"]);
console.log(houseKeeper1.name);
console.log(houseKeeper1.cleaning);