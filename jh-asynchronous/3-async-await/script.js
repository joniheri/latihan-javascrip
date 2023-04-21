function pelanggan1() {
  console.log("Pelanggan 1 pesan kopi");
}

function pelanggan2() {
  console.log("Loading pelanggan 2...");
  return new Promise((success, fail) => {
    setTimeout(() => {
      success(console.log("Pelanggan 2 pesen bakso dan se jeruk"));
    }, 3000);
  });
}

function pelanggan3() {
  console.log("Loading pelanggan 3...");
  return new Promise((success, fail) => {
    setTimeout(() => {
      success(console.log("Pelanggan 3 pesen teh hangat"));
    }, 2000);
  });
}

function pelanggan4() {
  console.log("Pelanggan 4 pesen teh hangat");
}

async function processPemesanan() {
  pelanggan1();
  await pelanggan2();
  await pelanggan3();
  pelanggan4();
}
processPemesanan();
// netsted
