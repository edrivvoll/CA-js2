import { createPost, loadPost } from "../js/createPost.js";
import { logOut } from "../js/logOut.js";
import { renderPostsWithFilterImg } from "../js/renderPostsWithFilterImg.js";
import { renderPostsWithFilterMyPosts } from "../js/renderPostsWithFilterMyPosts.js";
import { renderPostsWithLoop } from "../js/renderPostsWithLoop.js";
import { searchPosts } from "../js/searchPosts.js";
// import { sortPostsByDate } from "../js/sortPosts.js";


renderPostsWithLoop();

logOut();

searchPosts();

loadPost();

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

