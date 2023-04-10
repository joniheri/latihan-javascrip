const array1 = [
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
    fullname: "Tita Oktya",
    gender: "female",
    age: 32,
  },
  {
    fullname: "Wandi",
    gender: "male",
    age: 29,
  },
];

let dataArray1 = `
<table border="1">
  <thead>
    <tr>
      <th>No</th>
      <th>Nama Lengkap</th>
      <th>Jenis Kelamin</th>
      <th>Umur</th>
    </tr>
  </thead>
  <tbody>
`;
array1.map((item, index) => {
  dataArray1 += "<tr>";
  dataArray1 += "<td>" + (index + 1) + "</td>";
  dataArray1 += "<td>" + item.fullname + "</td>";
  dataArray1 += "<td>" + item.gender + "</td>";
  dataArray1 += "<td>" + item.age + "</td>";
  dataArray1 += "</tr>";
});
dataArray1 += `
  </tbody>
  <tfoot>
    <tr>
      <th>No</th>
      <th>Nama Lengkap</th>
      <th>Jenis Kelamin</th>
      <th>Umur</th>
    </tr>
  </tfoot>
</table>
`;

document.getElementById("dataArray1").innerHTML = dataArray1;
document.getElementById("dataArray2").innerHTML = dataArray1;
