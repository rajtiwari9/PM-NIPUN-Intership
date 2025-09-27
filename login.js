document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let enteredUserId = document.getElementById("userid").value;
  let enteredPassword = document.getElementById("password").value;

  let storedUserId = localStorage.getItem("userId");
  let storedPassword = localStorage.getItem("password");

  if (enteredUserId === storedUserId && enteredPassword === storedPassword) {
    document.getElementById("loginMessage").innerText = "✅ Login successful!";
    document.getElementById("loginMessage").style.color = "green";

    setTimeout(() => {
      window.location.href = "application.html"; 
    }, 1500);
  } else {
    document.getElementById("loginMessage").innerText = "❌ Invalid UserID or Password!";
    document.getElementById("loginMessage").style.color = "red";
  }
});
