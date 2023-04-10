// Contoh ata array
const array1 = ["bantal", "jon", "heri", "tata", "meja"];
console.log("Data array1:", array1);
// End Contoh data array

// Mencari data di data array
const kata1 = "jon";
const cariKata1 = array1.includes(kata1);
if (cariKata1) {
  const kata1IndexKe = array1.indexOf(kata1);
  console.log(`Kata yg dicari:`, `${kata1}.`);
  console.log(`Kata '${kata1}' dalam array1 ADA.`);

  const indexSebelumIndexKata1 = kata1IndexKe - 1;
  const indexSesudahIndexKata1 = kata1IndexKe + 1;
  let valueSebelumKata1 = "";
  let valueSesudahKata2 = "";
  if (array1[indexSebelumIndexKata1]) {
    valueSebelumKata1 =
      " ada di sesudah kata '" + array1[indexSebelumIndexKata1] + "'";
  } else {
    valueSebelumKata1 = "";
  }
  if (array1[indexSesudahIndexKata1]) {
    valueSesudahKata2 =
      " ada di sebelum kata '" + array1[indexSesudahIndexKata1] + "'";
  } else {
    valueSesudahKata2 = "";
  }
  console.log(
    `kata '${kata1}' ada di index ke:${kata1IndexKe}. Dimana kata '${kata1}' ${valueSebelumKata1} ${valueSesudahKata2}.`
  );
} else {
  console.log(`Cari kata '${kata1}': ${kata1}`);
  console.log(`Kata '${kata1}' dalam array1 TIDAK DITEMUKAN.`);
}

const kata2 = "meja";
const cariKata2 = array1.includes(kata2);
if (cariKata2) {
  const kata2IndexKe = array1.indexOf(kata2);
  console.log(`Kata yg dicari:`, `${kata2}.`);
  console.log(`Kata '${kata2}' dalam array1 ADA.`);

  let indexSebelumIndexKata2 = kata2IndexKe - 1;
  let indexSesudahIndexKata2 = kata2IndexKe + 1;
  let valueSebelumKata2 = "";
  let valueSesudahKata2 = "";
  if (array1[indexSebelumIndexKata2]) {
    valueSebelumKata2 =
      " ada di sesudah kata '" + array1[indexSebelumIndexKata2] + "'";
  } else {
    valueSebelumKata2 = "";
  }
  if (array1[indexSesudahIndexKata2]) {
    valueSesudahKata2 =
      "ada di sebelum kata'" + array1[indexSesudahIndexKata2] + "'";
  } else {
    valueSesudahKata2 = "";
  }
  console.log(
    `kata '${kata2}' ada di index ke: ${kata2IndexKe}. Dimana kata '${kata2}' ${valueSebelumKata2} ${valueSesudahKata2}`
  );
} else {
  console.log(`Cari kata '${kata2}':${kata2}`);
  console.log(`Kata '${kata2}' dalam array2 TIDAK DITEMUKAN.`);
}
// End Mencari data di data array

// Mencari data di data array, di index tertentu
const dataDiIndexAwal = array1.shift();
const dataDiIndexAkhir = array1.pop();
console.log(`Data awal di array1: ${dataDiIndexAwal}`);
console.log(`Data akhir di array1: ${dataDiIndexAkhir}`);
// End Mencari data di data array, di index tertentu
