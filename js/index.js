document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const username = document.getElementById("loginUsername").value;
      const password = document.getElementById("loginPassword").value;
      const user = JSON.parse(localStorage.getItem(username));
      if (user && user.password === password) {
        alert("Login successful!");
        // Redirect to dashboard or other page
      } else {
        alert("Invalid username or password!");
      }
    });
  
    signupForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const username = document.getElementById("signupUsername").value;
      const password = document.getElementById("signupPassword").value;
      if (!localStorage.getItem(username)) {
        localStorage.setItem(username, JSON.stringify({ username, password }));
        alert("Sign up successful! You can now login.");
      } else {
        alert("Username already exists. Please choose a different one.");
      }
    });
  });
  