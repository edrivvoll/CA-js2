import { loadPost } from "../js/createPost.js";
import { logOut } from "../js/logOut.js";
import { renderPostsWithFilterImg } from "../js/renderPostsWithFilterImg.js";
import { renderPostsWithFilterMyPosts } from "../js/renderPostsWithFilterMyPosts.js";
import { renderPostsWithLoop } from "../js/renderPostsWithLoop.js";
import { renderSearchFeed } from "../js/searchPostFeed.js";

renderPostsWithLoop();

logOut();

loadPost();

const url = '';

// search bar
const searchBtn = document.getElementById('search-btn');
const searchInput2 = document.querySelector('#search-input');

searchBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    console.log(searchInput2.value);
    if (searchInput2.value === '') {
        renderPostsWithLoop();
    }   else {
        renderSearchFeed(searchInput2.value);
    }
});

// Filter
const noFilterItem = document.getElementById('no-filter');
const withImgItem = document.getElementById('img');
const myPostsItem = document.getElementById('my-posts');

noFilterItem.addEventListener('click', (e) => {
    e.preventDefault();
    renderPostsWithLoop();
});

withImgItem.addEventListener('click', (e) => {
    e.preventDefault();
    renderPostsWithFilterImg();
});

myPostsItem.addEventListener('click', (e) => {
    e.preventDefault();
    renderPostsWithFilterMyPosts();
});
// ---------------------
