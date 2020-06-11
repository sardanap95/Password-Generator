
window.onload = alert("Welcome! Please click 'Generate password' to start!");

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Set static variables
  
var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcUpperArr = abcUpper.split("");
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var abcLowerArr = abcLower.split("");
var num = "0123456789";
var numArr = num.split("");
var sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var symArr = sym.split("");

// Write password to the #password input

function generatePass(){
  var allChars = [];
  var resultPass = "";

  var Totlength = prompt("How many characters would you like your password to be?");

    if(Totlength <8 || Totlength > 128){
        alert("It is recommended to have a password between 8 and 128 characters long!\nPlease start over.");

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

// Confirm the rest of character conditions
    
else{
  if(confirm("Would you like your password to contain upper case letters?")){
      Array.prototype.push.apply(allChars, abcUpperArr);
  }

  if(confirm("Would you like your password to contain lower case letters?")){
      Array.prototype.push.apply(allChars, abcLowerArr);
  }

  if(confirm("Would you like your password to contain numbers?")){
      Array.prototype.push.apply(allChars, numArr);
  }

  if(confirm("Would you like your password to contain symbols?")){
      Array.prototype.push.apply(allChars, symArr);
  }

  if(allChars.length===0){
      alert("You must select at lease 1 type of characters to generate a password!\nPlease start over.");
  }

// Run for loop to use confirmed information and generate password as a result

  else{
      for(var i=0; i<Totlength; i++){
          var random = Math.floor(Math.random()*allChars.length);
          resultPass += allChars[random];
      }
  }
  }

// Display the result

  document.getElementById("password").innerHTML = resultPass;
}

// Bonus! function to copy password to clipboard

function copyPass(){

document.querySelector("textarea").select();
document.execCommand("Copy");
alert("Password copied to clipboard!");
}

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);