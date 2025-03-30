document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
    updateCartDisplay();
});

// Update cart count in navbar icon
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCount = document.getElementById("cart-count");
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Update cart display on cart page
function updateCartDisplay() {
    const cartItemsDiv = document.getElementById("cart-items");
    if (!cartItemsDiv) return;
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartItemsDiv.innerHTML = "";
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemRow = document.createElement("tr");
        itemRow.innerHTML = `
            <td class="border-b p-4">${item.name}</td>
            <td class="border-b p-4">
                <input type="number" min="1" value="${item.quantity}" class="quantity-input" data-index="${index}">
            </td>
            <td class="border-b p-4">$${item.price.toFixed(2)}</td>
            <td class="border-b p-4">$${(item.price * item.quantity).toFixed(2)}</td>
            <td class="border-b p-4">
                <button class="remove-btn text-red-500" data-index="${index}">Remove</button>
            </td>
        `;
        cartItemsDiv.appendChild(itemRow);
        total += item.price * item.quantity;
    });
    
    document.getElementById("cart-total").innerText = `$${total.toFixed(2)}`;
    addEventListeners();
}

// Add event listeners to quantity inputs and remove buttons
function addEventListeners() {
    document.querySelectorAll(".quantity-input").forEach(input => {
        input.addEventListener("change", function () {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            let index = this.dataset.index;
            cart[index].quantity = parseInt(this.value);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartDisplay();
            updateCartCount();
        });
    });
    
    document.querySelectorAll(".remove-btn").forEach(button => {
        button.addEventListener("click", function () {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            let index = this.dataset.index;
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartDisplay();
            updateCartCount();
        });
    });
}

// Add item to cart function
function addToCart(itemName, itemPrice) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingItem = cart.find(item => item.name === itemName);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    showToast(`${itemName} added to cart!`);
}

// Toast notification
function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast-message";
    toast.innerText = message;
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