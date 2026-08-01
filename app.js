function allFurniture(a, b, c) {
    this.name = a;
    this.price = b;
    this.src = c;
}
var Livingroom = [
    new allFurniture("Luxury Velvet Sofa", "$899", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKLt562fB2EY7obh4Vg-DxlGfdku_ttyW9trR8D03exA&s=10"),
    new allFurniture("Modern Sectional Sofa", "$1,299", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScwajoxcB0RJkIahFqI3rjeE32DmX9u6oihhjlMtPQuA&s=10"),
    new allFurniture("Round Coffee Table", "$250", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlsYVu6O2L3jTPZD1r8nFmQtjcK1k643aL-Clc9WnpuQ&s=10"),
    new allFurniture("Elegant TV", "$300", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtujgyTNFbkL3yEZM9XzIaYYqLi_lL_Pa9JR_t0pu3VQ&s=10"),
];

var bedroom = [
    new allFurniture("King Size WoodenBed", "$999", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFRTpyK97Y1jMghzgp7cIM96cmMufWNQDrkZ2C4D_ZGg&s=10"),
    new allFurniture("Modern Wardrobet", "$750", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvByoJR3LxBK323AHcga_1ROI-kfhAO-xr2Fgh_i8D4g&s=10"),
    new allFurniture("Bedside Table", "$149", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzehwAadIL5B81OWIv_9VSSLPyUjw3o6gWZdY5GtepvQ&s=10"),
    new allFurniture("Luxury Dressing Table", "$450", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSm5jvaORbuiLU0a5Ld-aRsfmqRkEO1TrVybDGS3v3lw&s"),

];
var dining = [
    new allFurniture("6-Seater Dining Table", "$899", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyaCXebYIDhtTyszJmtBH1Ws_72vWIFeLGjaFVVuakxg&s=10"),
    new allFurniture("Wooden Dining Table", "$700", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQj5Pz3q9mmIPf1VtZbYjo-eOJ2MWChSTaSqHHJvPJbA&s=10"),
    new allFurniture("Buffet Storage Cabinet", "$800", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzNFMIbFsuT2uCAHxeGHjH9d6cQDzv0g5hkgUC9w2Q8g&s=10"),
    new allFurniture("Modern Bar Stool", "$150", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDJH4AXUyr98BCmkBlpJiydTVZaXbZ0XV32RTcBDdt4A&s=10"),
];
var office = [
    new allFurniture("Executive Office Desk", "$549", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy4nMzHC5w4e3HoIOhMxjhT7gQx-HLlqwu6Dfwf7o8Ew&s=10"),
    new allFurniture("Ergonomic Office Chair", "$300", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn8exvg8VRLTreu6mcS0Bwxpa3CpDicI_6l3dpV3bgZA&s=10"),
    new allFurniture("Wooden Bookshelf", "$349", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAFL2rp4qjkqSId03T-75K-8zVeZrjQt_IRXlhjfTUEw&s=10"),
];

allFurniture.prototype.renderCard = function () {
    return `

     <div class="col">
    <div class="card h-100">
      <img src="${this.src}" class="card-img-top furniture-img" alt="...">
      <div class="card-body">
        <h5 class="card-title">${this.name.toUpperCase()}</h5>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Price:${this.price}</small>
 <button onclick='addToCart(${JSON.stringify(this)})'
        class="bg-black text-white px-2 py-2 rounded border-0">
        Add to Cart
        </button>
      </div>
    </div>
  </div>
          `
};
var ourProducts = document.getElementById("ourproducts");
for (var product of Livingroom) {
    ourProducts.innerHTML += product.renderCard();
}
for (var product of bedroom) {
    ourProducts.innerHTML += product.renderCard();
}
for (var product of dining) {
    ourProducts.innerHTML += product.renderCard();
}
for (var product of office) {
    ourProducts.innerHTML += product.renderCard();
}

var cart = [];

function addToCart(product) {

    cart.push(product);

    showCart();
}

function showCart() {

    var cartItems = document.getElementById("cartItems");

    cartItems.innerHTML = "";

    for (var item of cart) {

        cartItems.innerHTML += `
        <div class="d-flex align-items-center gap-2 border p-2 mb-2">

        <img src="${item.src}" width="50">

        <div>
        <div>${item.name}</div>
        <div>${item.price}</div>
        </div>

        </div>
        `;
    }
}



function addToCart(product) {

    cart.push(product);

    var carousel = document.getElementById("carouselExampleSlidesOnly");
    if (carousel) {
        carousel.style.display = "none";
    }
    var productsSection = document.getElementById("ourproducts");
    if (productsSection) {
        productsSection.style.display = "none";
    }
    var mainContent = document.querySelector(".container") || document.body;
    mainContent.innerHTML = `
    
        <h1 class="text-center productname mt-4">
        Product Added Successfully!
        </h1>
        <div class="card mt-4 p-4 shadow-lg mx-auto"
        style="max-width: 500px;
        border-radius: 15px;
        background: #c75555;">

            <img src="${product.src}"
            class="card-img-top mx-auto my-5"
            style="max-width: 350px;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            object-fit: cover:
            border:2px solid black">

            <div class="card-body text-center">

                <h3 class="card-title fw-bold mt-2">
                ${product.name.toUpperCase()}
                </h3>

                <div class="mt-3">
                    <h4 class="text-success fw-bold m-0 p-3"
                    style="background: #ffffff;
                    border-radius: 10px;">
                    Price: ${product.price}
                    </h4>
                </div>
                <button onclick="location.reload()" class="btn btn-warning btn-lg mt-4 w-100 fw-bold"> Continue Shopping </button>

            </div>

        </div>
    `;
}

