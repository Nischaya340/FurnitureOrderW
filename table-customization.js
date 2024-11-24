// Function to update the image based on material and color selection
function updateImage() {
    const material = document.getElementById("material").value;
    const color = document.getElementById("color").value;
    
    // Generate the image source path based on the selected material and color
    const imageSrc = `table-${material}-${color}.jpg`;
    
    // Update the product image
    const productImage = document.getElementById("productImage");
    productImage.src = imageSrc;
    
    // Handle image loading errors by reverting to a default image
    productImage.onerror = function() {
        productImage.src = 'default-table.jpg';  // Fallback to a default image
        alert("Image not found for the selected options. Default image shown.");
    };
}

// Add to Cart Button Functionality
const addToCartBtn = document.getElementById("addToCartBtn");

addToCartBtn.addEventListener("click", function() {
    const material = document.getElementById("material").value;
    const color = document.getElementById("color").value;
    
    // Create the cart item object
    const cartItem = {
        name: 'Modern Table',
        material: material,
        color: color,
        price: 499.99
    };

    // Get the existing cart items from localStorage or create an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new item to the cart
    cart.push(cartItem);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to checkout page after adding to cart
    window.location.href = "checkout.html";
});
