const categorias = document.getElementById("categorias");

// Cargar productos y mostrar un producto representativo por cada categoria
fetch('../data/product.json')
  .then(r=>r.json())
  .then(list=>{
    // Obtener categorias únicas
    const map = new Map();
    list.forEach(p=>{
      if(!map.has(p.categoria)) map.set(p.categoria, p);
    });

    let html = '<h3>Categories</h3>';
    html += '<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">';
    for(const [cat, producto] of map.entries()){
      html += `
        <div class="col">
          <div class="card h-100">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}" style="height:180px; object-fit:cover;">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Categoria ${producto.categoria}</h5>
              <p class="card-text text-black-50 small">${producto.nombre}</p>
              <div class="mt-auto d-flex justify-content-between align-items-center">
                <span class="fw-bold">$${producto.precio}</span>
                <div>
                  <button class="btn btn-secondary btn-sm" onclick="toItemDetail(${producto.pid})"><i class=\"bi bi-eye-fill\"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
    html += '</div>';
    if(categorias) categorias.innerHTML = html;
  })
  .catch(()=>{ if(categorias) categorias.innerHTML = '<p class="text-muted">No categories available.</p>'; });