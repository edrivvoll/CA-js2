import { logOut } from "../js/logOut.js";
import { goToCreatePost } from "../js/goToCreatePost.js";
import { renderPostsWithLoop } from "../js/renderPostsWithLoop.js";
import { searchPosts } from "../js/searchPosts.js";
import { apiAuthor, apiBase, apiKey, apiPosts } from "../js/url.js";
import { load } from "../js/load.js";
import { apiCall } from "../js/apiCall.js";


renderPostsWithLoop();

logOut();

goToCreatePost();

searchPosts();
/* const posts = await getPosts();
console.log(posts); */
const token = load('token');
const option = {
    headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
        "X-Noroff-API-Key": `${apiKey}`,
    }
}
const url = apiBase + apiPosts + '?_tag=test';

console.log(option, url)

apiCall(url, option);