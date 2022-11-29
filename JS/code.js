// Math
// console.log("sqrt(): ",Math.sqrt(36));

// returns size of array
// let data = [9, 3, 1, "Peter", 5, 10];
// let size = data.length -1;
// displays size of array
// console.log("Array size:", size);
// get middle number/item
// // even number
// let middleIndex = Math.trunc((data.length -1)/2);
// console.log("middleIndex:", data.slice
// (middleIndex  , middleIndex + 2 ));

// odd number
// let middleIndex = Math.trunc((data.length -1)/2);
// if(data.length % 2 == 0) {
//     console.log(data.slice (middleIndex,
//         middleIndex + 2));
//     }else{
//         console.log(data[middleIndex]);
//     }

// let data = [9, 3, 1, "Peter", 5, 10];
// data.splice(3,1);
// console.log("Max:", Math.max(...data));

// let myDate = new Date();
// document.write("My date:",
// myDate.toLocaleDateString());

// // Homework
// let myDate = new Date();
// let currentDate = myDate.getDate();
// console.log("setDate(): ", new Date(myDate.setDate(currentDate + 5)))

// if statement
// let age = 17;
// if(age >= 17) {
//     console.log("You're qualified");
// }else {
//     console.log("You're not qualified");
// }

// // nested if statement (dont use this)
// let age = 18;
// let salary = 5000;
// if(age > 17) {
//     if(salary >= 5000){
//         console.log("You'er lucky");
//     }
// }else {
//     console.log("Die");
// }

// Use this
// if((age > 17) && (salary >= 5000)){
//     console.log("Well done");
// }else{
//     console.log("Pushin p")
// }

// switch statement
// let monthInt = 1;
// switch (monthInt) {
//   case 1:
//     console.log("January");
//     break;
//   case 2:
//     console.log("February");
//     break;
// }

let grade = 48;
switch(true) {
    case grade == 100:
        console.log("You're awesome")
    break;
    case (grade >= 90) && (grade <= 99):
        console.log("well done");
    break;
    case (grade >= 75) && (grade <= 89):
        console.log("distinction");
    break;
    case (grade >= 50) && (grade <= 74):
        console.log("pass");
     case (grade <= 49):
        console.log("sorry man");
    break;
    default:
        console.log("Out of range")
}