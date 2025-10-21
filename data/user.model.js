class Usuario {
  constructor(usuarioid, nombre, username, password, email, direccion, telefono, tipo) {
    this.usuarioid = usuarioid;
    this.nombre = nombre;
    this.username = username;
    this.password = password;
    this.email = email;
    this.direccion = direccion;
    this.telefono = telefono;
    this.tipo = tipo;

    //Getters
    this.getUsuarioId = function(){return this.usuarioid};
    this.getNombre = function(){return this.nombre};
    this.getUsername = function(){return this.username};
    this.getPassword = function(){return this.password};
    this.getEmail = function(){return this.email};
    this.getDireccion= function(){return this.direccion};
    this.getTelefono = function(){return this.telefono};
    this.getTipo = function(){return this.tipo};
  }
}
