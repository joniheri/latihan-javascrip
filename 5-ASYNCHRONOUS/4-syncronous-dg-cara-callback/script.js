const token = ~~[Math.random() * 12345];
const pictures = ["1.jpg", "2.jpg", "3.jpg"];

// Cara yg benar.
// asyncronous dengan cara callback
function login(username, callback) {
  console.log(`Wait, Processing token...`);
  setTimeout(() => {
    callback({ token, username });
  }, 1000);
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

login("jonheri", function (responseData) {
  console.log("Get token SUCCESS, token here:", responseData);
  const { token, username } = responseData;

  const apiKey = getUser(token);
  console.log(`Api Key`, apiKey);

  const getPicture = getPictures(apiKey);
  console.log(getPicture);
});
// End Cara yg benar.

// Cara diatas bisa jg disebut cara syncronous nested callback
