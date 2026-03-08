let cart = 0;

fetch('products.json')
.then(res => res.json())
.then(products => {

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

});

function addToCart(){
cart++;
document.getElementById("cart-count").innerText = cart;
}
