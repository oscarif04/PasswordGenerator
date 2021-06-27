var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword()); //create event listener to the generate button

// Write password to the #password input
function writePassword() { //being passed to the event listener for the generate button
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  return passwordText.value = password;

}

function generatePassword() { //being passed to the writePassword function

var lengthPassword;
var length = parseInt(prompt("Please choose the length of the password (Between 8 and 128 characters long)"));

while(length < 8 || length > 128){
  alert("You must choose a length between 8 and 128");
  prompt("Please choose the length of the password (must be between 8 and 128 characters long)");
}


var lowerChoice = confirm("Would you like to include lowercase letters? (ok = yes cancel = no");
var upperChoice = confirm("Would you like to include uppercase letters? (ok = yes cancel = no)");
var numsChoice = confirm("Would you like to include numbers? (ok = yes cancel = no");
var specialCharsChoice = confirm("Would you like to include special characters? (ok = yes cancel = no");

if(lowerChoice = true){
  randomLower();
}else if(upperChoice = true){
  randomUpper();
}else if(numsChoice = true){
  randomNums();
}else if(specialCharsChoice = true){
  randomSpecialChars();
}else{
  alert("You must choose at least one of the options given.");
}


} //end of generatePassword function

function randomLower(){ //function to get a random lowercase letter
  var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function randomUpper(){ //function to get a random uppercase letter
  var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function randomNums(){ //function to get a random number
  var nums = "0123456789";
  return nums[Math.floor(Math.random() * nums.length)];
}

function randomSpecialChars(){ //function to get a random special character
  var specialChars = " !\"#$%&'()*+,-./\\:;<>=?@[]^_`{}|~";
  return specialChars[Math.floor(Math.random() * specialChars.length)];
}



console.log(typeof length);