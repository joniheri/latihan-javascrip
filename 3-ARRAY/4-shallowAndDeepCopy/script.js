const array1 = ["jon", "heri", "tita", "robert", "wandi"];
const newArray1 = [...array1]; // tanta titik 3 (...) adalah spread operator
const newArray2 = array1.slice(); // Ini hampir sama dg newArray1
const newArray3 = Array.from(array1); // Ini hampir sama dg newArray1 maupun newArray2
const newArray4 = JSON.parse(JSON.stringify(array1)); // Ini hampir sama dg newArray1

newArray1[0] = "tama";
newArray2[0] = "fakri";
newArray3[0] = "adam";
newArray4[0] = "azza";

console.log(`array1:`, array1);
console.log(`newArray1:`, newArray1);
console.log(`newArray2:`, newArray2);
console.log(`newArray3:`, newArray3);
console.log(`newArray4:`, newArray4);
