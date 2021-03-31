export default function validateInfo(values) {
  let errors = {};

  
  if (!values.firstname) {
    errors.firstname = "Firstname required";
  }
  else if (values.firstname.trim().length < 5) {
    errors.firstname = "First name is too short";
  }
  else if (values.firstname.trim().length > 10) {
    errors.firstname = "First name is too long";
  }


  if (!values.lastname.includes("123")) {
    errors.lastname = "Last name must have 123";
  }
  else if (!values.lastname) {
    errors.lastname = "Lastname required";
  }


   if (!values.username) {
    errors.username = "Username required";
  } else if (!/^[A-Za-z]+/.test(values.username)) {
    errors.username = "Enter a valid username";
  } 
  
  if (!values.password) {
    errors.password = "password required";
  } else if (!/^[A-Za-z]+/.test(values.password)) {
    errors.password = "Enter a valid password";
  } 

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }  


  if (!values.phone) {
    errors.phone = "phonenumber is required";
  }
  else if (values.phone.length < 10) {
    errors.phone = "Phone number must have 10 numbers";
  }

  else if (!/^\d{10}$/.test(values.phone)) {
    errors.phone = "please enter only number";
  } 
   

  if (!values.date) {
    errors.date = "Date is required";
  } else if (values.date.length < 8) {
    errors.date = "Please enter valid date";
  }

  return errors;
}
