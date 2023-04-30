const array1 = ["jon", "heri", "tita", "robert", "wandi"];
const array2 = ["mangga", "pepaya", "melon"];
const array3 = [
  {
    fullname: "Jon Heri",
    gender: "male",
    age: 33,
  },
  {
    fullname: "Adam Pratama",
    gender: "male",
    age: 20,
  },
  {
    fullname: "Tita O",
    gender: "female",
    age: 32,
  },
  {
    fullname: "Wandi",
    gender: "male",
    age: 29,
  },
];

const mergeArray1 = array1.concat(array2);
const mergeArray2 = array2.concat(array1);

console.log(`Merge array1:`, mergeArray1);
console.log(`Merge array2:`, mergeArray2);
console.log(`Merge array1:${mergeArray1}`);
console.log(`Merge array2:${mergeArray2}`);

for (let i = 0; i < mergeArray1.length; i++) {
  console.log("For mergeArray1:", i + ":" + array1[i]);
}

for (let i = 0; i < mergeArray2.length; i++) {
  console.log("For mergeArray2:", i + ":" + array2[i]);
}

mergeArray1.map((item, index) => {
  console.log("Map mergeArray1:", index + ":" + item);
});

mergeArray2.map((item, index) => {
  console.log("Map mergeArray2:", index + ":" + item);
});

array3.map((item, index) => {
  console.log("Map array3", item);
});

array3
  .sort((a, b) => a.age - b.age)
  .map((item, index) => {
    console.log(
      "Map & Urutkan data array3 berdasarkan umur dari kecil ke besar",
      item
    );
  });

array3
  .sort((a, b) => b.age - a.age)
  .map((item, index) => {
    console.log(
      "Map & Urutkan data array3 berdasarkan umur dari besar ke kecil",
      item
    );
  });

array3
  .filter((x) => x.age > 30)
  .map((item, index) => {
    console.log("Map & filter data array3 dari umur diatas 30", item);
  });

array3
  .sort((a, b) => a.age - b.age)
  .filter((x) => x.age >= 30)
  .map((item, index) => {
    console.log(
      "Mapping, urutkan data array3 berdasarkan umur dari besar ke kecil serta filter data array yang hanya umur dari 30 keatas ",
      item
    );
  });

array3
  .sort((a, b) => {
    if (a.fullname.toLowerCase() < b.fullname.toLowerCase()) {
      return -1;
    } else if (a.fullname.toLowerCase() > b.fullname.toLowerCase()) {
      return 1;
    }
  })
  .map((item, index) => {
    console.log(
      "Urutkan berdasarkan Fullname: ",
      `${index + 1} ${item.fullname}`
    );
  });

console.table(array3);
