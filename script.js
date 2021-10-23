// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChars = lowerCaseChars.toUpperCase();
var numberChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var passStr = "";

var lowerCase;
var upperCase;
var numeric;
var special;

var passwordLength;
var fillPassword;



// Write password to the #password input
function writePassword() {


  passwordLength = window.prompt("Please choose the length of your password. (8 to 128 characters max.)");

  //ends the method if the user presses "cancel" at any point
  if(!passwordLength) {
    return;
  }
  //asks user to enter another length if the length is less than 8 
  else if (passwordLength < 8) {
    window.alert("Sorry, the password must have a minimum length of 8 characters.");
    writePassword();
  
  }
  //asks the user to enter another length if the length is more than 128
  else if(passwordLength > 128) {
    window.alert("Sorry, the password is too long. Try something between 8 and 128 characters long.");
    writePassword();
  
  }
  //continue with other prompts if the length criteria is met
  else {
    passCriteria();
  }

  //preventing user from being able to decline all of the password criterias and making them choose at least one
  if((lowerCase === false) && (upperCase === false) && (numeric === false) && (special === false)){
    window.alert("You must choose at least one of the password criterias.");
    passCriteria();
  }

  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

 




//generatePassword Function
function generatePassword() {
  
 if (lowerCase === true) {
   passStr += randLow();
 }

 if (upperCase === true) {
  passStr += randUpper();
}

if (numeric === true) {
  passStr += randNum();
}

if (special === true) {
  passStr += randSpecial();
}

//to fill in the rest of the password with set criteria
fillPassword = passwordLength - passStr.length;

for(var i = 0; i < fillPassword; i++)
{
  if (lowerCase === true) {
    passStr += randLow();
  }
  if (upperCase === true) {
   passStr += randUpper();
 }
  if (numeric === true) {
   passStr += randNum();
 }
  if (special === true) {
    passStr += randSpecial();
  } //end else if
}//end for loop

return passStr;
}

//function for password criteria
function passCriteria() {
  lowerCase = window.confirm("Would you like to include lowercase characters?");

  upperCase = window.confirm("Would you like to include uppercase characters?");

  numeric = window.confirm("Would you like to include numeric characters?");

  special = window.confirm("Would you like to include special characters?");
  
}

//functions to generate random password characters
function randLow() {
  return lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)];
}
function randUpper() {
  return upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)];
}
function randNum() {
  return numberChars[Math.floor(Math.random() * numberChars.length)];
}
function randSpecial() {
  return specialChars[Math.floor(Math.random() * specialChars.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//starting the password generator
writePassword();
