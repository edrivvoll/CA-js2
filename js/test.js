/* export const apiBase = 'https://v2.api.noroff.dev';
export const apiAuth = '/auth';
export const apiReg = '/register';
export const apiLogin = '/login';
export const apiPosts = '/social/posts';
export const apiKey = '4f3ee179-18e9-46f1-b721-844731846040';

export function save(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}

export function load(key){
    return JSON.parse(localStorage.getItem(key));
}

export async function getPosts(){
    const response = await fetch(`${apiBase}${apiPosts}`, {
        headers: {
            Authorization: `Bearer ${load('token')}`,
            "X-Noroff-API-Key": `${apiKey}`,
        }
    });
    return await response.json();
}

export async function register(name, email, password){
    const response = await fetch(`${apiBase}${apiAuth}${apiReg}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ name, email, password })
    });

    if (response.ok) {
        return await response.json();
    }
    throw new Error('Could not register the account');
}

export async function login(email, password) {
    const response = await fetch(`${apiBase}${apiAuth}${apiLogin}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ email, password })
    });

    if (response.ok) {
        const { accessToken, ...profile } = (await response.json()).data;
        save('token', accessToken);
        save('profile', profile);
        return profile;
    }
    throw new Error('Could not log in account');
}

export async function onAuth(event){
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (event.submitter.dataset.auth === 'login'){
        await login(email, password);
    } else {
        await register(name, email, password);
        await login(email, password);
    }

    const posts = await getPosts();
    console.log(posts);
}

export function setAuthListener(){
    document.forms.auth.addEventListener('submit', onAuth);
}

setAuthListener(); */


export const apiBase = 'https://v2.api.noroff.dev';
export const apiAuth = '/auth';
export const apiReg = '/register';
export const apiLogin = '/login';
export const apiPosts = '/social/posts';
export const apiKey = '4f3ee179-18e9-46f1-b721-844731846040';

export function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function load(key) {
    return JSON.parse(localStorage.getItem(key));
}

export async function getPosts() {
    const token = load('token');
    if (!token) throw new Error('No authorization token found');

    const response = await fetch(`${apiBase}${apiPosts}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "X-Noroff-API-Key": `${apiKey}`,
        }
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Could not fetch posts');
    }

    return await response.json();
}

export async function register(name, email, password) {
    const response = await fetch(`${apiBase}${apiAuth}${apiReg}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ name, email, password })
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Could not register the account');
    }

    return await response.json();
}

export async function login(email, password) {
    const response = await fetch(`${apiBase}${apiAuth}${apiLogin}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ email, password })
    });

    if (response.ok) {
        const result = await response.json();
        const { accessToken, ...profile } = result.data || {};
        if (!accessToken) throw new Error('No access token in response');
        save('token', accessToken);
        save('profile', profile);
        return profile;
    }

    const error = await response.json();
    throw new Error(error.message || 'Could not log in account');
}

export async function onAuth(event) {
    event.preventDefault();
    const name = event.target.name?.value || '';
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!email || !password || (event.submitter.dataset.auth === 'register' && !name)) {
        throw new Error('All fields are required');
    }

    if (event.submitter.dataset.auth === 'login') {
        await login(email, password);
    } else {
        await register(name, email, password);
        await login(email, password);
    }

    const posts = await getPosts();
    console.log(posts);
}

export function setAuthListener() {
    const form = document.forms.auth;
    if (!form) throw new Error('Auth form not found');
    form.addEventListener('submit', onAuth);
}

setAuthListener();
