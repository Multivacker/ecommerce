Feature: Checkout como invitado
  Como visitante del ecommerce
  Quiero completar el checkout sin crear cuenta
  Para finalizar mi compra de manera rápida

  Background:
    Given que tengo 2 productos en el carrito
    And estoy en la página del carrito

  Scenario: Completar datos de envío y pago
    When inicio el checkout como invitado
    And ingreso mis datos de envío:
      | campo          | valor              |
      | Nombre         | Juan Perez         |
      | Dirección      | Av. Siempre Viva 742 |
      | Ciudad         | Buenos Aires       |
      | Código Postal  | 1000               |
      | Teléfono       | 1100000000         |
    And selecciono el método de envío "Envío estándar"
    And selecciono el método de pago "Tarjeta de crédito"
    And finalizo la compra
    Then veo la confirmación de pedido con número

  Scenario: Validaciones obligatorias
    When inicio el checkout como invitado
    And dejo vacíos los campos obligatorios
    And intento continuar al paso de pago
    Then veo mensajes de error en los campos obligatorios

  Scenario: Calcular totales con envío y descuentos
    When aplico el cupón "BIENVENIDA10"
    And selecciono el método de envío "Envío express"
    Then el total del pedido refleja envío y descuento aplicados


