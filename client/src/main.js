"use strict";

const heading = document.createElement('h2');
heading.innerText = 'SV-Shop';
heading.style.marginBottom = '35px';
document.body.appendChild(heading);

const style = document.createElement('style');
style.innerHTML = `
  input::placeholder {
    color: black;
  }
`;

document.head.appendChild(style);

function createInput(type, placeholder) {
    const input = document.createElement('input');
    input.type = type;
    input.placeholder = placeholder;
    input.style.backgroundColor = '#5072A7';
    input.style.marginBottom = '10px';
    input.style.border = '1px solid black';
    input.style.borderRadius = '5px';
    input.style.padding = '5px';
    return input;
    }

// Create the input fields
const email = createInput('email', 'email');
const password = createInput('password', 'password');

// Create the form
const form = document.createElement('form');
form.style.width = '300px';
form.style.height = '270px';
form.style.margin = 'auto';
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.fontFamily = 'Arial, sans-serif';
form.style.alignItems = 'center';
form.style.border = '1px solid black';
form.style.marginTop = '20px';
form.style.backgroundColor = '#76ABDF';

// Append the input fields to the form
form.appendChild(heading);
form.appendChild(email);
form.appendChild(password);

function createButton(text) {
    const button = document.createElement('button');
    button.innerText = text;
    button.style.backgroundColor = '#5072A7';
    button.style.color = 'black';
    button.style.backgroundColor = 'lightgray';
    button.style.border = '1px solid black';
    button.style.borderRadius = '5px';
    button.style.padding = '5px';
    button.style.width = '70px';
    button.style.marginTop = '10px';
    button.style.cursor = 'pointer';
    return button;
}

// Create the buttons
const signInButton = createButton('Sign in');
const signUpButton = createButton('Sign up');

async function signIn(e) {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:3000/', {
            email: email.value.trim(),
            password: password.value.trim(),
        });

        if (response.status === 200 && response.data.user) {
            const myName = response.data.user.name; // Get the name from the database
            localStorage.setItem("fullname", myName); // Store it in localStorage

            alert(`✅ Welcome back, ${myName}!`);
            window.location.href = "/client/public/products.html"; // Redirect to products page
        } else {
            alert("❌ Invalid email or password. Please try again.");
        }
    } catch (error) {
        console.error("❌ Error signing in:", error);
        const errorMessage = error.response && error.response.data ? error.response.data.error : "An error occurred while signing in.";
        alert(errorMessage);
    }
}



// Create a function to go to the sign up page
function goToSignUp(e) {
    e.preventDefault();
    window.location.href = "/client/public/signup.html";
}

// Add event listeners to the buttons
signInButton.addEventListener('click', signIn);
signUpButton.addEventListener('click', goToSignUp);

// Create a container for the buttons
const buttonContainer = document.createElement('div');
buttonContainer.style.display = 'flex';
buttonContainer.style.justifyContent = 'center';
buttonContainer.style.gap = '10px'; // Add space between buttons

// Append buttons to the container
buttonContainer.appendChild(signInButton);
buttonContainer.appendChild(signUpButton);

// Append the container to the form
form.appendChild(buttonContainer);

// Append the form to the body
document.body.appendChild(form);


