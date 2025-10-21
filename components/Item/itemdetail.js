(function(){
  const container = document.getElementById('itemdetail');

  function getQueryParam(name){
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
  }

  function renderNotFound(){
    if(container) container.innerHTML = '<div class="alert alert-warning">Producto no encontrado.</div>';
  }

  function starsHTML(score){
    let s = '';
    for(let i=1;i<=5;i++){
      if(i<=score) s += '<i class="bi bi-star-fill text-warning"></i>';
      else s += '<i class="bi bi-star-fill text-secondary"></i>';
    }
    return s;
  }

  function renderProduct(p){
    const html = `
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4 d-flex align-items-start justify-content-center p-3">
          <div class="w-100">
            <img id="mainImage" src="${p.imagen}" class="img-fluid rounded-start mb-2" alt="${p.nombre}" style="max-height:350px; width:100%; object-fit:contain;">
            <div class="d-flex gap-2">
              <!-- Thumbnails: reusar misma imagen si no hay otras disponibles -->
              <img src="${p.imagen}" class="img-thumbnail thumb-img" style="width:60px; height:60px; object-fit:cover; cursor:pointer;">
              <img src="${p.imagen}" class="img-thumbnail thumb-img" style="width:60px; height:60px; object-fit:cover; cursor:pointer;">
              <img src="${p.imagen}" class="img-thumbnail thumb-img" style="width:60px; height:60px; object-fit:cover; cursor:pointer;">
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title">${p.nombre}</h3>
            <p class="card-text text-black-50">${p.descripcion}</p>
            <div class="mb-2">${starsHTML(p.score)}</div>
            <div class="stats fs-6 mb-2">
              <div class="d-flex justify-content-between"><span>Categoria:</span><span class="fw-bold">${p.categoria}</span></div>
              <div class="d-flex justify-content-between"><span>Peso:</span><span>${p.peso} grs.</span></div>
              <div class="d-flex justify-content-between"><span>Medidas:</span><span>${p.medidas}</span></div>
              <div class="d-flex justify-content-between"><span>Stock:</span><span>${p.stock}</span></div>
            </div>
            <h4 class="text-end">$${p.precio}</h4>
            <div class="d-flex align-items-center gap-3 mt-3">
              <div class="input-group" style="width:150px;">
                <label class="input-group-text" for="qtyInput">Qty</label>
                <input type="number" id="qtyInput" class="form-control" min="1" value="1" aria-label="Quantity">
              </div>
              <div class="d-flex gap-2 ms-auto">
                <button class="btn btn-secondary" id="wishBtn"><img src="../assets/img/heart_icon.svg" style="width: 20px" alt=""></button>
                <button class="btn btn-secondary" id="buyBtn"><i class="bi bi-cart-fill"></i> Buy</button>
                <button class="btn btn-secondary" id="backBtn"><i class="bi bi-arrow-left"></i> Back</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section id="relatedProducts" class="mt-4">
      <h5>Related products</h5>
      <div id="relatedGrid" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
      </div>
    </section>
    `;
    if(container) container.innerHTML = html;

    // Attach actions
    const wishBtn = document.getElementById('wishBtn');
    const buyBtn = document.getElementById('buyBtn');
    const backBtn = document.getElementById('backBtn');
    const qtyInput = document.getElementById('qtyInput');
    const mainImage = document.getElementById('mainImage');
    const thumbs = document.querySelectorAll('.thumb-img');
    const relatedGrid = document.getElementById('relatedGrid');
    if(wishBtn) wishBtn.addEventListener('click', ()=>{ if(window.addProductToWishList) window.addProductToWishList(p.pid); });
    if(buyBtn) buyBtn.addEventListener('click', ()=>{
      const qty = Number(qtyInput?.value) || 1;
      if(qty < 1){ showLocalNotif('Cantidad inválida'); return; }
      if(qty > p.stock){ showLocalNotif(`Only ${p.stock} items in stock`); return; }
      if(window.addProductToCart) window.addProductToCart(p.pid, qty);
    });
    if(backBtn) backBtn.addEventListener('click', ()=>{ window.location.href = 'shop.html'; });

    // Thumbnail click => change main image
    thumbs.forEach(t => t.addEventListener('click', (e)=>{ if(mainImage) mainImage.src = e.target.src; }));

    // qty input validation: limit to stock
    if(qtyInput){
      qtyInput.setAttribute('max', String(p.stock));
      qtyInput.addEventListener('input', ()=>{
        let v = Number(qtyInput.value) || 1;
        if(v < 1) v = 1;
        if(v > p.stock) v = p.stock;
        qtyInput.value = v;
      });
    }

    // Render related products (misma categoria)
    function renderRelated(list){
      if(!relatedGrid) return;
      relatedGrid.innerHTML = '';
      const related = list.filter(x=>x.categoria === p.categoria && x.pid !== p.pid).slice(0,4);
      if(related.length === 0){ relatedGrid.innerHTML = '<div class="text-muted">No related products found.</div>'; return; }
      related.forEach(r=>{
        const col = document.createElement('div'); col.className = 'col';
        col.innerHTML = `
          <div class="card h-100">
            <img src="${r.imagen}" class="card-img-top" alt="${r.nombre}" style="height:120px; object-fit:cover;">
            <div class="card-body d-flex flex-column">
              <h6 class="card-title">${r.nombre}</h6>
              <p class="card-text text-black-50 small">$${r.precio}</p>
              <div class="mt-auto d-flex justify-content-between">
                <button class="btn btn-secondary btn-sm" onclick="addProductToWishList(${r.pid})"><img src=\"../assets/img/heart_icon.svg\" style=\"width: 16px\"/></button>
                <button class="btn btn-secondary btn-sm" onclick="addProductToCart(${r.pid},1)">Buy</button>
                <button class="btn btn-secondary btn-sm" onclick="toItemDetail(${r.pid})"><i class=\"bi bi-eye-fill\"></i></button>
              </div>
            </div>
          </div>
        `;
        relatedGrid.appendChild(col);
      });
    }

    // Obtener lista de productos para related: preferir window.catalogue
    if(window.catalogue && window.catalogue.length){
      // catalogue items may be Product instances
      const list = window.catalogue.map(x=>({ pid: x.pid, nombre: x.nombre, descripcion: x.descripcion, imagen: x.imagen, stock: x.stock, precio: x.precio, categoria: x.categoria }));
      renderRelated(list);
    } else {
      fetch('../data/product.json').then(r=>r.json()).then(list=> renderRelated(list)).catch(()=>{});
    }
  }

  function findProduct(pid){
    // Preferir catalogue global si ya cargado
    if(window.catalogue && window.catalogue.length){
      return window.catalogue.find(x=>x.pid === Number(pid));
    }
    // Si no, cargar data
    return fetch('../data/product.json').then(r=>r.json()).then(list=>{
      const found = list.find(x=>Number(x.pid) === Number(pid));
      if(found) return new Product(found.pid, found.nombre, found.descripcion, found.imagen, found.stock, found.precio, found.categoria, found.peso, found.medidas, found.score);
      return null;
    }).catch(()=>null);
  }

  async function init(){
    const pid = getQueryParam('pid');
    if(!pid){ renderNotFound(); return; }
    const p = await findProduct(pid);
    if(!p){ renderNotFound(); return; }
    renderProduct(p);
  }

  // Esperar a DOM ready
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

})();
