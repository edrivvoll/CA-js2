/* import { load } from "../js/load.js";
import { apiBase, apiKey, apiPosts } from "../js/url.js";
import { dataSet } from "./updatePost.js";

export async function editPost(post) {
    const token = load('token');
    if (!token) throw new Error('No authorization token found');

    const response = await fetch(`${apiBase}${apiPosts}/${post}`, {
        method: 'PUT',
        body: JSON.stringify(dataSet),
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
            "X-Noroff-API-Key": `${apiKey}`,
        }        
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Could not fetch posts');
    }

    return await response.json();
} */