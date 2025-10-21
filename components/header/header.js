const header = document.getElementById("header");
header.innerHTML = `
    <div class="container">
        <!-- Top bar: logo - search - auth buttons -->
        <div class="d-flex flex-wrap align-items-center justify-content-between py-2">
            <a class="d-flex align-items-center text-decoration-none" href="/">
                <img src="./assets/img/ecommerce_icon.png" alt="logo" width="60" height="48" class="me-2">
                <span class="h5 mb-0">eCommerce</span>
            </a>

                    <!-- Search: visible inline on lg+, collapsed behind a button on small screens -->
                    <div class="d-flex align-items-center flex-fill mx-3 my-2 my-lg-0">
                        <form class="d-none d-lg-flex flex-fill" role="search">
                            <input class="form-control" type="search" placeholder="Search..." aria-label="Search">
                        </form>

                        <!-- Button visible on small screens to toggle the search input -->
                        <button class="btn btn-outline-secondary d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#mobileSearch" aria-expanded="false" aria-controls="mobileSearch">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>

                    <div class="d-flex align-items-center gap-2">
                        <!-- Desktop: full buttons -->
                        <a href="./pages/login.html" class="btn btn-outline-dark d-none d-lg-inline">Login</a>
                        <a href="./pages/register.html" class="btn btn-outline-dark d-none d-lg-inline">Sign up</a>

                        <!-- Mobile: circular avatar icons to save horizontal space -->
                        <a href="./pages/login.html" class="btn btn-light rounded-circle d-inline-flex d-lg-none align-items-center justify-content-center" style="width:40px; height:40px;">
                            <i class="bi bi-person" aria-hidden="true"></i>
                            <span class="visually-hidden">Login</span>
                        </a>
                        <a href="./pages/register.html" class="btn btn-light rounded-circle d-inline-flex d-lg-none align-items-center justify-content-center" style="width:40px; height:40px;">
                            <i class="bi bi-person-plus" aria-hidden="true"></i>
                            <span class="visually-hidden">Sign up</span>
                        </a>
                    </div>
        </div>

            <!-- Mobile collapsed search area -->
            <div class="collapse" id="mobileSearch">
                <div class="container">
                    <form class="d-flex py-2" role="search">
                        <input class="form-control" type="search" placeholder="Search..." aria-label="Search">
                    </form>
                </div>
            </div>

            <!-- Bottom nav: pages + icons -->
        <nav class="navbar navbar-expand-lg bg-body-tertiary p-0">
            <div class="container-fluid p-0">
                <button class="navbar-toggler ms-0" type="button" data-bs-toggle="collapse" data-bs-target="#secondaryNavbar" aria-controls="secondaryNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="secondaryNavbar">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link px-2" href="#">Home</a></li>
                        <li class="nav-item"><a class="nav-link px-2" href="./pages/categories.html">Categories</a></li>
                        <li class="nav-item"><a class="nav-link px-2" href="./pages/shop.html">Shop</a></li>
                        <li class="nav-item"><a class="nav-link px-2" href="./pages/contacts.html">Contact</a></li>
                        <li class="nav-item"><a class="nav-link px-2" href="./pages/faqs.html">FAQs</a></li>
                    </ul>

                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                        <li class="nav-item ms-2">
                            <a class="nav-link" href="./pages/orders.html"><img src="./assets/img/bill_icon.png" alt="" width="24"></a>
                        </li>
                        <li class="nav-item position-relative ms-2">
                            <a class="nav-link" href="./pages/wishlist.html"><img src="./assets/img/wishlist_icon.png" alt="" width="24"><span id="countproductwishlist"></span></a>
                        </li>
                        <li class="nav-item position-relative ms-2">
                            <a class="nav-link" href="./pages/cart.html"><img src="./assets/img/cart_icon.png" alt="" width="24"><span id="countproductcart"></span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
`;

// Los contadores se actualizarán automáticamente por cart-manager.js cuando se carguen los datos del localStorage
