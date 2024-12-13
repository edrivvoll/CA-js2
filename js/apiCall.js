import { load } from "./load.js";
import { apiAuthor, apiBase, apiKey, apiPosts } from "./url.js";

export async function apiCall(url, option) {
    const token = load('token');
    if (!token) throw new Error('No authorization token found');

    const response = await fetch(url, option); {
        option;
    }
    console.log(response)
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Could not fetch posts');
    }

    return await response.json();
}
