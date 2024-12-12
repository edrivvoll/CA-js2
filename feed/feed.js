import { loadPost } from "../js/createPost.js";
import { logOut } from "../js/logOut.js";
import { renderPostsWithFilterImg } from "../js/renderPostsWithFilterImg.js";
import { renderPostsWithFilterMyPosts } from "../js/renderPostsWithFilterMyPosts.js";
import { renderPostsWithLoop } from "../js/renderPostsWithLoop.js";
import { renderSearchFeed } from "../js/searchPostFeed.js";
import { searchPosts } from "../js/searchPosts.js";
// import { renderSearch } from "../js/searchPostsProfile.js";


renderPostsWithLoop();

logOut();

// searchPosts();

loadPost();

// Search
const searchBtn = document.getElementById('search-btn');
const searchInput = document.querySelector('#search-input');

const url = '';

searchBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    console.log(searchInput.value);
    if (searchInput.value === '') {
        renderPostsWithLoop();
    }   else {
        renderSearchFeed(searchInput.value);
    }
});

// 2nd search bar
const searchBtn2 = document.getElementById('search-btn2');
const searchInput2 = document.querySelector('#search-input2');

searchBtn2.addEventListener('click', (e) => {
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
    console.log('No Filter selected!');
    renderPostsWithLoop();
});

withImgItem.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('With image selected!');
    renderPostsWithFilterImg();
});

myPostsItem.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('My Posts selected!');
    renderPostsWithFilterMyPosts();
});
// ---------------------
