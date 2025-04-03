document.addEventListener("DOMContentLoaded", function () {
    // Get input fields
    const cardNumber = document.getElementById("card-number");
    const expDate = document.getElementById("exp-date");
    const cvv = document.getElementById("cvv");
    const paymentForm = document.getElementById("payment-form");
    const okBtn = document.getElementById("ok-btn");

    // Ensure modal is correctly initialized
    const modalElement = document.getElementById("transactionModal");
    if (!modalElement) {
        console.error("Modal not found! Check if #transactionModal exists in HTML.");
        return;
    }
    const transactionModal = new bootstrap.Modal(modalElement);

    // Allow only numeric input for Card Number, Expiry Date, and CVV
    cardNumber.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim();
    });

    expDate.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").replace(/^(\d{2})(\d{0,2})/, "$1/$2").trim();
    });

    cvv.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").substring(0, 3);
    });

    // Handle form submission
    paymentForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        // Validate inputs
        if (!/^\d{16}$/.test(cardNumber.value.replace(/\s/g, ""))) {
            alert("Please enter a valid 16-digit card number.");
            return;
        }
        if (!/^\d{2}\/\d{2}$/.test(expDate.value)) {
            alert("Please enter a valid expiration date in MM/YY format.");
            return;
        }
        if (!/^\d{3}$/.test(cvv.value)) {
            alert("Please enter a valid 3-digit CVV.");
            return;
        }

        // Show transaction complete modal
        transactionModal.show();
    });

    // Redirect to transactions.html when OK button is clicked
    okBtn.addEventListener("click", function () {
        window.location.href = "orders.html";
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
        },1000);
      }
    });
  });
