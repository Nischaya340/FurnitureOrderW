const products = [
    { id: 1, name: "Modern Chair", price: 120, img: "https://via.placeholder.com/300x300?text=Modern+Chair" },
    { id: 2, name: "Classic Sofa", price: 350, img: "https://via.placeholder.com/300x300?text=Classic+Sofa" },
    { id: 3, name: "Dining Table", price: 450, img: "https://via.placeholder.com/300x300?text=Dining+Table" },
    { id: 4, name: "Office Desk", price: 200, img: "https://via.placeholder.com/300x300?text=Office+Desk" }
];

let cart = [];

// Load products dynamically into the grid
window.onload = function() {
    const productGrid = document.getElementById("productGrid");
    products.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button onclick="openModal(${product.id})" class="btn">Customize</button>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });
}

// Open product modal for customization
function openModal(productId) {
    const modal = document.getElementById("productModal");
    const modalBody = document.getElementById("modalBody");
    const product = products.find(p => p.id === productId);

    modalBody.innerHTML = `
        <h3>${product.name}</h3>
        <img src="${product.img}" alt="${product.name}" style="width: 200px;">
        <p>Price: $${product.price}</p>
        <label for="material">Choose Material:</label>
        <select id="material" class="form-control">
            <option value="Leather">Leather</option>
            <option value="Fabric">Fabric</option>
            <option value="Wood">Wood</option>
        </select>
    `;

    // Show the modal
    modal.style.display = "flex";

    // Add to Cart button action
    document.getElementById("addToCartBtn").onclick = function() {
        addToCart(productId);
        closeModal();
    };
}

// Close modal
function closeModal() {
    document.getElementById("productModal").style.display = "none";
}

// Add product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const material = document.getElementById("material").value;
    
    cart.push({ ...product, material });
    renderCart
}