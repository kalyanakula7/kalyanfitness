function joinWithUserNameAndPassword() {
  const username = prompt("Enter your username (minimum 5 and maximum 10 characters):");
  const password = prompt("Enter your password:");

  if (username.length < 5 || username.length > 10) {
    alert("Error: Username should be between 5 and 10 characters long.");
    return;
  }

  // Here, you can add your code to process the valid username and password
  // For example, you can send the data to a server or perform further validations
  console.log("Username:", username);
  console.log("Password:", password);
  alert("Thank you for joining!");
}
