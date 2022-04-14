const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Password validation tool");

reader.question("Please enter a password to validate it: ", function (input) {
  let givenPassword = input;
  if (givenPassword.length < 10) {
    console.log("Sorry, please enter a password with at least 10 characters.");
  } else {
    console.log("Your password has an acceptable length.");
  }

  reader.close();
});
