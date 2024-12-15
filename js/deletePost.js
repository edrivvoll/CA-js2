import { load } from "./load.js";
import { apiBase, apiKey, apiPosts } from "./url.js";

export async function deletePost(post) {
    const token = load('token');
    if (!token) throw new Error('No authorization token found');

    const response = await fetch(`${apiBase}${apiPosts}/${post}`, {
        method: 'DELETE',
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