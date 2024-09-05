const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")
const cartModal = document.getElementById("cart-modal")
const cartItemsContainer = document.getElementById("cart-items")
const cartTotal = document.getElementById("cart-total")
const checkOutBtn = document.getElementById("checkout-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const cartCount = document.getElementById("cart-count")
const addressInput = document.getElementById("address")
const addressWarn =document.getElementById("address-warn")

let cart = [];


// Função de abrir o modal do carrinho 

cartBtn.addEventListener("click", function() {
    cartModal.style.display = "flex"
})

// Função de fechar o modal quando clicar fora do carrinho

cartModal.addEventListener("click", function(event){
if(event.target === cartModal){
    cartModal.style.display = "none"}
})

//Função do botão para fechar o carrinho

closeModalBtn.addEventListener("click", function(){
    cartModal.style.display = "none"
})

menu.addEventListener("click", function(){
    let parentButton = event.target.closest(.add-to-cart-btn)

    if(parentButton){
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))

        addToCart(name,price)
    }
})

// Função de adicionar itens ao carrinho, e altera a quantidade de itens

function addToCart (name, price) {

    const existingItem = cart.find(item => item.name === name)

    if(existingItem) {
        existingItem.quantity += 1;
        return;
    }

     cart.push(
        {name,
         price, 
         quantity:1
        })
}

// atualiza visualmente os itens no carrinho
