var popup = document.getElementById("popup");
var span = document.getElementById("closePopup");

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

    // Call the addToCart function from cart.js
    addToCart(title, price, imageUrl, description);
    
    // Optionally, you can show a confirmation alert
    alert(`You have added ${title} to your cart!`);
});

span.onclick = function() {
    popup.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}