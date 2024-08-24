// Product data (normally would come from an API)
const products = [
  {
    id: 1,
    name: "Anti Slip Door + Bathroom Mat",
    price: 299.0,
    description:
      "Keep your entryways clean and safe with our high-quality Anti-Slip Door Mat. Designed with a robust non-slip backing, this mat stays firmly in place, preventing slips and falls even in high-traffic areas. Its durable construction ensures it can withstand heavy use while effectively trapping dirt, dust, and moisture. Featuring an attractive design that complements any décor, this mat is perfect for both indoor and outdoor use. Easy to clean and maintain, it provides long-lasting protection for your floors. Enhance your home's safety and cleanliness with our reliable Anti-Slip Door Mat – where functionality meets style.",
    image: "../images/antiSlipBathroomMat.jpg",
  },
  {
    id: 2,
    name: "Astronomer Night Lamp",
    price: 599.0,
    description:
      "Illuminate your space with the enchanting glow of the Astrologer Night Lamp. This uniquely designed lamp features a captivating celestial pattern that projects a starry night sky onto your walls and ceiling, creating a soothing and magical ambiance.Crafted with high-quality materials, the lamp offers adjustable brightness settings to suit your mood and needs. The gentle, warm light promotes relaxation and helps with sleep, making it perfect for bedrooms, nurseries, or any space where you seek a calming atmosphere. Easy to use and energy-efficient, the Astrologer Night Lamp transforms your room into a starlit haven, blending functionality with a touch of cosmic wonder.",
    image: "../images/astronomerNightLamp.jpg",
  },
  {
    id: 3,
    name: "Automatic Electric Vegetable Chopper",
    price: 449.0,
    description:
      "The Electric Vegetable Chopper is a powerful and efficient kitchen tool designed to simplify your meal prep. With its sharp stainless steel blades and high-speed motor, this chopper quickly and evenly chops, dices, and minces vegetables, fruits, nuts, and herbs. Featuring multiple speed settings, it allows for precise control, ensuring perfect texture every time. The compact design saves counter space, and its detachable parts make cleaning a breeze. Ideal for busy cooks, the Electric Vegetable Chopper reduces prep time, helping you create fresh, healthy meals with ease.Description of Product 3",
    image: "../images/automaticElectricVegetableChopper.jpg",
  },
];

const cart = new Map(); // Using a Map to store cart items for efficient updates

// Helper function to format price
const formatPrice = (price) => `$${price.toFixed(2)}`;

// Render products
function renderProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = products
    .map(
      (product) => `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${formatPrice(product.price)}</p>
            <p class="description">${product.description}</p>
            <button class="add-to-cart" data-id="${
              product.id
            }">Add to Cart</button>
        </div>
    `
    )
    .join("");
}

// Render cart
function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");

  const cartEntries = Array.from(cart.values());
  cartItems.innerHTML = cartEntries
    .map(
      (item) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p class="price">${formatPrice(item.price)}</p>
                <p class="quantity">Quantity: ${item.quantity}</p>
                <button class="remove-item" data-id="${item.id}">Remove</button>
            </div>
        </div>
    `
    )
    .join("");

  const total = cartEntries.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  totalPriceElement.textContent = formatPrice(total);
}

// Add product to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const cartItem = cart.get(productId);
  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.set(productId, { ...product, quantity: 1 });
  }

  renderCart();
}

// Remove item from cart
function removeFromCart(productId) {
  if (cart.has(productId)) {
    cart.delete(productId);
    renderCart();
  }
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();

  document.getElementById("product-list").addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
      const productId = parseInt(e.target.getAttribute("data-id"), 10);
      addToCart(productId);
    }
  });

  document.getElementById("cart-items").addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-item")) {
      const productId = parseInt(e.target.getAttribute("data-id"), 10);
      removeFromCart(productId);
    }
  });
});
