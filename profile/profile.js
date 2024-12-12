import { logOut } from "../js/logOut.js";
import { goToCreatePost } from "../js/goToCreatePost.js";
import { searchPosts } from "../js/searchPosts.js";
import { apiBase, apiKey, apiPosts } from "../js/url.js";
import { load } from "../js/load.js";
import { apiCall } from "../js/apiCall.js";
import { renderPostsWithFilterMyPosts } from "../js/renderPostsWithFilterMyPosts.js"
import { renderSearch } from "../js/searchPostsV2.js";
/* import { renderPostsWithFilterMyPostsV2 } from "../js/searchPostsV2.js";
 */

 renderPostsWithFilterMyPosts();


logOut();

goToCreatePost();

// searchPosts();

const searchBtn = document.getElementById('search-btn');
const searchInput = document.querySelector('#search-input');
let searchKey = '';



const token = load('token');
const option = {
    headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
        "X-Noroff-API-Key": `${apiKey}`,
    }
}
const url = `${apiBase}${apiPosts}?_tag=${searchKey}`;

console.log(option, url)

apiCall(url, option);

searchBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    console.log(searchInput.value);
    const searchUrl = url + searchInput.value;
    if (searchInput.value === '') {
        renderPostsWithFilterMyPosts();
    }   else {
        renderSearch(searchInput.value);
    }
    
});

// renderPostsWithFilterMyPostsV2();

