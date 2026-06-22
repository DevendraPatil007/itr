console.log("app.js loaded");

const BASE_URL = "https://fakestoreapi.com";
let cart = [];

// 1. Fetch items dynamically
async function loadProducts() {
  try {
    const res = await fetch(`${BASE_URL}/products`);
    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);

    const products = await res.json();
    const container = document.getElementById("productList");
    container.innerHTML = "";

    products.forEach((p) => {
      const card = document.createElement("div");
      card.className = "product-card";

      const imgContainer = document.createElement("div");
      imgContainer.className = "img-container";
      const img = document.createElement("img");
      img.className = "product-img";
      img.src = p.image;
      img.alt = p.title;
      imgContainer.appendChild(img);

      const infoDiv = document.createElement("div");
      infoDiv.className = "product-info";

      const title = document.createElement("h3");
      title.className = "product-title";
      title.textContent = p.title;

      const metaDiv = document.createElement("div");
      metaDiv.className = "product-meta";

      const idSpan = document.createElement("span");
      idSpan.className = "product-id";
      idSpan.textContent = `ID: #${p.id}`;

      const priceSpan = document.createElement("span");
      priceSpan.className = "product-price";
      priceSpan.textContent = `$${p.price.toFixed(2)}`;

      metaDiv.appendChild(idSpan);
      metaDiv.appendChild(priceSpan);
      infoDiv.appendChild(title);
      infoDiv.appendChild(metaDiv);

      const actionsDiv = document.createElement("div");
      actionsDiv.style.display = "flex";
      actionsDiv.style.gap = "8px";
      actionsDiv.style.marginTop = "auto";

      const addToCartBtn = document.createElement("button");
      addToCartBtn.className = "btn btn-primary";
      addToCartBtn.style.padding = "8px 12px";
      addToCartBtn.style.fontSize = "0.85rem";
      addToCartBtn.style.width = "100%";
      addToCartBtn.textContent = "Add to Cart";
      addToCartBtn.addEventListener("click", () => addToCart(p));

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "btn-delete";
      deleteBtn.style.padding = "8px";
      deleteBtn.innerHTML = "&#128465;";
      deleteBtn.addEventListener("click", () => deleteProduct(p.id, card));

      actionsDiv.appendChild(addToCartBtn);
      actionsDiv.appendChild(deleteBtn);

      card.appendChild(imgContainer);
      card.appendChild(infoDiv);
      card.appendChild(actionsDiv);

      container.appendChild(card);
    });
  } catch (err) {
    console.error("Load failed:", err);
    alert("Could not load inventory.");
  }
}

// 2. Add Item to Cart Pool
function addToCart(product) {
  cart.push(product);
  document.getElementById("cartCount").textContent = cart.length;
}

// 3. View Cart Status Modal
function viewCartSummary() {
  if (cart.length === 0) {
    alert("Your cart is currently empty!");
    return;
  }
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const itemNames = cart
    .map((item) => `- ${item.title} ($${item.price.toFixed(2)})`)
    .join("\n");
  alert(
    `--- Checkout Inventory ---\n${itemNames}\n\nTotal Items: ${cart.length}\nEst. Total: $${totalPrice.toFixed(2)}`,
  );
}

// 4. Simulated POST - Alternates items dynamically
async function addProduct() {
  const templates = [
    {
      title: "Nexus Pro 5G Smartphone",
      price: 899.99,
      category: "electronics",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    },
    {
      title: "Vintage Leather Backpack",
      price: 74.5,
      category: "clothing",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    },
  ];
  const randomTemplate =
    templates[Math.floor(Math.random() * templates.length)];

  try {
    const res = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(randomTemplate),
    });
    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
    alert(`Success! Created "${randomTemplate.title}" mock item.`);
  } catch (err) {
    console.error("Add failed:", err);
  }
}

// 5. DELETE Element
async function deleteProduct(id, cardElement) {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
    cardElement.remove();
  } catch (err) {
    console.error("Delete failed:", err);
  }
}

// Setup Event Listeners
document.getElementById("loadBtn").addEventListener("click", loadProducts);
document.getElementById("addBtn").addEventListener("click", addProduct);
document.getElementById("cartBtn").addEventListener("click", viewCartSummary);
