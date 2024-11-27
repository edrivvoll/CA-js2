const container = document.querySelector('#signgle-post-container');
const querryString = document.location.search;

console.log(querryString);

const params = new URLSearchParams(querryString);

console.log(params);

const id = params.get('id');

console.log(id);

export const apiBase = 'https://v2.api.noroff.dev';
export const apiAuth = '/auth';
export const apiReg = '/register';
export const apiLogin = '/login';
export const apiPosts = '/social/posts/';
export const apiKey = '4f3ee179-18e9-46f1-b721-844731846040';

export function load(key) {
    return JSON.parse(localStorage.getItem(key));
}

export async function getPosts() {
    const token = load('token');
    if (!token) throw new Error('No authorization token found');

    const response = await fetch(`${apiBase}${apiPosts}${id}`, {
       
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

export async function renderPosts() {
    const posts = await getPosts();
    const postArray = posts.data;
    console.log(postArray)
    container.innerHTML = '';

    container.innerHTML = `
            
        <div class="col-md-6 col-sm-6 col-xl-4">
            <div class="card mb-4">
                <img src="${postArray.media.url}" alt="${postArray.media.alt}">
                <div class="card-body">
                    <h5 class="card-title">${postArray.title}</h5>
                    <p class="card-text">${postArray.body}</p>
                    <a href="#" class="btn btn-primary">View Post</a>
                </div>
            </div>
        </div>
        `
        

    
}
renderPosts();