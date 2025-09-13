const searchInput = document.getElementById("searchInput");
const productList = document.getElementById("productList");

// Dummy product data
const productsData = [
  {
    "name": "iPhone 15",
    "img": "https://m.media-amazon.com/images/I/71657TiFeHL._SX679_.jpg",
    "price": "₹79,900"
  },
  {
    "name": "Samsung Galaxy S24",
    "img": "https://m.media-amazon.com/images/I/71RVuBs3q9L._SX679_.jpg",
    "price": "₹74,999"
  },
  {
    "name": "MacBook Pro M3",
    "img": "https://m.media-amazon.com/images/I/61bX2AoGj2L._SX679_.jpg",
    "price": "₹1,69,900"
  },
  {
    "name": "Dell XPS Laptop",
    "img": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/dell-premium/da16250/media-gallery/laptop-dell-da16250t-sl-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=476&wid=656&qlt=100,1&resMode=sharp2&size=656,476&chrss=full"


,
    "price": "₹1,25,000"
  },
  {
    "name": "AirPods Pro 2",
    "img": "https://m.media-amazon.com/images/I/61SUj2aKoEL._SX679_.jpg",
    "price": "₹24,900"
  },
  {
    "name": "Apple Watch Series 9",
    "img": "https://a.scdn.gr/images/sku_main_images/045795/45795713/xlarge_20240313144405_apple_watch_series_9_aluminium_45mm_adiavrocho_me_palmografo_midnight_me_midnight_sport_band_m_l.jpeg",
    "price": "₹41,900"
  },
  {
    "name": "Sony WH-1000XM5",
    "img": "https://m.media-amazon.com/images/I/51aXvjzcukL._SL1500_.jpg",
    "price": "₹29,990"
  },
  {
    "name": "iPad Pro M4",
    "img": "https://m.media-amazon.com/images/I/71bBrftkB+L._SL1500_.jpg",
    "price": "₹99,900"
  },
  {
    "name": "OnePlus 12",
    "img": "https://m.media-amazon.com/images/I/71YzJwmRFCL._SL1500_.jpg",
    "price": "₹64,999"
  },
  {
    "name": "Logitech MX Master 3S",
    "img": "https://m.media-amazon.com/images/I/61ni3t1ryQL._SX679_.jpg",
    "price": "₹9,999"
  }
];




// Agar localStorage me product list nahi hai to set kar do
if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(productsData));
}

// LocalStorage se data fetch
let products = JSON.parse(localStorage.getItem("products"));

// Products ko UI me render karna
// Products ko UI me render karna
function renderProducts(dets) {
  productList.innerHTML = ""; 
  dets.forEach((e) => {
    console.log(e); // <-- yahi check karega price aa raha hai ya nahi
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${e.img}" alt="${e.name}">
      <h3>${e.name}</h3>
      <p class="price">${e.price}</p>
    `;
    productList.appendChild(div);
  });
}
// Test call
renderProducts(products);




// Initial render
renderProducts(products);

// Search filter
searchInput.addEventListener("keyup", function () {
  let filter = searchInput.value.toLowerCase();

  let filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(filter)
  );

  renderProducts(filteredProducts);
});


localStorage.clear()
