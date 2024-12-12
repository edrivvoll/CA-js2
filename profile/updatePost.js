import { load } from "../js/createPost.js";
import { getPostsSingle } from "../js/getPostsSingle.js";
import { apiBase, apiKey, apiPosts } from "../js/url.js";

const posts = await getPostsSingle();
const postArray = posts.data || {};
console.log(postArray.title, postArray.body, postArray.media?.url, postArray.media?.alt, postArray.id);

document.querySelector('#title').value = postArray.title || '';
document.querySelector('#body').value = postArray.body || '';
document.querySelector('#media-url').value = postArray.media?.url || '';
document.querySelector('#media-alt').value = postArray.media?.alt || '';

export async function editPost() {
    const token = load('token');
    if (!token) throw new Error('No authorization token found');

    const response = await fetch(`${apiBase}${apiPosts}/${postArray.id}`, {
        method: 'PUT',
        body: JSON.stringify(dataSet),
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
            "X-Noroff-API-Key": `${apiKey}`,
        },
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Could not update the post');
    }

    return await response.json();
}

const updateBtn = document.getElementById('update-post');
export let dataSet = {};

updateBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const newTitle = document.getElementById('title').value;
    const newBody = document.getElementById('body').value;
    const newMediaUrl = document.getElementById('media-url').value;
    const newMediaAlt = document.getElementById('media-alt').value;

    dataSet = {
        title: newTitle,
        body: newBody,
        ...(newMediaUrl && newMediaAlt && { media: { url: newMediaUrl, alt: newMediaAlt } }),
    };

    try {
        await editPost();
        alert('Post updated successfully!');
        window.location.replace('/feed/index.html');
    } catch (error) {
        console.error('Failed to update post:', error.message);
        alert('Failed to update post. Please try again.');
    }
});


