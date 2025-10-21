const destacados = document.getElementById("destacados");
let featuredProducts = [];

// Cargar productos destacados (score >= 4)
fetch("../data/product.json")
  .then((response) => response.json())
  .then((data) => {
    // Filtrar productos con score >= 4 y tomar solo los primeros 4
    const destacados = data
      .filter(producto => producto.score >= 4)
      .slice(0, 4);
    
    featuredProducts = destacados;
    renderFeaturedProducts();
  })
  .catch((error) => console.error("Error:", error));

function renderFeaturedProducts() {
  let featuredHTML = '<h3>FEATURED PRODUCTS</h3>';
  featuredHTML += '<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">';
  
  featuredProducts.forEach(producto => {
    // Generar estrellas dinámicamente
    let starsHTML = "";
    for (let i = 1; i <= 5; i++) {
      if (i <= producto.score) {
        starsHTML += '<i class="bi bi-star-fill text-warning"></i>';
      } else {
        starsHTML += '<i class="bi bi-star-fill text-secondary"></i>';
      }
    }
    
    featuredHTML += `
      <div class="col">
        <div class="card">
          <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
          <div class="card-body">
            <h5 class="card-title d-flex justify-content-center">${producto.nombre}</h5>
            <p class="card-text d-flex justify-content-center text-center text-black-50">${producto.descripcion}</p>
            <div class="stats mt-1 fs-6">
              <hr class="featurette-divider" />
              <div class="d-flex justify-content-between text-black-50"><span>Categoria:</span><span class="fw-bold">${producto.categoria}</span></div>
              <div class="d-flex justify-content-between text-black-50"><span>Peso:</span><span>${producto.peso} grs.</span></div>
              <div class="d-flex justify-content-between text-black-50"><span>Medidas:</span><span>${producto.medidas}</span></div>
              <div class="d-flex justify-content-between text-black-50"><span>Stock:</span><span>${producto.stock}</span></div>
              <hr class="featurette-divider" />
            </div>
            <div class="d-flex justify-content-between total font-weight-bold mt-1"><span>Precio final:</span><span class="fs-4">$${producto.precio}</span></div>
            <div class="d-flex justify-content-between total font-weight-bold mt-1"><span>${starsHTML}</span><span></span></div>
            <div class="d-flex justify-content-between total font-weight-bold mt-1">
              <span><button onclick="addProductToWishList(${producto.pid})" class="btn btn-secondary"><img src="../assets/img/heart_icon.svg" style="width: 20px" alt=""></button></span>
              <span><button class="btn btn-secondary" onclick="addProductToCart(${producto.pid})"><i class="bi bi-cart-fill"></i> Comprar</button></span>
              <span><button class="btn btn-secondary"><i class="bi bi-eye-fill"></i></button></span>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  
  featuredHTML += '</div>';
  
  if (destacados) {
    destacados.innerHTML = featuredHTML;
  }
}