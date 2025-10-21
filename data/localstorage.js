const myLocalStorage = window.localStorage;

function saveCatalogueInLocalStorage() {
  myLocalStorage.setItem("catalogue", JSON.stringify(catalogue));
}

function addCatalogueToLocalStorage() {
  myLocalStorage.getItem("catalogue") !== null
    ? (carrito = JSON.parse(myLocalStorage.getItem("catalogue")))
    : (carrito = []);
}

function saveCartInLocalStorage() {
  myLocalStorage.setItem("productsCart", JSON.stringify(productsCart));
}

function addCartToLocalStorage() {
  myLocalStorage.getItem("productsCart") !== null
    ? (carrito = JSON.parse(myLocalStorage.getItem("productsCard")))
    : (carrito = []);
}

function addWhishListToLocalStorage() {
  myLocalStorage.setItem("productsWishList", JSON.stringify(productsWishList));
}

function addWhishListToLocalStorage() {
  myLocalStorage.getItem("productsWishList") !== null
    ? (listaDeDeseos = JSON.parse(myLocalStorage.getItem("productsWishList")))
    : (listaDeDeseos = []);
}

saveCatalogueInLocalStorage();
addCatalogueToLocalStorage();
saveCartInLocalStorage();
addCartToLocalStorage();
addWhishListToLocalStorage();


 
