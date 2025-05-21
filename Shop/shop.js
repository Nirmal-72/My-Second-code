let cartCount = 0;
let wishCount = 0;

document.querySelectorAll('.product-card button').forEach(btn => {
  btn.addEventListener('click', () => {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
  });
});
