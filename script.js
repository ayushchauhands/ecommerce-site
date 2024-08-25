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
      "The Electric Vegetable Chopper is a powerful and efficient kitchen tool designed to simplify your meal prep. With its sharp stainless steel blades and high-speed motor, this chopper quickly and evenly chops, dices, and minces vegetables, fruits, nuts, and herbs. Featuring multiple speed settings, it allows for precise control, ensuring perfect texture every time. The compact design saves counter space, and its detachable parts make cleaning a breeze. Ideal for busy cooks, the Electric Vegetable Chopper reduces prep time, helping you create fresh, healthy meals with ease.",
    image: "../images/automaticElectricVegetableChopper.jpg",
  },
  {
    id: 4,
    name: "Automatic Filling Cleaning Brush",
    price: 299.0,
    description:
      "An Automatic Filling Cleaning Brush is a convenient and efficient cleaning tool designed to streamline household chores. This brush features an integrated reservoir that automatically dispenses cleaning liquid with a simple press or squeeze, ensuring a continuous flow of soap or detergent during use. The brush head is typically equipped with durable bristles or scrubbing pads, capable of tackling tough stains and grime on various surfaces such as dishes, countertops, and bathroom fixtures. Ideal for busy households, this innovative cleaning brush reduces the need for frequent soap reapplication, enhancing cleaning efficiency and user comfort. Its ergonomic handle provides a comfortable grip, making it easy to maneuver and use for extended periods.",
    image: "../images/automaticFeelingCleaningBrush.jpg",
  },
  {
    id: 5,
    name: "Capsule Umbrella",
    price: 399.0,
    description:
      "Stay prepared for unexpected weather with our sleek and compact Capsule Umbrella. This innovative umbrella folds down into a small, capsule-shaped case that easily fits in your bag, backpack, or even your pocket. Despite its small size, the Capsule Umbrella offers robust protection against rain and wind with its durable, waterproof canopy and sturdy frame. The easy-to-use design features a smooth, automatic open and close mechanism, making it convenient to use when you're on the go. Perfect for urban dwellers, travelers, and anyone who values practicality, the Capsule Umbrella ensures you stay dry in style.",
    image: "../images/capsuleUmbrella.jpg",
  },
  {
    id: 6,
    name: "Circular Ice Cube Tray Set of 3",
    price: 399.0,
    description:
      "The Circular Ice Cube Tray is a versatile kitchen accessory designed to elevate your beverage experience. Made from durable, food-grade silicone, this tray creates perfectly round ice spheres that melt slower than traditional ice cubes, keeping your drinks colder for longer without diluting them. Each tray produces multiple ice balls, ideal for chilling cocktails, hard drinks, soft drinks, and more. The flexible, non-stick design ensures easy release of the ice spheres, and it's dishwasher safe for convenient cleaning. Compact and efficient, the Circular Ice Cube Tray is a must-have for any home bar or kitchen.",
    image: "../images/circularIceCubeTray.jpg",
  },
  {
    id: 7,
    name: "Cloth Lint Removal",
    price: 299.0,
    description:
      "A Cloth Lint Remover is a handy tool designed to keep your fabrics looking fresh and clean by removing lint, fuzz, and pet hair. This device typically features a handle and a rotating or static head equipped with blades or an adhesive surface that effectively picks up unwanted particles from clothing, upholstery, and other fabric surfaces. Lightweight and easy to use, the cloth lint remover helps prolong the life of your garments by preventing pilling and maintaining their appearance. It's an essential accessory for anyone looking to keep their wardrobe and home textiles in pristine condition, offering a quick and efficient solution for fabric care.",
    image: "../images/clothLinkRemover.jpg",
  },
  {
    id: 8,
    name: "Cute Breathing Teddy Bear with Musical Sounds",
    price: 1299.0,
    description:
      "A plush companion designed to bring comfort, warmth, and a sense of security to children and adults alike. This adorable teddy bear is more than just a cuddly toy—it's a lifelike companion that simulates gentle breathing motions, creating a soothing experience that's perfect for bedtime, nap time, or simply for moments when you need a little extra comfort.",
    image: "../images/cuteBreathingTeddy.jpg",
  },
];

const cart = new Map(); // Using a Map to store cart items for efficient updates

// Helper function to format price
const formatPrice = (price) => `₹${price.toFixed(2)}`;

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

// Store cart in localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(Array.from(cart.entries())));
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

  saveCart();
  renderCart();
}

// Remove item from cart
function removeFromCart(productId) {
  if (cart.has(productId)) {
    cart.delete(productId);
    saveCart();
    renderCart();
  }
}

// Navigate to checkout
function goToCheckout() {
  saveCart();
  window.location.href = "checkout.html";
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

  document.querySelector(".checkout").addEventListener("click", goToCheckout);
});
