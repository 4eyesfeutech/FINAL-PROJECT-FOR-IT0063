document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const users = JSON.parse(localStorage.getItem("users")) || []; // Get all registered users
  const errorMessage = document.getElementById("error-message");

  // Find a user that matches the entered email and password
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
      // Store the current logged-in user
      localStorage.setItem("currentUser", JSON.stringify(user)); // Save logged-in user data

      // Redirect to the profile page after successful login
      window.location.href = "profile.html";
  } else {
      errorMessage.style.display = "block";
      errorMessage.textContent = "Invalid email or password."; // Show error message
  }
});


// Preloader Functionality
document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
  
    // Ensure the preloader is visible initially
    if (preloader) {
      preloader.style.display = "block";
    }
  
    // Preloader Delay
    window.addEventListener("load", function () {
      if (preloader) {
        setTimeout(() => {
          setTimeout(() => {
            preloader.style.display = "none"; 
          }, 500);
        },3500);
      }
    });
  });



