import { logOut } from "../js/logOut.js";
import { goToCreatePost } from "../js/goToCreatePost.js";
import { renderPostsWithLoop } from "../js/renderPostsWithLoop.js";
import { searchPosts } from "../js/searchPosts.js";


renderPostsWithLoop();

logOut();

goToCreatePost();

searchPosts();
/* const posts = await getPosts();
console.log(posts); */

