import { load } from "./load.js";

/**
 * This is a reuseable function to make different types of api calls.
 * @param {string} url This is the url for the api call.
 * @param {object} option This is the header in your api call.
 * @returns The api response.
 * @example
 * ```
 * // Use this to access posts.
 * const posts = await apiCall(url , option);
 * const postArray = posts.data;
 * // Returns posts array.
 * ```
 */

export async function apiCall(url, option) {
    const token = load('token');
    if (!token) throw new Error('No authorization token found');

    const response = await fetch(url, option); {
        option;
    }
    console.log(response)
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Could not fetch posts');
    }

    return await response.json();
}


