// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChars = lowerCaseChars.toUpperCase();
var numberChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var passArr = [];

//generatePassword Function
function generatePassword() {
  var lowerCase;
  var upperCase;
  var numeric;
  var special;

  var passwordLength = window.prompt("Please choose the length of your password. (8 to 128 characters max.)");

  //first if ends the method if the user presses cancel at any point
  if(!passwordLength) {
    return;
  }
  //asks user to enter another length if the length is less than 8 
  else if (passwordLength < 8) {
    window.alert("Sorry, the password must have a minimum length of 8 characters.");
    generatePassword();
    return;
  }
  //asks the user to enter another length if the length is more than 128
  else if(passwordLength > 128) {
    window.alert("Sorry, the password is too long. Try something between 8 and 128 characters long.");
    generatePassword();
    return;
  }
  //continue with other prompts if the length criteria is met
  else {
    lowerCase = window.confirm("Would you like to include lowercase characters?");
    if(lowerCase === true) {
      
    }

    upperCase = window.confirm("Would you like to include uppercase characters?");

    numeric = window.confirm("Would you like to include numeric characters?");

    special = window.confirm("Would you like to include special characters?");

    
    return;
  }


  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//starting the password generator
// writePassword();
