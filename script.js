function validateLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('login-message');

  if (username === "student" && password === "12345") {
    // ✅ Save login status correctly
    localStorage.setItem("loggedIn", "true");

    message.style.color = "green";
    message.textContent = "Login successful! Redirecting...";

    // Redirect after 1.5 seconds
    setTimeout(() => {
      window.location.href = "home.html";
    }, 1500);

    return false;
  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password!";
    return false;
  }
}

function logout() {
  // 🔒 Logout and clear session
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}