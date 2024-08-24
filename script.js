document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:5000/products")
    .then((response) => response.json())
    .then((data) => {
      const productList = document.getElementById("product-list");
      productList.innerHTML = data
        .map(
          (product) => `
                <div class="product">
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price}</p>
                    <p>${product.description}</p>
                </div>
            `
        )
        .join("");
    })
    .catch((error) => console.error("Error fetching products:", error));
});
