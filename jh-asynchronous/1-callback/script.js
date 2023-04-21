function pelanggan1(keterangan, callback) {
  console.log("Loading pelnaggan 1...");
  setTimeout(() => {
    callback(console.log(keterangan));
  }, 2000);
}

function pelanggan2() {
  console.log("Pelangan 2 pesen bakso dan se jeruk");
}

function pelanggan3() {
  console.log("Pelangan 3 pesen teh hangat");
}

function pelanggan4() {
  console.log("Pelangan 4 pesen teh hangat");
}

pelanggan1("Pelangan 1 pesen kopi", function () {
  pelanggan2();
  pelanggan3();
  pelanggan4();
});
// netsted
