const array1 = [
  "jon",
  2,
  4,
  "heri",
  {
    id: 1,
    name: "tama",
  },
  {
    id: 2,
    name: "fakry",
  },
  "tita",
  "robert",
  "wandi",
  ["mangga", "pepaya", "melon"],
  {
    hoby: function () {
      console.log(
        "Ini adalah function didalam object, dimana object ini ada didalam array"
      );
    },
  },
];

console.log(`array1:`, array1);
console.log(`hobby in array1 test1:`, array1[10]);
console.log(`hobby in array1 test2:`, array1[10].hoby);
array1[10].hoby(); //ini adalah cara yg benar untuk melihat data array yand didalam array ada function
