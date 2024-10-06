document.addEventListener('DOMContentLoaded', () => {
    let cart = {};
    const cartQuantityElement = document.querySelector('.quantity');
    const cartItemsContainer = document.querySelector('.cart-items');
    const emptyCartContent = document.querySelector('.empty-content');
    const cartTotalElement = document.querySelector('.cart-total');
    const confirmOrderButton = document.querySelector('.confirm-order');
    const overlay = document.querySelector('.overlay');
    const orderSummaryContainer = document.querySelector('.order-summary');
    const startNewOrderButton = document.querySelector('.start-new-order');
    const cartSummary = document.querySelector('.cart-summary');

    let productData = [];

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            productData = data;
            initializeCart();
        });

// const cart = {};  
// const cartItemsContainer = document.getElementById('cart-items');  
// const totalPriceContainer = document.getElementById('cart-total');  

document.querySelectorAll('.addToCart').forEach(button => {  
    button.addEventListener('click', () => {  
        const itemName = button.getAttribute('product-name');  
        const itemPrice = parseFloat(button.getAttribute('price'));  
        
        if (cart[itemName]) {  
            cart[itemName].quantity += 1;  
        } else {  
            cart[itemName] = { price: itemPrice, quantity: 1 };  
        }  

        updateCart();  
    });  
});  

function updateCart() {  
    cartItemsContainer.innerHTML = '';  
    let totalPrice = 0;  

    for (const item in cart) {  
        const itemTotal = cart[item].price * cart[item].quantity;  
        totalPrice += itemTotal;  
        
        const listItem = document.createElement('li');  
        listItem.textContent = `${item} - $${cart[item].price} x ${cart[item].quantity} = $${itemTotal.toFixed(2)}`;  
        cartItemsContainer.appendChild(listItem);  
    }  

    totalPriceContainer.textContent = `Total: $${totalPrice.toFixed(2)}`;  }})


    // Sample cart items  
const cartItems = [  
    { id: 1, name: "Waffle with Berries", quantity: 1, price: 6.50 },  
    { id: 2, name: "Item B", quantity: 1, price: 25.00 },  
    { id: 3, name: "Item C", quantity: 3, price: 10.00 }  
];  

// Function to render cart items  
function renderCartItems() {  
    const cartItemsContainer = document.getElementById('cart-items');  
    cartItemsContainer.innerHTML = ''; // Clear previous items  
    let total = 0;  

    cartItems.forEach(item => {  
        // Create a list item for each cart item  
        const itemTotal = item.quantity * item.price; // Calculate total for this item  
        total += itemTotal; // Add to total cost  

        const listItem = document.createElement('li');  
        listItem.textContent = `${item.name} - Quantity: ${item.quantity}, Price: $${item.price.toFixed(2)}, Total: $${itemTotal.toFixed(2)}`;  
        cartItemsContainer.appendChild(listItem);  
    });  

    // Update the total price display  
    document.getElementById('total-price').textContent = `$${total.toFixed(2)}`;  
}  

// Function to handle payment confirmation  
function confirmPayment() {  
    if (cartItems.length === 0) {  
        alert("Your cart is empty!");  
        return;  
    }  

    alert("Proceeding to payment!");  
    // Here you would typically handle the payment process  
}  

// Initial rendering of cart items  
renderCartItems();

    function confirmPayment() {  
    // Get the items in the cart (you can fetch this from your cart data)  
    const items = document.querySelectorAll('#cart-items li');  
    
    if (items.length === 0) {  
        alert("Your cart is empty!");  
        return;  
    }  

    // Here you would typically send this data to your server for processing payment.  
    // Example: You can gather item details and send them in an API request.  
    
    alert("Proceeding to payment!");  
    // Redirect to payment processing URL or handle payment logic here  
}