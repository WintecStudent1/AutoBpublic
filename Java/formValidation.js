function validateForm() {
  //getting all the variables
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let phonenumber = document.getElementById("phoneno").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("desc").value;

  //will tell the user to input data in to all fields
  //if one of the fields are missing
  if (firstname == "" || lastname == "" || phonenumber == "" || email == "" || message == "") {
    alert("Fill in all the Fields");
    return false;
  }

  //ensures that a number is entered in the phone number
  if (!isNaN(phonenumber)) {
  }
  else {
    alert("That isn't a phone number silly!")
    return false;
  }

  //ensure that a number is not put into the first name catergory
  if (!isNaN(firstname)) {
    alert("A number cannot be your first name")
    return false;
  }

  //ensures that a number is not put into the last name category
  if (!isNaN(lastname)) {
    alert("A number cannot be you last name")
    return false;
  }

  alert("message Sumbitted to Auto: B");
  return true;
}