// Helper function to format price with ₹ symbol
const formatPrice = (price) => `₹${price.toFixed(2)}`;

// Render checkout items
function renderCheckoutItems() {
  const checkoutItems = document.getElementById("checkout-items");
  const checkoutTotalElement = document.getElementById("checkout-total");

  // Load cart from localStorage
  const cartData = JSON.parse(localStorage.getItem("cart")) || [];
  const cart = new Map(cartData);

  checkoutItems.innerHTML = Array.from(cart.values())
    .map(
      (item) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p class="price">${formatPrice(item.price)}</p>
                <p class="quantity">Quantity: ${item.quantity}</p>
            </div>
        </div>
    `
    )
    .join("");

  const total = Array.from(cart.values()).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  checkoutTotalElement.textContent = formatPrice(total);
}

// Handle payment form submission
document
  .getElementById("payment-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Here you would typically handle the payment logic (e.g., sending payment details to a server)
    alert("Thank you for your purchase!");

    // Clear cart and redirect to home page
    localStorage.removeItem("cart");
    window.location.href = "index.html";
  });

// Initial setup
document.addEventListener("DOMContentLoaded", () => {
  renderCheckoutItems();
});
