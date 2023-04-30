// cara1 -> function standar
function sum2(x, y) {
  console.log(`Function standar, ${x} + ${y}:`, x + y);
}
sum2(2, 5);

// cara2 -> function basic
const sumBasic1 = new Function(
  "console.log(`Function basic part1, 9 + 4:`, 9+4)"
);
sumBasic1();
const sumBasic2 = new Function(
  "x",
  "y",
  "console.log(`Function basic part2, ${x} + ${y}:`, x + y)"
);
sumBasic2(9, 4);

// cara -> arrow function
const sum3 = (x, y) => {
  console.log(`Arrow function, ${x} + ${y}:`, x + y);
};
sum3(4, 4);
