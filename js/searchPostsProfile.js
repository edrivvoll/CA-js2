import { apiCall } from "./apiCall.js";
import { deletePost } from "./deletePost.js";
import { getPosts } from "./getPosts.js";
import { load } from "./load.js";
import { apiAuthor, apiBase, apiKey, apiPosts } from "./url.js";


const token = load('token');
const option = {
    headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
        "X-Noroff-API-Key": `${apiKey}`,
    }
}

export async function renderSearchProfile(searchInput) {

    const url = `${apiBase}${apiPosts}/search?q=${searchInput}&_author=true`;
    console.log(url)
    // 'https://v2.api.noroff.dev/social/posts/search?q=gdrh&_author=true'
    async function renderPostsWithFilterMyPostsV2() {
        const posts = await apiCall(url , option);
        const postContainer = document.getElementById('post-container');
        const postArray = posts.data;
        const userEmail = load('useremail');
        console.log(postArray)
             
        
        const filteredPostArray = postArray.filter((array) => {
            if (array.author.email === userEmail) {
                return true;
            }   else  {
                return false;
            }
        }) 
        
       


        // Clear the container
        postContainer.innerHTML = '';

        filteredPostArray.forEach((i) => {
            const authorEmail = i.author.email;
            const isAuthor = authorEmail === userEmail;

            // Create card elements
            const card = document.createElement('div');
            card.className = 'col-md-6 col-sm-6 col-xl-4';

            const cardContent = `
                <div class="card mb-4">
                    <img src="${i.media ? i.media.url : ''}" alt="${i.media ? i.media.alt : ''}">
                    <div class="card-body">
                        <h5 class="card-title">${i.title}</h5>
                        <p class="card-text">${i.body}</p>
                        <a href="/profile/singlepost.html?id=${i.id}" class="btn btn-primary">View Post</a>
                        <div class="button-container"></div>
                    </div>
                </div>
            `;

            card.innerHTML = cardContent;
            postContainer.appendChild(card);

            // Add button if user is the author
            if (isAuthor) {
                const buttonContainer = card.querySelector('.button-container');
                
                const buttonEdit = document.createElement('button');
                buttonEdit.textContent = 'Edit Post';
                buttonEdit.className = 'btn btn-primary';
                buttonEdit.addEventListener('click', () => {
                    window.location.replace(`/profile/edit-post.html?id=${i.id}`);
                });
                const buttonDelete = document.createElement('button');
                buttonDelete.textContent = 'Delete Post';
                buttonDelete.className = 'btn btn-danger';
                
                buttonDelete.addEventListener('click', () => {
                    deletePost(i.id);
                    alert('Post Deleted!');
                    window.location.reload();
                });
                
                
                buttonContainer.appendChild(buttonEdit);
                buttonContainer.appendChild(buttonDelete);
            }
        });
    }

    renderPostsWithFilterMyPostsV2();
    
}
