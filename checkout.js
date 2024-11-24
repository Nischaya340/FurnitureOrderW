// Function to display cart items and allow removal
function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartSummary = document.querySelector('.cart-summary');
    
    let cartContent = '';
    let total = 0;

    if (cart.length === 0) {
        cartContent = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach((item, index) => {
            cartContent += `
                <div class="cart-item">
                    <p>Item: <strong>${item.name}</strong></p>
                    <p>Material: ${item.material}</p>
                    <p>Color: ${item.color}</p>
                    <p>Price: $${item.price.toFixed(2)}</p>
                    <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
                </div>
            `;
            total += item.price;
        });
        
        cartContent += `
            <div class="total">
                <p><strong>Total: $${total.toFixed(2)}</strong></p>
            </div>
        `;
    }

    cartSummary.innerHTML = cartContent;
}

// Function to remove an item from the cart
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Remove the item at the given index
    cart.splice(index, 1);
    
    // Update localStorage with the modified cart
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Redisplay the updated cart
    displayCartItems();
}

// Run the displayCartItems function on page load
window.onload = displayCartItems;

// Submit Order Button
const submitOrderBtn = document.getElementById("submitOrderBtn");

submitOrderBtn.addEventListener("click", function(event) {
    event.preventDefault();
    
    // Collect form values
    const fullName = document.getElementById("fullName").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const zip = document.getElementById("zip").value;
    const cardNumber = document.getElementById("cardNumber").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvv = document.getElementById("cvv").value;

    if (fullName && address && city && state && zip && cardNumber && expiryDate && cvv) {
        alert("Your order has been placed successfully!");

        // Clear the cart after successful order
        localStorage.removeItem('cart');

        // Redirect to order confirmation page or homepage
        window.location.href = "homepage.html";
    } else {
        alert("Please fill out all fields before submitting.");
    }
});
