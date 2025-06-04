const validator = require("validator");

const validateEmail = (email) => {
  if (!validator.isEmail(email)) {
    return { isValid: false, message: "Invalid email address" };
  }
  return { isValid: true };
}
// Input
const emailToValidate = "test@example.com";
// Trigger the function
const result = validateEmail(emailToValidate);
// called immediately after validating the email!
console.log("Validation Result:", result);
// separate your Validation
if (result.isValid) {
  console.log("Email is valid");
} else {
  console.log("Email is not valid");
}

const fxName = (parameter) => {
    if (!parameter) {
        console.log("this is false");
        return false;
    }
    console.log("this is true");
    return true;
}
fxName();