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
