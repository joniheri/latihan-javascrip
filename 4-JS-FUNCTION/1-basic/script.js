// Basic Function
function testing1() {
  return "Hello, ini adalah function testing1";
}
console.log("Testing1 part1:", testing1);
console.log("Testing1 part2:", testing1());

// Function Level2
function testing2(data) {
  // return data;
  console.log("Testing2:", data);
}
testing2("Hello, ini adalah function testing2");

// Function Level3
function testing3(data, data2) {
  console.log("Testing3:", data + "," + data2);
}
testing3("Hello, ini adalah function testing3", "Jon Heri Soft");

// Function Level4
function testing4() {
  console.log("Testing4 argument:", arguments);
  console.log("Testing4 argument length:", arguments.length);
  console.log("Testing4 argument index0:", arguments[0]);
  console.log("Testing4 argument index1:", arguments[1]);
  for (let i = 0; i < arguments.length; i++) {
    console.log(`Testing4 argument index${i}:`, arguments[i]);
  }
}
testing4("Hello", "Jon Heri Soft");

// Function Level5
const varTesting5 = function testing5() {
  console.log("Testing5 argument:", arguments);
  console.log("Testing5 argument length:", arguments.length);
  console.log("Testing5 argument index0:", arguments[0]);
  console.log("Testing5 argument index1:", arguments[1]);
  for (let i = 0; i < arguments.length; i++) {
    console.log(`varTesting5 argument index${i}:`, arguments[i]);
  }
};
varTesting5("Hello", "Jon Heri Soft");

// Function Level6
const varTesting6 = function testing6(data1, data2) {
  console.log("Testing6 data1:", data1);
  console.log("Testing6 data2:", data2);
};
varTesting6("Hello", "Jon Heri Soft");

// Function Level7
const varTesting7 = new Function(
  "firstname",
  "lastname",
  "console.log(firstname, lastname)"
);
varTesting7("Jon", "Heri");
