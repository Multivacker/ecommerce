const ordering = document.getElementById("ordering");
ordering.innerHTML = `
<div class="d-flex justify-content-between text-black-50">
  <span>
    <select id="orderingSelect" class="form-select form-select-sm">
      <option value="default">Orden por defecto</option>
      <option value="price-asc">Precio menor a mayor</option>
      <option value="price-desc">Precio mayor a menor</option>
      <option value="newest">Últimos productos</option>
    </select>
  </span>
  <span>
    <a><img src="../assets/img/cuadricula_icon.png" alt=""></a>
    <a><img src="../assets/img/lista_icon.png" alt=""></a>
  </span>
</div>
`;