let cart = document.getElementById("cart");
let renderProductsCart = "";
let summaryList = "";
let hoy = new Date().toDateString();
let envioDesde = hoy;
let envioHasta = hoy;

// Función para calcular el total del carrito
function calculateCartTotal() {
  if (typeof productsCart === 'undefined' || !productsCart) {
    return 0;
  }
  return productsCart.reduce((acumulador, actual) => {
    const price = typeof actual.precio === 'string' ? parseFloat(actual.precio) : actual.precio;
    const quantity = actual.quantity || 1;
    return acumulador + (price * quantity);
  }, 0);
}

function renderCart() {
  renderProductsCart = "";
  
  if (!productsCart || productsCart.length === 0) {
    cart.innerHTML = `
      <div class="container py-5">
        <div class="row d-flex justify-content-center">
          <div class="col-md-8">
            <div class="card">
              <div class="card-body text-center py-5">
                <h3 class="text-muted">Your cart is empty</h3>
                <p class="text-muted">Add some products to start your purchase</p>
                <a href="../pages/shop.html" class="btn btn-secondary">Go to shop</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return;
  }
  
  for (const producto of productsCart) {
    const quantity = producto.quantity || 1;
    const price = typeof producto.precio === 'string' ? parseFloat(producto.precio) : producto.precio;
    const subtotal = price * quantity;
    
    renderProductsCart += `
    <div class="card-body">
      <div class="row">
        <div class="col-lg-3 col-md-12 mb-3 mb-lg-0">
          <div class="bg-image hover-overlay hover-zoom ripple rounded">
            <img src="${producto.imagen}" class="img-fluid rounded" width="120px" alt="${producto.nombre}" />
            <a href="#!">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
            </a>
          </div>
        </div>
        <div class="col-lg-5 col-md-6 mb-3 mb-lg-0">
          <h5><strong>${producto.nombre}</strong></h5>
          <p class="text-muted mb-1">Category: ${producto.categoria}</p>
          <p class="text-muted mb-1">Available stock: ${producto.stock}</p>
          <p class="text-muted mb-1">Weight: ${producto.peso} grs.</p>
          <p class="text-muted mb-1">Dimensions: ${producto.medidas}</p>
          <div class="mt-2">
            <button type="button" class="btn btn-outline-secondary btn-sm me-2" onclick="removeFromCart(${producto.pid})" title="Remove from cart">
              <i class="bi bi-trash"></i> Remove
            </button>
            <button type="button" class="btn btn-outline-secondary btn-sm" onclick="moveToWishlist(${producto.pid})" title="Move to wishlist">
              <i class="bi bi-heart"></i> Wishlist
            </button>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-3 mb-lg-0">
          <div class="d-flex align-items-center mb-3">
            <label class="form-label me-2 mb-0">Quantity:</label>
            <div class="input-group" style="max-width: 150px">
              <button class="btn btn-outline-secondary" type="button" onclick="updateQuantity(${producto.pid}, ${quantity - 1})">-</button>
              <input type="number" class="form-control text-center" value="${quantity}" min="1" max="${producto.stock}" 
                     onchange="updateQuantity(${producto.pid}, parseInt(this.value))" />
              <button class="btn btn-outline-secondary" type="button" onclick="updateQuantity(${producto.pid}, ${quantity + 1})">+</button>
            </div>
          </div>
          <div class="text-end">
            <p class="mb-1"><small class="text-muted">Unit price: $${price.toFixed(2)}</small></p>
            <p class="mb-0"><strong class="h5">Subtotal: $${subtotal.toFixed(2)}</strong></p>
          </div>
        </div>
      </div>
      <hr class="my-3" />
    </div>
    `;
  }
  const total = calculateCartTotal();
  const totalItems = productsCart.reduce((sum, producto) => sum + (producto.quantity || 1), 0);
  
  cart.innerHTML = `
    <div class="container py-4">
      <div class="row">
        <div class="col-lg-8">
          <div class="card mb-4">
            <div class="card-header bg-light">
              <h5 class="mb-0">
                <img src="../assets/img/cart_icon.png" width="24" height="24" class="me-2" alt="Carrito">
                My Cart - ${totalItems} ${totalItems === 1 ? 'product' : 'products'}
              </h5>
            </div>
            ${renderProductsCart}
            <div class="card-footer">
              <div class="d-flex justify-content-between align-items-center">
                <button onclick="clearCart()" class="btn btn-outline-secondary">
                  <i class="bi bi-trash"></i> Clear cart
                </button>
                <a href="../pages/shop.html" class="btn btn-outline-secondary">
                  <i class="bi bi-arrow-left"></i> Continue shopping
                </a>
              </div>
            </div>
          </div>
          
          <div class="row">
            <div class="col-md-6">
              <div class="card">
                <div class="card-header">
                  <h6 class="mb-0"><i class="bi bi-truck me-2"></i>Shipping</h6>
                </div>
                <div class="card-body">
                  <p class="mb-1"><strong>Estimated delivery:</strong></p>
                  <p class="mb-0 text-muted">From: ${envioDesde}</p>
                  <p class="mb-0 text-muted">To: ${envioHasta}</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card">
                <div class="card-header">
                  <h6 class="mb-0"><i class="bi bi-credit-card me-2"></i>Payment methods</h6>
                </div>
                <div class="card-body">
                  <div class="d-flex flex-wrap">
                    <img class="me-2 mb-2" width="45px" src="../assets/img/visa.png" alt="Visa" />
                    <img class="me-2 mb-2" width="45px" src="../assets/img/amex.png" alt="American Express" />
                    <img class="me-2 mb-2" width="45px" src="../assets/img/mastercard.png" alt="Mastercard" />
                    <img class="me-2 mb-2" width="45px" src="../assets/img/mercadopago.png" alt="MercadoPago" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-lg-4">
          <div class="card mb-4">
            <div class="card-header">
              <h5 class="mb-0"><i class="bi bi-receipt me-2"></i>Order summary</h5>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between mb-2">
                <span>Products (${totalItems}):</span>
                <span>$${total.toFixed(2)}</span>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span>Shipping:</span>
                <span class="text-success">Free</span>
              </div>
              <hr>
              <div class="d-flex justify-content-between">
                <strong>Total:</strong>
                <strong class="h5 text-dark">$${total.toFixed(2)}</strong>
              </div>
              <button class="btn btn-secondary w-100 mt-3" onclick="proceedToCheckout()">
                <i class="bi bi-credit-card me-2"></i>Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Función para actualizar la cantidad de un producto
function updateQuantity(productId, newQuantity) {
  if (newQuantity < 1) {
    removeFromCart(productId);
    return;
  }
  
  const producto = productsCart.find(p => p.pid === productId);
  if (producto) {
    producto.quantity = Math.min(newQuantity, producto.stock);
    localStorage.setItem('cart', JSON.stringify(productsCart));
    updateCartCounter();
    renderCart();
  }
}

// Función para eliminar un producto del carrito
function removeFromCart(productId) {
  productsCart = productsCart.filter(p => p.pid !== productId);
  localStorage.setItem('cart', JSON.stringify(productsCart));
  updateCartCounter();
  renderCart();
  showNotification('Product removed from cart');
}

// Función para mover un producto a favoritos
function moveToWishlist(productId) {
  const producto = productsCart.find(p => p.pid === productId);
  if (producto) {
    // Agregar a wishlist
    if (!productsWishList.find(p => p.pid === productId)) {
      productsWishList.push(producto);
      localStorage.setItem('wishlist', JSON.stringify(productsWishList));
      updateWishlistCounter();
    }
    
    // Remover del carrito
    removeFromCart(productId);
    showNotification(`${producto.nombre} moved to wishlist`);
  }
}

// Función para proceder al checkout
function proceedToCheckout() {
  if (productsCart.length === 0) {
    showNotification('Your cart is empty');
    return;
  }
  window.location.href = '../pages/checkout.html';
}

// Función para limpiar el carrito
function clearCart() {
  if (confirm('Are you sure you want to clear the cart?')) {
    productsCart = [];
    localStorage.removeItem('cart');
    updateCartCounter();
    renderCart();
    showNotification('Cart cleared');
  }
}

// Hacer las funciones disponibles globalmente
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.moveToWishlist = moveToWishlist;
window.proceedToCheckout = proceedToCheckout;
window.clearCart = clearCart;
window.renderCart = renderCart;

// Inicializar el carrito cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
  // Esperar a que se cargue el cart-manager
  setTimeout(() => {
    if (typeof productsCart !== 'undefined') {
      renderCart();
    }
  }, 100);
});








