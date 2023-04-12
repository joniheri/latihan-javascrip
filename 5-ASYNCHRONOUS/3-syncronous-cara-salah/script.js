const token = ~~[Math.random() * 12345];
const pictures = ["1.jpg", "2.jpg", "3.jpg"];

// Cara yg salah.
// Karna ini asyncronous, dan karna ada functionyg dikasih jeda, makanya hasilnya error
function login(username) {
  setTimeout(() => {
    return { token, username };
  }, 2000);
}
function getUser(token) {
  if (token) {
    return { apiKey: "JonHeri123" };
  }
}
function getPictures(apiKey) {
  if (apiKey) {
    return pictures;
  }
}
const user = login("jonheri");
console.log(`User Token:`, user);

const apiKey = getUser(user.token);
console.log(`Api Key`, apiKey);

const getPicture = getPictures(apiKey);
console.log(getPicture);
// End Cara yg salah.
