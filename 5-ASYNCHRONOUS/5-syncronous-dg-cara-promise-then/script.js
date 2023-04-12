const token = ~~[Math.random() * 12345];
const pictures = ["1.jpg", "2.jpg", "3.jpg"];
// console.log(token);

// Cara yg benar.
// asyncronous dengan cara promise then
function login(username) {
  console.log(`Wait, Processing get token...`);
  return new Promise((success, fail) => {
    setTimeout(() => {
      if (username != "jonheri") {
        fail("Sorry, username FAIL or NOT FOUND.");
      } else {
        success({ token }); //harus dijadiin object
      }
    }, 1000);
  });
}

function getUser(token) {
  console.log(`Wait, Processing get API Key...`);
  return new Promise((success, fail) => {
    if (!token) {
      fail("Sorry, token FAIL or NOT FOUND.");
    }
    setTimeout(() => {
      success({ apiKey: "JonHeri123" }); //harus dijadiin object
    }, 1000);
  });
}

function getPictures(apiKey) {
  console.log(`Wait, Processing get Pictures...`);
  return new Promise((success, fail) => {
    if (!apiKey) {
      fail("Get pictures FAIL");
    }
    setTimeout(() => {
      success({ pictures });
    }, 1500);
  });
}

const user = login("jonheri");
user
  .then(function (response) {
    console.log(`Get token SUCCESS, token here:`, response);
    const { token } = response;

    getUser(token)
      .then(function (response) {
        const { apiKey } = response;
        console.log(`Get API Key SUCCESS. API Key:`, apiKey);

        getPictures(apiKey)
          .then(function (response) {
            const { pictures } = response;
            console.log(`Get pictures SUCCESS. pictures:`, response);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });
// End Cara yg benar.

// Cara diatas bisa jg disebut cara syncronous nested promise then
