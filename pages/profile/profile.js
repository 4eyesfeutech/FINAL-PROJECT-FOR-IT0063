document.addEventListener("DOMContentLoaded", function () {
    // Retrieve user details from local storage
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        document.getElementById("full-name").textContent = user.fullName || "N/A";
        document.getElementById("email").textContent = user.email || "N/A";
        document.getElementById("username").textContent = user.username || "N/A";
    } else {
        alert("No user data found. Please register first.");
        window.location.href = "register.html"; // Corrected path
    }

    // Logout functionality
    document.getElementById("logout").addEventListener("click", function () {
        localStorage.removeItem("user");
        alert("Logged out successfully!");
        window.location.href = "../../index.html"; // Redirect to homepage
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