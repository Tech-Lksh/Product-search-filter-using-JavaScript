const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product");

searchInput.addEventListener("keyup", function () {
  let filter = searchInput.value.toLowerCase();

  products.forEach((product) => {
    let productName = product.querySelector("h3").textContent.toLowerCase();
    if (productName.includes(filter)) {
      product.classList.remove("hidden");
    } else {
      product.classList.add("hidden");
    }
  });
});
