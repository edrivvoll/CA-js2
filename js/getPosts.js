import { load } from "./load.js";
import { apiAuthor, apiBase, apiKey, apiPosts } from "./url.js";

export async function getPosts() {
    const token = load('token');
    if (!token) throw new Error('No authorization token found');

    const response = await fetch(`${apiBase}${apiPosts}${apiAuthor}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "X-Noroff-API-Key": `${apiKey}`,
        }
    });
    console.log(response)
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Could not fetch posts');
    }

    return await response.json();
}