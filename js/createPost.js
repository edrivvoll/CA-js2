export const apiBase = 'https://v2.api.noroff.dev';
export const apiAuth = '/auth';
export const apiReg = '/register';
export const apiLogin = '/login';
export const apiPosts = '/social/posts';
export const apiKey = '4f3ee179-18e9-46f1-b721-844731846040';

export function load(key) {
    return JSON.parse(localStorage.getItem(key));
}

export async function createPost() {
    const token = load('token');
    if (!token) throw new Error('No authorization token found');

    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    const mediaUrl = document.getElementById('media-url').value;
    const mediaAlt = document.getElementById('media-alt').value;

    const dataSet = {
        title,
        body,
        ...(mediaUrl && mediaAlt && { media: { url: mediaUrl, alt: mediaAlt } }),
    };

    try {
        const response = await fetch(`${apiBase}${apiPosts}`, {
            method: 'POST',
            body: JSON.stringify(dataSet),
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${token}`,
                'X-Noroff-API-Key': apiKey,
            },
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Could not create post');
        }

        return await response.json();
    } catch (error) {
        console.error('Error creating post:', error.message);
        throw error;
    }
}

export function loadPost() {
    const createBtn = document.getElementById('create-post');

    if (createBtn) {
        createBtn.addEventListener('click', async function (e) {
            e.preventDefault();
            try {
                const response = await createPost();
                console.log('Post created successfully:', response);
                alert('Post created successfully');
                window.location.replace('/feed/index.html')
            } catch (error) {
                console.error('Failed to create post:', error.message);
            }
        });
    }
}


// loadPost();
