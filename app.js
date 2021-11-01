var user = document.querySelector("#useremail");
user.addEventListener("keyup", () => {
  var u_times = document.querySelector(".u_times");
  var u_check = document.querySelector(".u_check");
  if (user.value.length == 0 || user.value.length < 6) {
    user.style.border = "1px solid red";
    u_times.style.display = "block";
    u_check.style.display = "none";
    return false;
  } else {
    user.style.border = "1px solid green";
    u_times.style.display = "none";
    u_check.style.display = "block";
  }
});

var password = document.querySelector("#password");
password.addEventListener("keyup", () => {
  var p_times = document.querySelector(".p_times");
  var p_check = document.querySelector(".p_check");
  if (password.value.length == 0 || password.value.length < 8) {
    password.style.border = "1px solid red";
    p_times.style.display = "block";
    p_check.style.display = "none";
    return false;
  } else {
    password.style.border = "1px solid green";
    p_times.style.display = "none";
    p_check.style.display = "block";
  }
});

const validate = () => {
  if (user.value.length == 0 || user.value.length < 6) {
    document.getElementById("error").innerHTML = "Please fill the Email";
    return false;
  } else if (password.value.length == 0 || password.value.length < 8) {
    document.getElementById("error").innerHTML = "Please fill the password";
    return false;
  } else {
    alert("Logged in successfully");
  }
};
