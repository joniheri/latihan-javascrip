function pelanggan1(keterangan) {
  console.log(keterangan);
}

function pelanggan2() {
  console.log("Pelangan 2 pesen bakso dan se jeruk");
}

function pelanggan3(text) {
  return new Promise((success) => {
    console.log("Loading pelanggan 2...");
    setTimeout(() => {
      success(console.log(text));
    }, 2000);
  });
}

function pelanggan4() {
  console.log("Pelangan 4 pesen teh hangat");
}

pelanggan1("Pelangan 1 pesen kopi");
pelanggan2();
pelanggan3("Pelangan 3 pesen teh hangat").then(function () {
  pelanggan4();
});
// netsted
