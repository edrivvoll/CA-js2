import { logOut } from "../js/logOut.js";
import { renderPostsSingle } from "../js/renderPostsSingle.js";

const querryString = document.location.search;
console.log(querryString);

const params = new URLSearchParams(querryString);
console.log(params);

export const id = params.get('id');
console.log(id);


renderPostsSingle();

logOut();