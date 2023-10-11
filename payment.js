function processPayment() {
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;
    if (cardNumber && expiryDate && cvv) {
        alert("Payment successful! (This is just a mock action.)");
        localStorage.removeItem('cart');
        window.location.href = 'index.html';
    } else {
        alert("Please fill in all the payment details.");
    }
}
