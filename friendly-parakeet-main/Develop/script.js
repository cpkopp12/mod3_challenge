// Assignment code here
 var getNumChar = function() {
    var lenInput = window.prompt("Enter password length (integer [8-128])");
    while (lenInput < 8 || lenInput > 128) {
      window.alert("You need to enter an integer greater than or equal to 8 and less than or equal to 128! Try again.");
      lenInput = window.prompt("Enter password length (integer [8-128])");
    }
    return lenInput;
 } 

 var getCharChoices = function() {
    var charInput = {
      lowerCaseChar : window.confirm("Would you like to include lowercase characters? (Must select OK for atleast one of the four character types)"),
      upperCaseChar : window.confirm("Would you like to include uppercase characters? (Must select OK for atleast one of the four character types)"),
      numericChar : window.confirm("Would you like to include numeric characters? (Must select OK for atleast one of the four character types)"),
      specialChar : window.confirm("Would you like to include numeric characters? (Must select OK for atleast one of the four character types)")
    }
    while (charInput.lowerCaseChar == false && charInput.upperCaseChar==false && charInput.numericChar==false && charInput.specialChar==false) {
      window.alert("You must select OK for atleast one of the character types. Try again!")
      charInput.lowerCaseChar = window.confirm("Would you like to include lowercase characters? (Must select OK for atleast one of the four character types)"),
      charInput.upperCaseChar = window.confirm("Would you like to include uppercase characters? (Must select OK for atleast one of the four character types)"),
      charInput.numericChar = window.confirm("Would you like to include numeric characters? (Must select OK for atleast one of the four character types)"),
      charInput.specialChar = window.confirm("Would you like to include special characters? (Must select OK for atleast one of the four character types)")
    }
    return charInput;
 }
  


function generatePassword() {

  var userInput = {
    //numChar is just one number
    numChar : getNumChar(),
    //charChoices is an object containing a boolean variable
    //for each character type
    charChoices : getCharChoices()
  }
  console.log(userInput.numChar);
  console.log(userInput.charChoices)
    
    //get parameters from user
    //var length = window.prompt("Enter password length (integer [8-128])");
    //var lowerCaseChar = window.confirm("Would you like to include lowercase characters? (Must select OK for atleast one of the four character types)");
    //var upperCaseChar = window.confirm("Would you like to include uppercase characters? (Must select OK for atleast one of the four character types)");
    //var numericChar = window.confirm("Would you like to include numeric characters? (Must select OK for atleast one of the four character types)");
    //var specialChar = window.confirm("Would you like to include numeric characters? (Must select OK for atleast one of the four character types)");
    
    //console.log(length);
    //console.log(lowerCaseChar);
    //console.log(upperCaseChar);
    //console.log(numericChar);
    //console.log(specialChar);
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
