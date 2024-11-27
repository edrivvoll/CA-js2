import { logOut } from "../js/logOut.js";
import { goToCreatePost } from "../js/goToCreatePost.js";

export const apiBase = 'https://v2.api.noroff.dev';
export const apiAuth = '/auth';
export const apiReg = '/register';
export const apiLogin = '/login';
export const apiPosts = '/social/posts';
export const apiKey = '4f3ee179-18e9-46f1-b721-844731846040';

export function load(key) {
    return JSON.parse(localStorage.getItem(key));
}

export async function getPosts() {
    const token = load('token');
    if (!token) throw new Error('No authorization token found');

    const response = await fetch(`${apiBase}${apiPosts}`, {
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
    const postContainer = document.getElementById('post-container');
    const postArray = posts.data;
    console.log(postArray)
    postContainer.innerHTML = '';

    

   postArray.forEach(i => {
        if (i.media === null) {
        postContainer.innerHTML += `
            
                <div class="col-md-6 col-sm-6 col-xl-4">
                    <div class="card mb-4">
                    <img src="" alt="">
                        <div class="card-body">
                            <h5 class="card-title">${i.title}</h5>
                            <p class="card-text">${i.body}</p>
                            <a href="/profile/singlepost.html?id=${i.id}" class="btn btn-primary">View Post</a>
                        </div>
                    </div>
                </div>
                
                `
        
        } else {
          postContainer.innerHTML += `
    
        <div class="col-md-6 col-sm-6 col-xl-4">
            <div class="card mb-4">
            <img src="${i.media.url}" alt="${i.media.alt}">
                <div class="card-body">
                    <h5 class="card-title">${i.title}</h5>
                    <p class="card-text">${i.body}</p>
                    <a href="/profile/singlepost.html?id=${i.id}" class="btn btn-primary">View Post</a>
                </div>
            </div>
        </div>
        
        `  
        }
        
        
    });

    
}

renderPosts();

logOut();
goToCreatePost();



/* const posts = await getPosts();
console.log(posts); */

