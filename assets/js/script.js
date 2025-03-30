document.addEventListener("DOMContentLoaded", function () {
  updateCartCount();
});

// Update cart count in the cart icon
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
      cartCount.textContent = cart.length;
  }
}

// Add to Cart Function
function addToCart(itemName, itemPrice) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name: itemName, price: itemPrice });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  showToast(`${itemName} has been added to your cart!`);
}

// Show Toast Notification
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast-container";
  toast.innerHTML = `<div class="toast-message">${message}</div>`;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
      toast.remove();
  }, 3000);
}

// Preloader Functionality
document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.getElementById("preloader");

  // Ensure the preloader is visible initially
  if (preloader) {
    preloader.style.display = "block";
  }

  // Wait for the page to load and then play the preloader for 7 seconds
  window.addEventListener("load", function () {
    if (preloader) {
      setTimeout(() => {
        preloader.style.opacity = "0"; // Add a fade-out effect
        setTimeout(() => {
          preloader.style.display = "none"; // Hide the preloader completely
        }, 500); // Match the fade-out duration
      },3500); // Keep the preloader visible for 7 seconds
    }
  });
});