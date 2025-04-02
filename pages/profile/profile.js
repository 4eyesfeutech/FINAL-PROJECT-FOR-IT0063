document.addEventListener("DOMContentLoaded", function () {
  // Check if user is logged in
  const currentUser = JSON.parse(localStorage.getItem("currentUser")); // Use "currentUser" instead of "user"

  if (!currentUser) {
      alert("You need to register first.");
      window.location.href = "register.html"; // Redirect to register page if not logged in
  } else {
      // Display auto-generated Player ID, email, and IGN from registration
      document.getElementById("full-name").textContent = currentUser.playerId || "00000"; // Default to "00000" if no ID
      document.getElementById("email").textContent = currentUser.email || "N/A";
      document.getElementById("username").textContent = currentUser.username || "N/A";
  }

  // Logout functionality
  document.getElementById("logout").addEventListener("click", function () {
      // Remove current user data from localStorage
      alert("Logged out successfully!");
      window.location.href = "login.html"; // Redirect to login page after logout
  });

  // Edit Profile functionality
  document.getElementById("edit-profile").addEventListener("click", function () {
      window.location.href = "edit-profile.html"; // Redirect to edit-profile page
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