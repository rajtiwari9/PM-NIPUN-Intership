// ---------------- Register Modal + OTP ----------------
const registerBtn = document.getElementById("registerBtn");
const modal = document.getElementById("registerModal");
const closeBtn = document.querySelector(".close");
const registerForm = document.getElementById("registerForm");

let generatedOTP = "";

// Open Modal
if (registerBtn) {
  registerBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });
}

// Close Modal
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// Send OTP
const sendOtpBtn = document.getElementById("sendOtpBtn");
if (sendOtpBtn) {
  sendOtpBtn.addEventListener("click", () => {
    const phone = document.getElementById("phone").value;
    if (phone.length < 10) {
      alert("Please enter right no.");
      return;
    }
    generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();
    alert("Demo OTP है: " + generatedOTP);
    document.getElementById("otpStatus").innerText = "OTP sent ✅";
    document.getElementById("otpStatus").style.color = "blue";
  });
}

// Verify OTP
const verifyOtpBtn = document.getElementById("verifyOtpBtn");
if (verifyOtpBtn) {
  verifyOtpBtn.addEventListener("click", () => {
    const enteredOTP = document.getElementById("otp").value;
    if (enteredOTP === generatedOTP) {
      document.getElementById("otpStatus").innerText = "✅ OTP Verified";
      document.getElementById("otpStatus").style.color = "green";
    } else {
      document.getElementById("otpStatus").innerText = "❌ Wrong otp";
      document.getElementById("otpStatus").style.color = "red";
    }
  });
}

// Register Form Submit
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const pass = document.getElementById("password").value;
    const confirmPass = document.getElementById("confirmPassword").value;

    // Password Match Check
    if (pass !== confirmPass) {
      alert("⚠️ Password and Confirm Password are not matched");
      return;
    }

    // OTP Verified Check
    if (!document.getElementById("otpStatus").innerText.includes("Verified")) {
      alert("⚠️ Please verify OTP ");
      return;
    }

    alert("🎉 Registration Successful!");
    registerForm.reset();
    modal.style.display = "none";
  });
}
