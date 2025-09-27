document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let fullName = document.getElementById("fullname").value;
  let email = document.getElementById("email").value;
  let userId = document.getElementById("userid").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let phone = document.getElementById("phone").value;

  if (password !== confirmPassword) {
    alert("❌ Password and Confirm Password do not match!");
    return;
  }

  // Save data in localStorage
  localStorage.setItem("fullName", fullName);
  localStorage.setItem("email", email);
  localStorage.setItem("userId", userId);
  localStorage.setItem("password", password);
  localStorage.setItem("phone", phone);

  alert("✅ Registration successful! Now you can login with your UserID & Password.");

  // Close modal or redirect
  document.getElementById("registerModal").style.display = "none";
});
