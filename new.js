
let cartItems = [];


function addToCart(itemName, itemPrice) {
    cartItems.push({ name: itemName, price: itemPrice });
    alert("Item added to bag successfully!");

    
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}



function openCartPage() {
    
    window.location.href = "cart.html";
}








function populateCartItems() {
    const cartItemsContainer = document.getElementById("cartItems");

   
    const storedCartItems = localStorage.getItem("cartItems");

    if (storedCartItems) {
        cartItems = JSON.parse(storedCartItems);
    }

    cartItemsContainer.innerHTML = "";

    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - €${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(li);
    });
}


populateCartItems();



function calculateTotalAndCheckout() {
    let totalAmount = 0;

    
    cartItems.forEach(item => {
        totalAmount += item.price;
    });

    
    alert(`Total to pay: €${totalAmount.toFixed(2)}`);
    
   
}


