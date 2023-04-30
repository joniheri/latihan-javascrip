const dataBuah = [
  {
    id: 1001,
    namaBuah: "Aple",
  },
  {
    id: 1002,
    namaBuah: "Semangka",
  },
  {
    id: 1003,
    namaBuah: "Rambutan",
  },
  {
    id: 1004,
    namaBuah: "Jeruk",
  },
];
// console.log(dataBuah);

let value = 0;
let i = 0;
let domDataBuah = "";
domDataBuah += `
  <table border='1'>
    <thead>
      <tr>
        <th>ID</th>
        <th>Nama Buah</th>
      </tr>
    </thead>
    <tbody>
  `;
do {
  // console.log(dataBuah[i].id);
  // console.log(dataBuah[i].namaBuah);
  domDataBuah += `<tr>`;
  domDataBuah += `<td>${dataBuah[i].id}</td>`;
  domDataBuah += `<td>${dataBuah[i].namaBuah}</td>`;
  domDataBuah += `</tr>`;
  i++;
} while (i < dataBuah.length);
domDataBuah += `
    </tbody>
  </table>
`;
// console.log(domDataBuah);
document.getElementById("dataBuah").innerHTML = domDataBuah;
// for (let i = 0; i < 10; i++) {
//   console.log("data mulai dari :", value++);
// }
