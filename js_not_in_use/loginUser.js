//--------------------- Login------------
export function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export async function loginUser(url, userData) {
    try {
        console.log(url, userData);
        const postData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        };
        const response = await fetch(url, postData);
        console.log(response);
        const json = await response.json();
        console.log(json.data);  
        const accessToken = json.data.accessToken;
        const profile = json.data;
        save("accessToken", accessToken);
        save("profile", profile);
        
    } catch (error) {
        console.log(error);
    }
}


// const loginURL = `${BASE_URL}/auth/login`;

/* const userToLogin = {
    email: "qqfirst.last@noroff.no", 
    password: "eUzI1NiIsInR5cCI"
} */

// loginUser(loginURL, userToLogin);