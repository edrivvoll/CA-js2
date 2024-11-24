import { registerUser } from "./registerUser.js";
import { regUrl } from "./url.js";

const regBtn = document.getElementById('register-submit');
const form = document.getElementById('form');
let userName = document.getElementById('name');
let userEmail = document.getElementById('email');
let userPassword = document.getElementById('password');


regBtn.onclick = function() {
    form.preventDefault();
    userName = document.getElementById('name').value;
    userEmail = document.getElementById('email').value;
    userPassword = document.getElementById('password').value;
    
    const userToRegister = {
        name: `${userName}`, 
        email: `${userEmail}`, 
        password: `${userPassword}`
    }

    console.log(userToRegister);

    registerUser(regUrl, userToRegister)

    console.log(userName);
    console.log(userEmail);
    console.log(userPassword);
}

