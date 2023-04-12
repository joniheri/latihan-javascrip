const token = ~~[Math.random() * 12345];
const pictures = ["1.jpg", "2.jpg", "3.jpg"];

// Cara yg benar.
// asyncronous dengan cara callback
function login(username, callback) {
  console.log(`Wait, Processing get token...`);
  setTimeout(() => {
    callback({ token, username });
  }, 1000);
}
function getUser(token, callback) {
  console.log(`Wait, Processing get API Key...`);
  if (token) {
    setTimeout(() => {
      callback({ apiKey: "JonHeri123" });
    }, 1000);
  }
}
function getPictures(apiKey) {
  if (apiKey) {
    return pictures;
  }
}

login("jonheri", function (response) {
  console.log("Get token SUCCESS, data here:", response);
  const { token, username } = response;

  getUser(token, function (response) {
    const { apiKey } = response;
    console.log(`Api Key`, apiKey);

    const getPicture = getPictures(apiKey);
    console.log(getPicture);
  });
});
// End Cara yg benar.

// Cara diatas bisa jg disebut cara syncronous nested callback
