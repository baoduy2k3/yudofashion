var product = [
    {
        id: "SP01",
        name: "Áo thun",
        img: "sale1.png",
        price_sale: 2000,
        price: 1500,
    },
    {
        id: "SP02",
        name: "Áo Vest Blue",
        img: "sale2.png",
        price_sale: 1800,
        price: 1300,
    },
    {
        id: "SP03",
        name: "Áo Vest Black",
        img: "sale3.png",
        price_sale: 2200,
        price: 1900,
    },
    {
        id: "SP04",
        name: "Áo sơ mi",
        img: "sale4.png",
        price_sale: 1900,
        price: 1600,
    },
    {
        id: "SP05",
        name: "Áo sơ mi tay dài",
        img: "sale5.png",
        price_sale: 1500,
        price: 1200,
    },
    {
        id: "SP06",
        name: "Áo hoodie Nam",
        img: "sale6.png",
        price_sale: 3000,
        price: 2500,
    },
    {
        id: "SP07",
        name: "Đầm(A) tay lững",
        img: "female3.png",
        price_sale: 2000,
        price: 2000,
    },
    {
        id: "SP08",
        name: "Áo khoác dạ nữ",
        img: "female7.png",
        price_sale: 1800,
        price: 1200,
    },

];

var prod = [];
function saveProduct() {
    sessionStorage.setItem('shopping', JSON.stringify(prod));
}

// đẩy mảng product vào localStorange
function Save() {
    localStorage.setItem('productSale', JSON.stringify(product))
}

// lấy sản phẩm
function load(){
    product = JSON.parse(localStorage.getItem('productSale'));
} 

// print to html
if (localStorage.getItem("productSale") != null) {
    load();
}
if (localStorage.getItem("productSale") == null) {
    Save();
}

var listLocal = function() {
    var listProduct = "";
    for(var i in product) {
        var data = JSON.parse(JSON.stringify(product[i]));
        var listProduct = '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 sanPham mb-4">';
        listProduct += '<div class="nd-sp">';
        listProduct += '<a href="#" class="proo" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" data-price-sale="'+data.price_sale+'">';
        listProduct += '<div class="img-sp mb-3">';
        listProduct += '<img src="./assets/img/'+ data.img +'" alt="hinh-anh-san-pham">';
        listProduct += '</div>';
        listProduct += '<div class="info-sp text-center">';
        listProduct += '<h5 class="name">'+ data.name +'</h5>';
        listProduct += '<p class="price" style="color: #ffb41d;"><del>'+ data.price_sale +'</del></p>';
        listProduct += '<p class="price-sale">'+ data.price +'</p>';
        listProduct += '</div>';
        listProduct += '</a>';
        listProduct += '<button class="mt-2 mb-3 add-to-cart add-cart" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" data-price-sale="'+data.price_sale+'">Thêm vào giỏ hàng</button>';
        listProduct += '</div>';
        listProduct += '</div>';

        document.getElementById("products").innerHTML += listProduct;
    }
    Save();
}
listLocal();

// Xoá dữ liệu trên localStorage
// localStorage.clear();