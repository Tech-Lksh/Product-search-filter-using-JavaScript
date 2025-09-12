const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product");

searchInput.addEventListener("keyup", function () {
  let filter = searchInput.value.toLowerCase();

  products.forEach((dets) => {
    let productName = dets.querySelector("h3").textContent.toLowerCase();
    if (productName.includes(filter)) {
      dets.classList.remove("hidden");
    } else {
      dets.classList.add("hidden");
    }
  });
});
