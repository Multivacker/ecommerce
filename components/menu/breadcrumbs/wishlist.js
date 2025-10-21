const breadcrumb = document.getElementById("breadcrumb");
breadcrumb.innerHTML = `
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="../index.html">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">Wishlist</li>
    </ol>
  </nav>
`;
