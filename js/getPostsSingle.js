import { id } from "../profile/singlePost.js";
import { load } from "./load.js";
import { apiBase, apiKey, apiPosts } from "./url.js";

export async function getPostsSingle() {
    const token = load('token');
    if (!token) throw new Error('No authorization token found');

    const response = await fetch(`${apiBase}${apiPosts}/${id}`, {
       
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