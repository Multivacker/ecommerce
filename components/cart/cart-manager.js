// Variables globales para el carrito y wishlist
let productsCart = [];
let productsWishList = [];

// Función para actualizar el contador del carrito en el header
function updateCartCounter() {
  const countproductcart = document.getElementById("countproductcart");
  if (countproductcart) {
    countproductcart.innerText = productsCart.length;
    
    // Agregar animación cuando se actualiza
    countproductcart.classList.add('cart-badge-animation');
    setTimeout(() => {
      countproductcart.classList.remove('cart-badge-animation');
    }, 300);
  }
}

// Función para actualizar el contador del wishlist en el header
function updateWishlistCounter() {
  const countproductwishlist = document.getElementById("countproductwishlist");
  if (countproductwishlist) {
    countproductwishlist.innerText = productsWishList.length;
    
    // Agregar animación cuando se actualiza
    countproductwishlist.classList.add('cart-badge-animation');
    setTimeout(() => {
      countproductwishlist.classList.remove('cart-badge-animation');
    }, 300);
  }
}

// Función para agregar producto al carrito
function addProductToCart(productId, quantity = 1) {
  // Buscar el producto en el catálogo (necesitamos acceso a la variable catalogue)
  const producto = window.catalogue ? window.catalogue.find(p => p.pid === productId) : null;
  
  if (producto) {
    // Verificar si el producto ya está en el carrito
    const existingProduct = productsCart.find(p => p.pid === productId);
    const qtyToAdd = Number(quantity) || 1;

    // Validar stock disponible
    const currentInCart = existingProduct ? (existingProduct.quantity || 0) : 0;
    if ((currentInCart + qtyToAdd) > producto.stock) {
      showNotification(`Cannot add ${qtyToAdd} items. Only ${producto.stock - currentInCart} left in stock.`);
      return;
    }

    if (existingProduct) {
      if (!existingProduct.quantity) existingProduct.quantity = 0;
      existingProduct.quantity += qtyToAdd;
    } else {
      const productToAdd = { ...producto, quantity: qtyToAdd };
      productsCart.push(productToAdd);
    }
    
  // Guardar en localStorage
  localStorage.setItem('cart', JSON.stringify(productsCart));
    
    // Actualizar contador
    updateCartCounter();
    
    // Mostrar notificación
      showNotification(`${producto.nombre} added to cart!`);
    
    console.log("Producto agregado al carrito:", producto.nombre);
    console.log("Carrito actual:", productsCart);
  } else {
    console.error("Producto no encontrado con ID:", productId);
  }
}

// Función para agregar producto a wishlist
function addProductToWishList(productId) {
  // Buscar el producto en el catálogo
  const producto = window.catalogue ? window.catalogue.find(p => p.pid === productId) : null;
  
  if (producto) {
    // Verificar si el producto ya está en la wishlist
    const existingProduct = productsWishList.find(p => p.pid === productId);
    
    if (!existingProduct) {
      productsWishList.push(producto);
      
      // Guardar en localStorage
      localStorage.setItem('wishlist', JSON.stringify(productsWishList));
      
      // Actualizar contador
      updateWishlistCounter();
      
      // Mostrar notificación
      showNotification(`${producto.nombre} added to wishlist!`);
      
      console.log("Producto agregado a wishlist:", producto.nombre);
      console.log("Wishlist actual:", productsWishList);
    } else {
      showNotification(`${producto.nombre} is already in wishlist`);
    }
  } else {
    console.error("Producto no encontrado con ID:", productId);
  }
}

// Función para mostrar notificaciones
function showNotification(message) {
  // Crear elemento de notificación
  const notification = document.createElement('div');
  notification.className = 'alert alert-success alert-dismissible fade show position-fixed';
  notification.style.top = '20px';
  notification.style.right = '20px';
  notification.style.zIndex = '9999';
  notification.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  `;
  
  // Agregar al body
  document.body.appendChild(notification);
  
  // Remover después de 3 segundos
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 3000);
}

// Función para cargar datos del localStorage
function loadCartFromStorage() {
  const savedCart = localStorage.getItem('cart');
  const savedWishlist = localStorage.getItem('wishlist');
  
  if (savedCart) {
    productsCart = JSON.parse(savedCart);
  }
  
  if (savedWishlist) {
    productsWishList = JSON.parse(savedWishlist);
  }
  
  // Actualizar contadores
  updateCartCounter();
  updateWishlistCounter();
}

// Función para limpiar el carrito
function clearCart() {
  productsCart = [];
  localStorage.removeItem('cart');
  updateCartCounter();
}

// Función para obtener el total del carrito
function getCartTotal() {
  return productsCart.reduce((total, producto) => {
    const price = typeof producto.precio === 'string' ? parseFloat(producto.precio) : producto.precio;
    const quantity = producto.quantity || 1;
    return total + (price * quantity);
  }, 0);
}

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
  loadCartFromStorage();
});

// Hacer las funciones disponibles globalmente
window.addProductToCart = addProductToCart;
window.addProductToWishList = addProductToWishList;
window.updateCartCounter = updateCartCounter;
window.updateWishlistCounter = updateWishlistCounter;
window.clearCart = clearCart;
window.getCartTotal = getCartTotal;
