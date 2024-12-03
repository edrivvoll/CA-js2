import { logOut } from "../js/logOut.js";
import { renderPostsWithLoop } from "../js/renderPostsWithLoop.js";
import { searchPosts } from "../js/searchPosts.js";
import { sortPostsByDate } from "../js/sortPosts.js";


renderPostsWithLoop();

logOut();

searchPosts();

sortPostsByDate();