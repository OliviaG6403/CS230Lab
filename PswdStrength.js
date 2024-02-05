// Your solution goes here 

function isStrongPassword(password) {
    // Check if the password is at least 8 characters long
    if (password.length < 8) {
      return false;
    }
  
    // Check if the password contains the string "password"
    if (password.toLowerCase().includes("password")) {
      return false;
    }
  
    // Check if the password contains at least one uppercase character
    if (!/[A-Z]/.test(password)) {
      return false;
    }
  
    // If all conditions are met, return true
    return true;
  }
  
  // Example usage:
  let password1 = "Qwerty";
  let password2 = "passwordQwerty";
  let password3 = "qwerty123";
  let password4 = "Qwerty123";
  
  console.log(isStrongPassword(password1)); 
  console.log(isStrongPassword(password2)); 
  console.log(isStrongPassword(password3)); 
  console.log(isStrongPassword(password4)); 