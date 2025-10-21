Feature: Búsqueda de productos
  Como visitante del ecommerce
  Quiero buscar productos por nombre y categoría
  Para encontrar rápidamente lo que necesito

  Background:
    Given que estoy en la página de inicio

  Scenario: Buscar por término exacto
    When busco "zapatillas"
    Then veo resultados que contienen "zapatillas"
    And la cantidad de resultados es mayor a 0

  Scenario: Buscar por categoría desde el menú
    When navego a la categoría "Hombre > Calzado"
    Then la página muestra productos de la categoría "Calzado"

  Scenario: Sin resultados
    When busco "asdfgh12345"
    Then veo el mensaje "No se encontraron resultados"


