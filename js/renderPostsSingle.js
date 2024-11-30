import { getPostsSingle } from "./getPostsSingle.js";

export async function renderPostsSingle() {
    const posts = await getPostsSingle();
    const postArray = posts.data;
    console.log(postArray)
    
    const container = document.querySelector('#signgle-post-container');
    container.innerHTML = '';
    
    if (postArray.media === null) {
        container.innerHTML = `                
            <div class="col-md-6 col-sm-6 col-xl-4">
                <div class="card mb-4">
                    <img src="#" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${postArray.title}</h5>
                        <p class="card-text">${postArray.body}</p>
                        <a href="#" class="btn btn-primary">View Post</a>
                    </div>
                </div>
            </div>
            `
    } else {
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
}