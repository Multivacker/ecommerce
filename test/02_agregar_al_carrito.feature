Feature: Agregar productos al carrito
  Como visitante del ecommerce
  Quiero agregar productos al carrito
  Para poder comprarlos luego

  Background:
    Given que estoy en la página de inicio

  Scenario: Agregar un producto desde el listado
    Given que estoy en la categoría "Mujer > Indumentaria"
    When agrego al carrito el primer producto listado
    Then el ícono del carrito muestra 1 ítem

  Scenario: Seleccionar talla y color antes de agregar
    Given que estoy en la página de detalle de producto "Remera Básica"
    When selecciono la talla "M" y el color "Negro"
    And agrego el producto al carrito
    Then veo un mensaje de confirmación "Producto agregado al carrito"
    And el carrito contiene el producto "Remera Básica" en talla "M" y color "Negro"

  Scenario: Evitar agregar si no hay stock
    Given que estoy en la página de detalle de producto "Buzo Oversize"
    And el producto no tiene stock
    When intento agregar el producto al carrito
    Then veo el mensaje "Sin stock"
    And el carrito no suma nuevos ítems


