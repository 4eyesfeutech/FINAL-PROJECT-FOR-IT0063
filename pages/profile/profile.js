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
