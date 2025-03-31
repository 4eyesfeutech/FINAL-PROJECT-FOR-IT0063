var popup = document.getElementById("popup");
var span = document.getElementById("closePopup");

// Temporary storage for the item details
let tempCartItem = null;

function openPopup(title, price, imageUrl, description) {
    document.getElementById("popupTitle").innerText = title;
    document.getElementById("popupPrice").innerText = price;
    document.getElementById("popupImage").src = imageUrl; 
    document.getElementById("popupDescription").innerText = description; 
    popup.style.display = "block";
}

document.getElementById('buyButton').addEventListener('click', function() {
    const title = document.getElementById('popupTitle').innerText;
    const price = parseFloat(document.getElementById('popupPrice').innerText.replace('$', '')); // Convert price to a number
    const imageUrl = document.getElementById('popupImage').src;
    const description = document.getElementById('popupDescription').innerText;

    // Store the item details temporarily
    tempCartItem = { title, price, imageUrl, description };

    // Alert the user that they need to register
    alert("You need to register before you purchase.");
    
    // Redirect to the registration page
    window.location.href = "register.html";
});

// Function to add the item to the cart after registration
function addToCart() {
    if (tempCartItem) {
        // Call the existing addToCart function from cart.js
        window.addToCart(tempCartItem.title, tempCartItem.price, tempCartItem.imageUrl, tempCartItem.description);
        alert(`You have added ${tempCartItem.title} to your cart!`);
        tempCartItem = null; // Clear the temporary item
    }
}

span.onclick = function() {
    popup.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
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