document.addEventListener("DOMContentLoaded", function() {
    var loginLink = document.getElementById("loginLink");
    var loginForm = document.getElementById("loginForm");

    loginLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        loginForm.style.display = "block";
    });
});
/*
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check username and password (example, replace with your authentication logic)
    if (username === "yourusername" && password === "yourpassword") {
        alert("Login successful!");
        // Perform further actions upon successful login
    } else {
        alert("Login failed. Please check your credentials.");
    }
}
*/
var cart = [];

document.addEventListener("DOMContentLoaded", function() {
    var cartItems = document.getElementById("cartItems");
    if (cartItems) {
        updateCartItems();
    }
});

function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCartItems();
}

function updateCartItems() {
    var cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    cart.forEach(function(item) {
        var listItem = document.createElement("li");
        listItem.textContent = item.productName + " - €" + item.price.toFixed(2);
        cartItems.appendChild(listItem);
    });
}

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    
    if (username === "" || password === "") {
        alert("Please fill in both username and password.");
    } else {
        
        alert("Login successful!");

        
    }
}

