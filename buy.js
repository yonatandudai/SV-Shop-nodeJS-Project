"use strict";

const pageContainer = document.createElement('div');
pageContainer.style.display = 'flex';
pageContainer.style.alignItems = 'center';
pageContainer.style.flexDirection = 'column';
pageContainer.style.backgroundColor = '#76ABDF';
pageContainer.style.border = '1px solid black';
pageContainer.style.borderRadius = '5px';
pageContainer.style.width = '250px';
pageContainer.style.height = '250px';
pageContainer.style.margin = 'auto';
pageContainer.style.marginTop = '50px';
pageContainer.style.fontFamily = 'Arial, sans-serif';
document.body.appendChild(pageContainer);

const heading = document.createElement('h2');
heading.innerText = 'SV-Shop';
heading.style.marginBottom = '10px'; // Reduce space below the heading
pageContainer.appendChild(heading);

const totalProductsDiv = document.createElement('p');
totalProductsDiv.innerText = `Total products: 0`;
totalProductsDiv.style.margin = '5px 0'; // Reduce vertical margin
pageContainer.appendChild(totalProductsDiv);

const totalPriceDiv = document.createElement('p');
totalPriceDiv.innerTextDiv = `Total price: $0`;
pageContainer.appendChild(totalPriceDiv);

const approveBtn = document.createElement('button');
approveBtn.innerText = 'Approve';
approveBtn.style.backgroundColor = '#5072A7';
approveBtn.style.color = 'black';
approveBtn.style.backgroundColor = 'lightgray';
approveBtn.style.border = '1px solid black';
approveBtn.style.borderRadius = '5px';
approveBtn.style.padding = '15px';
approveBtn.style.width = '200px';
approveBtn.style.marginTop = '10px';
approveBtn.style.cursor = 'pointer';
approveBtn.style.fontSize = '16px';
pageContainer.appendChild(approveBtn);

const selectedProducts = JSON.parse(localStorage.getItem("products")) || [];

const myName = localStorage.getItem("fullname"); // Store the username in localStorage

// Display the total number of products
totalProductsDiv.innerText = `Total products: ${selectedProducts.length}`;

// Calculate the total price of all products
const totalPrice = selectedProducts.reduce((total, product) => total + product.price, 0);
totalPriceDiv.innerText = `Total price: $${totalPrice}`;

function logOut(){
    // Clear localStorage to log out user
    localStorage.removeItem("fullname");
    localStorage.removeItem("products");

    // Redirect to login or home page
    window.location.href = "/main.html";
}

// Function to save the products to the database
async function saveProducts(){
    if (!myName || typeof myName !== "string" || myName === "Guest") {
        alert("⚠️ Please log in to place an order.");
        console.error("❌ Guest users cannot place an order.");
        return;
    }

    if (!selectedProducts || selectedProducts.length === 0) {
        alert("Error: No products selected.");
        console.error("Error: No products selected:", selectedProducts);
        return;
    }

    try {
        const response = await axios.post("http://localhost:3000/buy", {
            name: myName,
            products: selectedProducts
        });

        if (response.status === 200) {
            alert("✅ Order placed successfully! Logging out...");
            // ✅ Call logOut only if the order is placed successfully
            logOut();
        } else {
            alert("❌ Order placement failed.");
        }
    } catch (error) {
        console.error("Error placing order:", error);
        alert("Error placing order. Please check the console for details.");
    }
}


// Add an event listener to the approve button
approveBtn.addEventListener("click", saveProducts);
