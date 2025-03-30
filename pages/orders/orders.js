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


document.addEventListener("DOMContentLoaded", function () {
  // Placeholder data for orders
  const placeholderOrders = [
    {
      id: "ORD54274",
      date: "2024-11-28",
      items: ["Deep Depths Ultra Ticket Box", "2,700 PokéCoins"],
      status: "Payment Successful",
      total: "₱559.65",
    },
    {
      id: "OR884563",
      date: "2025-01-29",
      items: ["Pokémon GO Fest 2025: Global Ticket"],
      status: "Payment Successful",
      total: "₱373.15",
    },
    {
      id: "ORD97535",
      date: "2025-03-30",
      items: ["15,500 PokéCoins"],
      status: "Processing",
      total: "₱2,507.00",
    },
  ];

  // Get the orders list table body
  const ordersList = document.getElementById("orders-list");

  // Populate the table with placeholder orders
  placeholderOrders.forEach((order) => {
    const row = document.createElement("tr");

    // Join the items array into a comma-separated string
    const items = order.items.join(", ");

    row.innerHTML = `
      <td>${order.id}</td>
      <td>${order.date}</td>
      <td>${items}</td>
      <td>${order.status}</td>
      <td>${order.total}</td>
    `;

    ordersList.appendChild(row);
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