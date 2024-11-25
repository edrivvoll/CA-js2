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
    //
    

    const token = load('token');
    if (!token) throw new Error('No authorization token found');

    const title = document.getElementById('title');
    const body = document.getElementById('body');
    const mediaUrl = document.getElementById('media-url');
    const mediaAlt = document.getElementById('media-alt');
    
    let dataSet = {
        'title': title,
        'body': body,
        'media': {
            'url': mediaUrl,
            'alt': mediaAlt,
        }
    }

    const response = await fetch(`${apiBase}${apiPosts}`, {
        method: 'POST',
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

}

/* export function logOut() {
    const logOutBtn = document.getElementById('logout');
    
    if (logOutBtn) {
        logOutBtn.addEventListener('click', function (e) {
            e.preventDefault();
            localStorage.clear();
            window.location.replace('../index.html');
        });
    } else {
        console.error('Logout button not found!');
    }
} */



const createBtn = document.getElementById('create-post');

    if (createBtn) {
        createBtn.addEventListener('click', function (e) {
            e.preventDefault();
            // createPost();
            console.log(title)
        })
    }
