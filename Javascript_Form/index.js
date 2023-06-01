var obj = {};
let modal = bootstrap.Modal.getOrCreateInstance(
  document.getElementById("resultModal")
); // Returns a Bootstrap modal instance

// modal.show();
var form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirm = document.getElementById("confirm").value;
  var age = Number(document.getElementById("age").value);
  var country = document.getElementById("country").value;
  var colour = document.querySelector(
    "input[type='radio'][name=flexRadioDefault]:checked"
  ).value;
  var subscription = document.getElementById("subscription");
  console.log(
    name,
    email,
    password,
    confirm,
    age,
    country,
    colour,
    subscription,
    "details"
  );

  console.log(typeof password, "password typeeeee");
  console.log(email, typeof email, "1111111111");
  console.log(subscription, typeof subscription, "subbbbbbbbbb");

  var regexName = /^[a-zA-Z ]{2,30}$/;
  var regexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //   var regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$/;
  var regexPassword =
    /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}).*$/;

  if (name.length === 0) {
    document.getElementById("nameError").innerText = "Please enter your name";
  }
  if (name.length > 0 && !regexName.test(name)) {
    document.getElementById("nameError").innerText =
      "Name should be between 2 and 30 char";
  }
  if (regexName.test(name)) {
    obj.Name = name;
    document.getElementById("nameError").innerText = "";
  }
  if (email.length === 0) {
    document.getElementById("emailError").innerText = "Please enter your email";
  }
  if (email.length > 0 && !regexEmail.test(email)) {
    console.log("inside and email condition");
    document.getElementById("emailError").innerText =
      "Please enter valid email";
  }
  if (regexEmail.test(email)) {
    obj.Email = email;
    document.getElementById("emailError").innerText = "";
  }

  if (password.length === 0) {
    document.getElementById("passwordError").innerText =
      "Please enter your password";
  }
  if (password.length > 0 && !regexPassword.test(password)) {
    document.getElementById("passwordError").innerText =
      "Min length of 8 char,least one uppercase, one lowercase,a number";
  }
  if (regexPassword.test(password)) {
    obj.Password = password;
    document.getElementById("passwordError").innerText = "";
  }
  if (confirm.length === 0) {
    document.getElementById("confirmError").innerText =
      "Please enter confirm password";
  }

  if (password !== confirm) {
    document.getElementById("confirmError").innerText =
      "Please enter valid  password";
  }
  if (password === confirm) {
    document.getElementById("confirmError").innerText = "";
  }

  if (age === 0) {
    console.log("age inside");
    document.getElementById("ageError").innerText = "Please enter your Age";
  }
  if ((age > 0 && age < 18) || age > 100) {
    document.getElementById("ageError").innerText = "Age between 18 and 100";
  }
  if (age > 18 && age < 100) {
    console.log("INSIDE THE");
    obj.Age = age;
    document.getElementById("ageError").innerText = "";
  }
  if (!country) {
    document.getElementById("countryError").innerText = "Please Select Country";
  }
  if (country) {
    obj.Country = country;
    document.getElementById("countryError").innerText = "";
  }
  if (colour) {
    obj.Colour = colour;
  }

  if (!subscription.checked) {
    document.getElementById("subError").innerText =
      "Please Select subscription";
  }

  if (
    name &&
    email &&
    password &&
    confirm &&
    age > 18 &&
    age < 100 &&
    country &&
    colour &&
    subscription.checked
  ) {
    document.getElementById("animationDiv").style.display = "block";

    modal.show();
    document.getElementById("objName").innerText =
      "Name" + " " + ":" + " " + obj.Name;
    document.getElementById("objEmail").innerText =
      "Email" + " " + ":" + " " + obj.Email;
    document.getElementById("objAge").innerText =
      "Age" + " " + ":" + " " + obj.Age;

    document.getElementById("objPassword").innerText =
      "Password" + " " + ":" + " " + obj.Password;
    document.getElementById("objCountry").innerText =
      "Country" + " " + ":" + " " + obj.Country;
    document.getElementById("objColor").innerText =
      "Favourite color" + " " + ":" + " " + obj.Colour;
    document.getElementById("objSub").innerText =
      "Subscription" + " " + ":" + " " + obj.Subscription;
  }
});

function sub() {
  if (subscription.checked) {
    document.getElementById("subError").innerText = "";
    obj.Subscription = true;
  }
}

function showPassword() {
  console.log("inside password function");
  var show = document.getElementById("password");
  console.log(show, "showwwwwww");
  console.log(show.type, "show type");
  if (show.type === "password") {
    console.log("inside if condition");
    show.type = "text";
  } else {
    show.type = "password";
  }
}
