let cart = [];

function addToCart(itemName, itemPrice) {
  cart.push({ name: itemName, price: itemPrice });
  alert(`${itemName} has been added to your cart!`);
}

function updateCartDisplay() {
  const cartItemsDiv = document.getElementById('cartItems');
  cartItemsDiv.innerHTML = ''; // Clear previous items
  let total = 0;

  cart.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.innerHTML = `<p>${item.name} - $${item.price}</p>`;
    cartItemsDiv.appendChild(itemDiv);
    total += item.price;
  });

  document.getElementById('totalPrice').innerText = `Total: $${total}`;
}

function proceedToPayment() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Proceeding to payment...");
    // Redirect to payment page or implement payment logic
  }
}

// Update cart display on cart page load
if (document.getElementById('cartItems')) {
  updateCartDisplay();
}