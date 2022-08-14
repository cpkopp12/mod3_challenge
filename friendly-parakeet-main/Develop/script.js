// Assignment code here
  
  

var userInput = {
  numChar = ;
  lowerCaseChar = ;
  upperCaseChar = ;
  numericChar = ;
  specialChar = ;
}


function generatePassword() {
    
    //get parameters from user
    var length = window.prompt("Enter password length (integer [8-128])");
    var lowerCaseChar = window.confirm("Would you like to include lowercase characters? (Must select OK for atleast one of the four character types)");
    var upperCaseChar = window.confirm("Would you like to include uppercase characters? (Must select OK for atleast one of the four character types)");
    var numericChar = window.confirm("Would you like to include numeric characters? (Must select OK for atleast one of the four character types)");
    var specialChar = window.confirm("Would you like to include numeric characters? (Must select OK for atleast one of the four character types)");
    
    console.log(length);
    console.log(lowerCaseChar);
    console.log(upperCaseChar);
    console.log(numericChar);
    console.log(specialChar);
    //randomize according to user input parameters


  }



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
