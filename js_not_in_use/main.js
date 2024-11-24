import { userToRegister } from "./userToRegister.js";
import { registerUser } from "./registerUser.js";
import { apiKeyUrl, getPostsURL, loginUrl, regUrl } from "./url.js";
// import { loginUser } from "./loginUser.js";
import { userToLogin } from "./userToLogin.js";
import { getWithToken } from "./getWithToken.js";
import { getAPIKey } from "./getAPIKey.js";


// registerUser(regUrl, userToRegister);



// getWithToken(getPostsURL);

// getAPIKey(apiKeyUrl).then(console.log);

let userEmail;
let userPassword;

const form = document.getElementById('form');
const loginBtn = document.getElementById('login-btn');

loginBtn.onclick = function() {
    form.preventDefault();
    userEmail = document.getElementById('email').value;
    userPassword = document.getElementById('password').value;

    console.log(userEmail, userPassword)

    const userToLogin = { 
        email: `${userEmail}`, 
        password: `${userPassword}`,
    }

    loginUser(loginUrl, userToLogin);
}

 //   loginUser(loginUrl, userToLogin);