import { getPostsSingle } from "../js/getPostsSingle.js";
import { id } from "./singlePost.js";

/* const querryString = document.location.search;
console.log(querryString);

const params = new URLSearchParams(querryString);
console.log(params);

const id = params.get('id');
console.log(id); */
console.log(id);

const posts = await getPostsSingle();
const postArray = posts.data;
console.log(postArray.title)
console.log(postArray.body)
console.log(postArray.media.url)
console.log(postArray.media.alt)

document.querySelector('#title').value = postArray.title;
document.querySelector('#body').value = postArray.body;
document.querySelector('#media-url').value = postArray.media.url;
document.querySelector('#media-alt').value = postArray.media.alt;

