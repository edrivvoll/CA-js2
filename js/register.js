import { apiAuth, apiBase, apiReg } from "./url.js";

export async function register(name, email, password) {
    const response = await fetch(`${apiBase}${apiAuth}${apiReg}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ name, email, password })
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Could not register the account');
    }

    return await response.json();
}