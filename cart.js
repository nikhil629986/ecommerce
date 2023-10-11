document.addEventListener("DOMContentLoaded", function() {
    displayCartItems();
});

function displayCartItems() {
    const cartContainer = document.getElementById('cart-items');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cartContainer.innerHTML = "";

    cart.forEach((item, index) => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td><img src="${item.image}" alt="${item.name}" width="50"></td>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${item.description}</td>
            <td>$${item.price}</td>
            <td>${item.quantity}</td>
            <td>$${item.price * item.quantity}</td>
            <td>
                <button onclick="removeFromCart(${index})" class="btn btn-danger btn-sm">Remove</button>
                <button onclick="addQuantity(${index})" class="btn btn-primary btn-sm">Add</button>
                <button onclick="removeCartItem(${index})" class="btn btn-primary btn-sm">-</button>
            </td>
        `;

        cartContainer.appendChild(tr);
    });

    const totalRow = document.createElement('tr');
    const totalCell = document.createElement('td');
    totalCell.setAttribute('colspan', '8');
    totalCell.style.textAlign = 'right';
    totalCell.textContent = `Total: $${cart.reduce((total, item) => total += item.price * item.quantity, 0).toFixed(2)}`;
    totalRow.appendChild(totalCell);
    cartContainer.appendChild(totalRow);
}



function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}

function addQuantity(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity += 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}
function proceedToPayment() {
    window.location.href = 'payment.html';
}


function removeCartItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity -= 1;
    if(cart[index].quantity === 0) {
      cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
  }