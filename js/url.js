const BASE_URL = "https://v2.api.noroff.dev";
// const BASE_URL = "https://api.noroff.dev/api/v1";

const regEndpoint = "/auth/register";
const loginEndpoint = "/auth/login";
const getPostsEndpoint = '/social/posts';

export const regUrl = `${BASE_URL}${regEndpoint}`;

export const loginUrl = `${BASE_URL}${loginEndpoint}`;

export const getPostsURL = `${BASE_URL}${getPostsEndpoint}`;