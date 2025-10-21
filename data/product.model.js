class Product {
    constructor(pid, nombre, descripcion, imagen, stock, precio, categoria, peso, medidas, score) {
      this.pid = parseInt(pid);
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.imagen = imagen;
      this.stock = parseInt(stock);
      this.precio = parseFloat(precio);
      this.categoria = categoria;
      this.peso = parseFloat(peso);
      this.medidas = medidas;
      this.score = score;

      //Getters
      this.getPid = function(){return this.pid};
      this.Nombre = function(){return this.nombre};
      this.getDescripcion = function(){return this.descripcion};
      this.getImagen = function(){return this.imagen};
      this.getStock= function(){return this.stock};
      this.getPrecio = function(){return this.precio};
      this.getCategoria = function(){return this.categoria};
      this.getPeso= function(){return this.peso};
      this.getMedidas= function(){return this.medidas};
      this.getScore = function(){return this.score};
    }
  }