import { userToRegister } from "./userToRegister.js";
import { registerUser } from "./register.js";
import { apiKeyUrl, getPostsURL, loginUrl, regUrl } from "./url.js";
import { loginUser } from "./loginUser.js";
import { userToLogin } from "./userToLogin.js";
import { getWithToken } from "./getWithToken.js";
import { getAPIKey } from "./getAPIKey.js";


// registerUser(regUrl, userToRegister);

// loginUser(loginUrl, userToLogin);

getWithToken(getPostsURL);

// getAPIKey(apiKeyUrl).then(console.log);