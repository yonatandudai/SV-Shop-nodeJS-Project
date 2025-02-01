"use strict";

let lastSearchResults = null;
let lastSortingOption = 0; // Default sorting
const selectedProducts = [];

// Create header container (flex row)
const headerDiv = document.createElement("div");
headerDiv.style.display = "flex";
headerDiv.style.flexDirection = "row";
headerDiv.style.justifyContent = "center";
headerDiv.style.alignItems = "center";
headerDiv.style.padding = "10px";
headerDiv.style.width = "100%";
document.body.appendChild(headerDiv);

// Create heading
const heading = document.createElement("h2");
heading.innerText = "SV-Shop";
heading.style.fontFamily = "Arial, sans-serif";
heading.style.textAlign = "center";
headerDiv.appendChild(heading);

// Create sorting dropdown
const selectSorting = document.createElement("select");
selectSorting.style.position = "absolute";
selectSorting.style.left = "35px"; // Positioning on the left
selectSorting.style.backgroundColor = "lightgray";
selectSorting.style.border = "1px solid black";
selectSorting.style.padding = "5px";
selectSorting.style.fontFamily = "Arial, sans-serif";
selectSorting.style.width = "150px";
selectSorting.style.cursor = "pointer";

const options = ["", "Name (A-Z)", "Price (low to high)"];
options.forEach((option) => {
    const selectOption = document.createElement("option");
    selectOption.innerText = option;
    selectSorting.appendChild(selectOption);
});
headerDiv.appendChild(selectSorting);

// Create sort button
const sortBtn = document.createElement("button");
sortBtn.innerText = "Sort";
sortBtn.style.position = "absolute";
sortBtn.style.right = "10px"; // Positioning on the right
sortBtn.style.backgroundColor = "lightgray";
sortBtn.style.border = "1px solid black";
sortBtn.style.padding = "5px";
sortBtn.style.width = "150px";
sortBtn.style.cursor = "pointer";
sortBtn.style.fontFamily = "Arial, sans-serif";
headerDiv.appendChild(sortBtn);

//create a search container
const searchContainer = document.createElement("div");
searchContainer.style.display = "flex";
searchContainer.style.justifyContent = "center";
searchContainer.style.alignItems = "center";
searchContainer.style.padding = "10px";
searchContainer.style.width = "100%";
document.body.appendChild(searchContainer);

// Create search input
const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.placeholder = "Search for products";
searchInput.style.border = "1px solid black";
searchInput.style.padding = "5px";
searchInput.style.fontFamily = "Arial, sans-serif";
searchInput.style.width = "150px";
searchContainer.appendChild(searchInput);

// Create search button
const searchBtn = document.createElement("button");
searchBtn.innerText = "Search";
searchBtn.style.backgroundColor = "lightgray";
searchBtn.style.border = "1px solid black";
searchBtn.style.padding = "5px";
searchBtn.style.width = "60px";
searchBtn.style.cursor = "pointer";
searchBtn.style.fontFamily = "Arial, sans-serif";
searchContainer.appendChild(searchBtn);

// Create a container for products
const productsContainer = document.createElement("div");
productsContainer.style.maxHeight = "350px"; // Limit height
productsContainer.style.overflowY = "auto"; // Enable scrolling
productsContainer.style.width = "400px";
productsContainer.style.margin = "auto";
productsContainer.style.display = "flex";
productsContainer.style.flexDirection = "column";
productsContainer.style.alignItems = "center";
productsContainer.style.fontFamily = "Arial, sans-serif";
productsContainer.style.padding = "10px";
document.body.appendChild(productsContainer);

async function searchProducts() {
    const searchValue = searchInput.value;
    if (!searchValue.trim()) {
        displayProducts(lastSortingOption, null);
        lastSearchResults = null;
    }
    else {
        try {
            const response = await axios.get(`http://localhost:3000/products/search/${searchValue}`);
            lastSearchResults = response.data;
            const products = lastSearchResults;

            displayProducts(lastSortingOption, products);

            if (products.length === 0) {
                alert("No products found.");
            }
        } catch (error) {
            console.error("Error fetching products:", error);
            alert("No products found.");
        }
    }
}

