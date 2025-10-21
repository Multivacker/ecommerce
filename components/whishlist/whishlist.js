let wishlist = document.getElementById("wishlist");
let renderProductsWishlist = "";

// Función para renderizar la wishlist
function renderWishlist() {
  renderProductsWishlist = "";
  
  if (!productsWishList || productsWishList.length === 0) {
    wishlist.innerHTML = `
      <div class="container py-5">
        <div class="row d-flex justify-content-center">
          <div class="col-md-8">
            <div class="card">
              <div class="card-body text-center py-5">
                <h3 class="text-muted">Your wishlist is empty</h3>
                <p class="text-muted">Add some products to start creating your favorites list</p>
                <a href="../pages/shop.html" class="btn btn-secondary">Go to shop</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return;
  }
  
  for (const producto of productsWishList) {
    // Generar estrellas dinámicamente
    let starsHTML = "";
    for (let i = 1; i <= 5; i++) {
      if (i <= producto.score) {
        starsHTML += '<i class="bi bi-star-fill text-warning"></i>';
      } else {
        starsHTML += '<i class="bi bi-star-fill text-secondary"></i>';
      }
    }
    
    renderProductsWishlist += `
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}" style="height: 250px; object-fit: cover;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text text-muted small">${producto.descripcion}</p>
            
            <div class="stats mt-2 mb-3">
              <div class="d-flex justify-content-between text-black-50 small mb-1">
                <span>Category:</span><span class="fw-bold">${producto.categoria}</span>
              </div>
              <div class="d-flex justify-content-between text-black-50 small mb-1">
                <span>Weight:</span><span>${producto.peso} grs.</span>
              </div>
              <div class="d-flex justify-content-between text-black-50 small mb-1">
                <span>Dimensions:</span><span>${producto.medidas}</span>
              </div>
              <div class="d-flex justify-content-between text-black-50 small mb-1">
                <span>Stock:</span><span>${producto.stock}</span>
              </div>
            </div>
            
            <div class="mt-auto">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <span class="h5 text-dark mb-0">$${producto.precio}</span>
                <small class="text-muted">${starsHTML}</small>
              </div>
              
              <div class="d-grid gap-2">
                <button class="btn btn-secondary" onclick="addToCartFromWishlist(${producto.pid})">
                  <i class="bi bi-cart-fill me-2"></i>Add to cart
                </button>
                <button class="btn btn-outline-secondary" onclick="removeFromWishlist(${producto.pid})">
                  <i class="bi bi-heart-fill me-2"></i>Remove from wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  const totalWishlistValue = productsWishList.reduce((total, producto) => {
    const price = typeof producto.precio === 'string' ? parseFloat(producto.precio) : producto.precio;
    return total + price;
  }, 0);
  
  wishlist.innerHTML = `
    <div class="container py-4">
      <div class="row">
        <div class="col-12">
          <div class="card mb-4">
            <div class="card-header bg-light">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="mb-0">
                  <img src="../assets/img/wishlist_icon.png" width="24" height="24" class="me-2" alt="Favoritos">
                  My Wishlist - ${productsWishList.length} ${productsWishList.length === 1 ? 'product' : 'products'}
                </h5>
                <div class="text-end">
                  <small class="text-muted">Total value: $${totalWishlistValue.toFixed(2)}</small>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="row">
                ${renderProductsWishlist}
              </div>
            </div>
            <div class="card-footer">
              <div class="d-flex justify-content-between align-items-center">
                <button onclick="clearWishlist()" class="btn btn-outline-secondary">
                  <i class="bi bi-trash"></i> Clear list
                </button>
                <a href="../pages/shop.html" class="btn btn-outline-secondary">
                  <i class="bi bi-arrow-left"></i> Continue shopping
                </a>
                <a href="../pages/cart.html" class="btn btn-secondary">
                  <i class="bi bi-cart-fill me-2"></i>View cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Función para agregar producto al carrito desde la wishlist
function addToCartFromWishlist(productId) {
  const producto = productsWishList.find(p => p.pid === productId);
  if (producto) {
    // Agregar al carrito
    const existingProduct = productsCart.find(p => p.pid === productId);
    if (existingProduct) {
      if (!existingProduct.quantity) {
        existingProduct.quantity = 1;
      }
      existingProduct.quantity += 1;
    } else {
      const productToAdd = { ...producto, quantity: 1 };
      productsCart.push(productToAdd);
    }
    
    // Guardar en localStorage
    localStorage.setItem('cart', JSON.stringify(productsCart));
    updateCartCounter();
    
    // Remover de wishlist
    removeFromWishlist(productId);
    
    showNotification(`${producto.nombre} added to cart!`);
  }
}

// Función para remover un producto de la wishlist
function removeFromWishlist(productId) {
  productsWishList = productsWishList.filter(p => p.pid !== productId);
  localStorage.setItem('wishlist', JSON.stringify(productsWishList));
  updateWishlistCounter();
  renderWishlist();
  showNotification('Product removed from wishlist');
}

// Función para limpiar toda la wishlist
function clearWishlist() {
  if (confirm('Are you sure you want to clear your entire wishlist?')) {
    productsWishList = [];
    localStorage.removeItem('wishlist');
    updateWishlistCounter();
    renderWishlist();
    showNotification('Wishlist cleared');
  }
}

// Hacer las funciones disponibles globalmente
window.addToCartFromWishlist = addToCartFromWishlist;
window.removeFromWishlist = removeFromWishlist;
window.clearWishlist = clearWishlist;
window.renderWishlist = renderWishlist;

// Inicializar la wishlist cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
  // Esperar a que se cargue el cart-manager
  setTimeout(() => {
    if (typeof productsWishList !== 'undefined') {
      renderWishlist();
    }
  }, 100);
});