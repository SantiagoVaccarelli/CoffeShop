// Declaracion de constantes de elementos del DOM y el carrito 
var cartLS = {};


const cartContent = document.querySelector('.cart-content');
const cartTotal = document.querySelector('.cart-total');
const cartItems = document.querySelector('.cart-items');
const products = document.querySelector('.products-center');

// Añande eventos a los botones 
function setBtnsEvents(){
    for (let product of productsInfo){
        $(`#${product.id}`).on("click",()=>{
            addToCart(product);
            $(`#product-${product.id}`).slideUp("slow", ()=>{
                    $(`#product-${product.id}`).fadeIn("slow");
                });
        });
    }

    $('.cart-btn').on("click", showCart);
    $('.close-cart').on("click",closeCart);
    $('.clear-cart').on("click", clearCart);
}

function loadProducts(){
    for(let product of productsInfo){
        let article = document.createElement("article");
        article.classList.add("product");
        article.innerHTML = `                
            <div class="img-container" id= "product-${product.id}">
                <img src="${product.img}" alt="product" class="product-img" >

                <button class="addToCart-btn" id="${product.id}">
                    <i class="fas fa-shopping-cart"></i>
                    add to cart
                </button>
            </div>

            <h3>${product.name}</h3>

            <h4>$${product.price}</h4>
        `
        $('.products-center').append(article);
    }
}

function main(){
    loadProducts();
    setBtnsEvents();
    setCartFromLS();
}

main()