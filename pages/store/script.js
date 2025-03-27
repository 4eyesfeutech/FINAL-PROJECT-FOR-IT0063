
var popup = document.getElementById("popup");
var span = document.getElementById("closePopup");

function openPopup(title, price, imageUrl, description) {
    document.getElementById("popupTitle").innerText = title;
    document.getElementById("popupPrice").innerText = price;
    document.getElementById("popupImage").src = 'images/' + imageUrl; 
    document.getElementById("popupDescription").innerText = description; 
    popup.style.display = "block";
}

document.getElementById('buyButton').addEventListener('click', function() {
    const title = document.getElementById('popupTitle').innerText;
    const price = document.getElementById('popupPrice').innerText;
    alert(`You have purchased ${title} for ${price}!`);
    
});

span.onclick = function() {
    popup.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}