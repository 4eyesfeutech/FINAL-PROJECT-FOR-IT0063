document.addEventListener("DOMContentLoaded", function () {
  // Check if user is logged in
  const user = JSON.parse(localStorage.getItem("currentUser")); // Use "currentUser" instead of "user"

  if (!user) {
      alert("You need to log in first.");
      window.location.href = "login.html"; // Redirect to login page
  } else {
      // Display auto-generated Player ID, email, and IGN from registration
      document.getElementById("full-name").textContent = user.playerId || "00000"; // Default to "00000" if no ID
      document.getElementById("email").textContent = user.email || "N/A";
      document.getElementById("username").textContent = user.username || "N/A";
  }

  // Logout functionality
  document.getElementById("logout").addEventListener("click", function () {
      localStorage.removeItem("currentUser"); // Clear only the current session
      alert("Logged out successfully!");
      window.location.href = "login.html"; 
  });

  // Edit Profile functionality
  document.getElementById("edit-profile").addEventListener("click", function () {
      window.location.href = "edit-profile.html"; // Ensure this file exists
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
        },3500);
      }
    });
  });