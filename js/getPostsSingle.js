import { load } from "./load.js";
import { apiBase, apiKey, apiPosts } from "./url.js";

const querryString = document.location.search;
const params = new URLSearchParams(querryString);
const id = params.get('id');

export async function getPostsSingle() {
    const token = load('token');
    if (!token) throw new Error('No authorization token found');

    const response = await fetch(`${apiBase}${apiPosts}/${id}`, {
       
        headers: {
            Authorization: `Bearer ${token}`,
            "X-Noroff-API-Key": `${apiKey}`,
        }
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Could not fetch posts');
    }

    return await response.json();
}