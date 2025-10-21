const filters = document.getElementById("filters");
filters.innerHTML = `
<div class="border border-2 rounded p-2">
<form action="" id="filtersForm">
<h5>Categorias</h5>
<div class="form-check">
  <label class="form-check-label">
  Categoria 1 <input class="form-check-input" type="checkbox" value="1" id="categoria1">
  </label>
</div>
<div class="form-check">
  <label class="form-check-label">
  Categoria 2 <input class="form-check-input" type="checkbox" value="2" id="categoria2">
</label>
</div>
<div class="form-check">
  <label class="form-check-label">
  Categoria 3 <input class="form-check-input" type="checkbox" value="3" id="categoria3">
</label>
</div>
<hr class="featurette-divider" />
<h5>Puntuacion</h5>
<div class="form-check">
  <input class="form-check-input" type="radio" name="score" id="score1" value="1">
  <label class="form-check-label" for="score1">
  <i class="bi bi-star-fill text-secondary"></i>
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="score" id="score2" value="2">
  <label class="form-check-label" for="score2">
  <i class="bi bi-star-fill text-secondary"></i><i class="bi bi-star-fill text-secondary"></i>
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="score" id="score3" value="3">
  <label class="form-check-label" for="score3">
  <i class="bi bi-star-fill text-secondary"></i><i class="bi bi-star-fill text-secondary"></i><i class="bi bi-star-fill text-secondary"></i>
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="score" id="score4" value="4">
  <label class="form-check-label" for="score4">
  <i class="bi bi-star-fill text-secondary"></i><i class="bi bi-star-fill text-secondary"></i><i class="bi bi-star-fill text-secondary"></i><i class="bi bi-star-fill text-secondary"></i>
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="score" id="score5" value="5">
  <label class="form-check-label" for="score5">
  <i class="bi bi-star-fill text-secondary"></i><i class="bi bi-star-fill text-secondary"></i><i class="bi bi-star-fill text-secondary"></i><i class="bi bi-star-fill text-secondary"></i><i class="bi bi-star-fill text-secondary"></i>
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="score" id="scoreAny" value="" checked>
  <label class="form-check-label" for="scoreAny">Cualquiera</label>
</div>
<hr class="featurette-divider" />
<h5>Precio</h5>
<label class="form-label" id="range">Seleccione un rango:</label>
<input type="number" class="form-control mb-1" id="preciomin" placeholder="min">
<input type="number" class="form-control" id="preciomax" placeholder="max">
<hr class="featurette-divider" />
<h5>Peso</h5>
<label class="form-label" id="rango">Seleccione un rango:</label>
<input type="number" class="form-control mb-1" id="pesomin" placeholder="min">
<input type="number" class="form-control" id="pesomax" placeholder="max">
<div class="mt-2 d-flex justify-content-between">
  <button type="button" id="applyFilters" class="btn btn-primary btn-sm">Aplicar</button>
  <button type="button" id="clearFilters" class="btn btn-secondary btn-sm">Limpiar</button>
</div>
</form>
`;
