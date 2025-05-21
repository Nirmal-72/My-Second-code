let cartCount = 0;
function addToCart(price, name) {
  cartCount++;
  document.getElementById('cart-count').innerText = cartCount;
  alert(`${name} (₹${price}) added to cart.`);
}

function searchProduct() {
  const query = document.getElementById('search-bar').value.toLowerCase();
  alert(`Searching for: ${query}`);
}
