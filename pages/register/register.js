document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.querySelector("form");
  const profileModal = new bootstrap.Modal(document.getElementById("profileCreatedModal"));
  const redirectBtn = document.getElementById("redirect-btn");

  // Handle form submission
  registerForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent actual form submission

      // Get input values
      const email = document.querySelector("input[type='email']").value;
      const ign = document.querySelector("input[placeholder='Enter IGN']").value;
      const password = document.querySelector("input[placeholder='Enter password']").value;

      // Check if user already exists in localStorage
      let users = JSON.parse(localStorage.getItem("users")) || [];

      // Generate a unique Player ID
      let playerId;
      do {
          playerId = `Player-${Math.floor(10000 + Math.random() * 90000)}`; // 5-digit unique ID
      } while (users.some(user => user.playerId === playerId)); // Ensure uniqueness

      // Store user data
      const userData = {
          playerId: playerId,
          email: email,
          username: ign,
          password: password // Save password to user data
      };

      // Save user to localStorage
      users.push(userData);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(userData)); // Keep user logged in

      console.log("User registered:", userData);

      // Show confirmation modal
      setTimeout(function () {
          profileModal.show();
      }, 500);

      // Redirect to store.html after registration
      setTimeout(function () {
          window.location.href = "store.html"; // Redirect to store page
      }, 2000); // Delay to ensure data is saved first
  });

  // Redirect to store after clicking the redirect button
  redirectBtn.addEventListener("click", function () {
      window.location.href = "store.html";
  });
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
        },2500);
      }
    });
  });


