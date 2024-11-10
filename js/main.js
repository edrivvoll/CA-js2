import { userToRegister } from "./userToRegister.js";
import { registerUser } from "./register.js";
import { getPostsURL, loginUrl, regUrl } from "./url.js";
import { loginUser } from "./loginUser.js";
import { userToLogin } from "./userToLogin.js";
import { getWithToken } from "./getWithToken.js";


// registerUser(regUrl, userToRegister);

// loginUser(loginUrl, userToLogin);

getWithToken(getPostsURL);