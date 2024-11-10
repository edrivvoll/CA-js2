


// const BASE_URL = "https://v2.api.noroff.dev";
// const BASE_URL = "https://api.noroff.dev/api/v1";


// const regURL ="/auth/register";
// const regURL ="/social/auth/register";

//--------------------Register user

export async function registerUser(url, userData) {
    try {
        const postData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData)
        }
        const response = await fetch(url, postData);
        console.log(response);
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
}

/* const userToRegister = {
    name: "sdweghname", 
    email: "qqfirst.last@noroff.no", 
    password: "eUzI1NiIsInR5cCI"
} */

// const registerURL = BASE_URL + regURL;

// registerUser(registerURL, userToRegister);

