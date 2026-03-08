# AthleteX-
<!DOCTYPE html>
<html lang="ar">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AthleteX</title>
<style>
body{
  font-family: Arial, sans-serif;
  background:#f4f4f4;
  margin:0;
  text-align:center;
  direction:rtl;
}
header{
  background:#111;
  color:white;
  padding:20px;
  font-size:28px;
  font-weight:bold;
}
.cart{
  background:#222;
  color:white;
  padding:10px;
  font-size:16px;
}
.products{
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:20px;
  padding:30px;
}
.product{
  background:white;
  border-radius:12px;
  padding:15px;
  width:220px;
  box-shadow:0 4px 10px rgba(0,0,0,0.1);
}
.product img{
  width:100%;
  border-radius:10px;
}
button{
  background:#111;
  color:white;
  border:none;
  padding:10px 15px;
  border-radius:8px;
  cursor:pointer;
  font-size:14px;
}
button:hover{
  opacity:0.85;
}
footer{
  margin-top:30px;
  padding:15px;
  background:#111;
  color:white;
  font-size:14px;
}
</style>
</head>
<body>

<header>
AthleteX
</header>

<div class="cart">
🛒 السلة: <span id="cart-count">0</span>
</div>

<section class="products" id="products"></section>

<footer>
© 2026 جميع الحقوق محفوظة - AthleteX
</footer>

<script>
// المنتجات جاهزة هنا تقدر تضيف أو تعدل
const products = [
  {name: "حذاء جودو", price: 50, image: "https://via.placeholder.com/220"},
  {name: "قميص رياضي", price: 25, image: "https://via.placeholder.com/220"},
  {name: "حزام", price: 15, image: "https://via.placeholder.com/220"}
];

let cart = 0;
const container = document.getElementById("products");

products.forEach(p => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${p.image}">
    <h3>${p.name}</h3>
    <p>${p.price}$</p>
    <button onclick="addToCart()">شراء</button>
  `;
  container.appendChild(div);
});

function addToCart(){
  cart++;
  document.getElementById("cart-count").innerText = cart;
}
</script>

</body>
</html>