// Create an event listener for the search button
searchBtn.addEventListener("click", async () => {
    searchProducts();
});

// Create an event listener for pressing Enter in the search input
searchInput.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
        searchProducts();
    }
});

// Take the products from the DB and display them
async function displayProducts(sortingOption, products = null) {
  try {
    if (!products) {
        const response = await axios.get("http://localhost:3000/products");
        products = [...response.data];
    }

    // Sort the copied array
    if (sortingOption === 1) {
        // Sort by name
        products.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortingOption === 2) {
        // Sort by price
        products.sort((a, b) => a.price - b.price);
    }

    // Clear existing products before displaying sorted ones
    productsContainer.innerHTML = "";

    products.forEach((product) => {
      // Create a div for each product
        const productDiv = document.createElement("div");
        productDiv.style.backgroundColor = "#2D68C4";
        productDiv.style.border = "1px solid black";
        productDiv.style.fontFamily = "Arial, sans-serif";
        productDiv.style.alignItems = "center";
        productDiv.style.marginTop = "15px";
        productDiv.style.width = "300px";
        productDiv.style.height = "55px";
        productDiv.style.cursor = "pointer";
        productDiv.style.padding = "0 10px";

        productDiv.addEventListener("click", () => {
            selectedProducts.push(product);
            alert(`You added ${product.name} to the selected products.`);
        });

        // Create a div for the product name and price
        const textDiv = document.createElement("div");
        textDiv.style.display = "flex";
        textDiv.style.flexDirection = "row";
        textDiv.style.justifyContent = "space-between";
        

        const productName = document.createElement("h3");
        productName.innerText = product.name;
        textDiv.appendChild(productName);

        const productPrice = document.createElement("p");
        productPrice.innerText = `Price: $${product.price}`;
        textDiv.appendChild(productPrice);

        productDiv.appendChild(textDiv);
        productsContainer.appendChild(productDiv);
    });

    document.body.style.overflowX = 'hidden';
    document.body.style.backgroundColor = "#76ABDF";
  } catch (error) {
    console.error("Error fetching products:", error);
    alert("An error occurred while fetching products.");
  }
}

function sortProducts() {
    const selectedOption = selectSorting.options[selectSorting.selectedIndex].text;
    lastSortingOption = 0; // Default sorting
    if (selectedOption === "Name (A-Z)") {
      lastSortingOption = 1; // 1 means sort by name
    } else if (selectedOption === "Price (low to high)") {
      lastSortingOption = 2; // 2 means sort by price
      }
      displayProducts(lastSortingOption, lastSearchResults || null);
}

// Create sort button event listener
sortBtn.addEventListener("click", () => {
    sortProducts();
});

// Create a buy button container
const buyButtonContainer = document.createElement("div");
buyButtonContainer.style.display = "flex";
buyButtonContainer.style.justifyContent = "center"; // Center horizontally
buyButtonContainer.style.alignItems = "center"; // Center vertically
buyButtonContainer.style.margin = "15px"; // Add space below product list
buyButtonContainer.style.width = "100%"; // Ensure full width

// Create a buy button
const buyButton = document.createElement("button");
buyButton.innerText = "Buy";
buyButton.style.color = "black";
buyButton.style.backgroundColor = "lightgray";
buyButton.style.border = "1px solid black";
buyButton.style.padding = "5px";
buyButton.style.borderRadius = "5px";
buyButton.style.width = "100px";
buyButton.style.cursor = "pointer";
buyButton.style.fontFamily = "Arial, sans-serif";
buyButtonContainer.appendChild(buyButton);
document.body.appendChild(buyButtonContainer);

// Add an event listener to the buy button
buyButton.addEventListener("click", async () => {
    try {
        // Store the selected products in localStorage
        localStorage.setItem("products", JSON.stringify(selectedProducts));
        alert("Order prepared. Redirecting to checkout...");
        window.location.href = "/client/public/buy.html"; // Redirect after storing order
    } catch (error) {
        console.error("❌ Error sending order:", error);
    }
});

// Display the products when the page loads
displayProducts(0); // 0 means no sorting

