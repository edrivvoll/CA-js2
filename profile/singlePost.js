import { logOut } from "../js/logOut.js";
import { renderPostsSingle } from "../js/renderPostsSingle.js";

export function getID(){
    
}
const querryString = document.location.search;
console.log(querryString);

const params = new URLSearchParams(querryString);
console.log(params);

export const id = params.get('id');
console.log(id);


renderPostsSingle();

logOut();