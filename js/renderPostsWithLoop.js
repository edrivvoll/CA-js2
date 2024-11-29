import { getPosts } from "./getPosts.js";

export async function renderPostsWithLoop() {
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