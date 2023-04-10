console.log(document.title);

document.title = "Belajar DOM";
console.log("Rubah Title menjadi: ", document.title);

let body = document.body;

const welcome = document.createElement("h1");
welcome.textContent =
  "<marquee>Ini adalah tag h1 menggunakan JavaScript</marquee>";

const myName = document.createElement("h4");
myName.innerHTML = "<marquee>JON HERI SOFT</marquee>";

const keterangan = document.createElement("p");
keterangan.innerText =
  "<marquee>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perferendis optio eaque velit id ipsa possimus? Aliquid est sint doloremque, velit maiores cumque recusandae quis nihil quibusdam aspernatur perferendis magnam</marquee>";

body.append("Hello Worl", welcome, myName, keterangan);
// body.append(welcome);
// body.append(myName);
// body.append(keterangan);
