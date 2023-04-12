const token = ~~[Math.random() * 12345];

function login(username) {
  return { token, username };
}

const user = login("jonheri");

console.log(user);
