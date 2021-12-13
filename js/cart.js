var cart;

function setCartFromLS(){
    cart = JSON.parse(localStorage.getItem("CART")) || [];  
    updateCart();
}


function addToCart(product) {
    if (!cart.some(item => item.id == product.id)) cart.push(product);
    changeQty(1,product.id)
    updateCart();
    showCart();
}

function updateCart() {
    renderCartItems();
    renderSubtotal();
    localStorage.setItem("CART", JSON.stringify(cart));
}

function renderCartItems() {
    cartContent.innerHTML = "";
    for (product of cart) {
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.id = `cart-${product.id}`; 
        div.innerHTML = `                
            <img src="${product.img}" alt="product">

            <div>
                <h4>${product.name}</h4>
                <h5>$${product.price}</h5>
                <span class="remove-item" style="width:300px;height:100px;border:1px #fff solid;" onclick="changeQty(-${product.qty},${product.id})"; return false">remove</span>
            </div>

            <div>
                <i class="fas fa-chevron-up" onclick="changeQty(1,${product.id})"></i>
                <p class="amount">${product.qty}</p>
                <i class="fas fa-chevron-down" onclick="changeQty(-1,${product.id})"></i>
            </div>
        `;
        cartContent.appendChild(div);
    }
}

function showCart(){
    $('.cart-overlay').addClass("transparent-bcg");
    $('.cart').addClass("show-cart");
}   

function closeCart(){
    $('.cart-overlay').removeClass("transparent-bcg");
    $('.cart').removeClass("show-cart");
}

function clearCart(){
    for (product of cart) product.qty = 0;
    cart = [];
    updateCart();
}

function changeQty(qty, id){
    cart = cart.map((product)=>{
        if(product.id == id) product.qty += qty;
        return product;
    })
    cart = cart.filter((item)=>item.qty != 0);
    updateCart();
}

function renderSubtotal() {
    let subtotal = 0, itemsInCart = 0;
    for (product of cart){
        subtotal += product.price * product.qty;
        itemsInCart += product.qty;
    }
    cartTotal.innerHTML = subtotal;
    cartItems.innerHTML = itemsInCart;
}