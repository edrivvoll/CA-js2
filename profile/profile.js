import { logOut } from "../js/logOut.js";
import { goToCreatePost } from "../js/goToCreatePost.js";
import { renderPostsWithFilterMyPosts } from "../js/renderPostsWithFilterMyPosts.js"
import { renderSearchProfile } from "../js/searchPostsProfile.js";

renderPostsWithFilterMyPosts();

logOut();

goToCreatePost();


const searchBtn = document.getElementById('search-btn');
const searchInput = document.querySelector('#search-input');

const url = '';

searchBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    if (searchInput.value === '') {
        renderPostsWithFilterMyPosts();
    }   else {
        renderSearchProfile(searchInput.value);
    }
    
});



