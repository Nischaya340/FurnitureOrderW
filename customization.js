// Function to update the image based on material and color selection
function updateImage() {
    const material = document.getElementById("material").value;
    const color = document.getElementById("color").value;
    
    // Generate the image source path
    const imageSrc = `chair-${material}-${color}.jpg`;
    
    // Debug: Log the generated image path to ensure it's correct
    console.log("Generated Image Path: ", imageSrc);
    
    // Update the product image
    const productImage = document.getElementById("productImage");
    productImage.src = imageSrc;
    
    // Handle image loading errors
    productImage.onerror = function() {
        alert("Image not found. Please ensure the image file exists: " + imageSrc);
        // Revert to default image
        productImage.src = 'default-chair.jpg';
    };
}

// Add to Cart Button Functionality
const addToCartBtn = document.getElementById("addToCartBtn");

addToCartBtn.addEventListener("click", function() {
    const material = document.getElementById("material").value;
    const color = document.getElementById("color").value;

    alert(`Added to cart:\nMaterial: ${material}\nColor: ${color}`);
    // Logic to add the selected customization options to the shopping cart
});
