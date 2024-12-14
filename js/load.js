/**
 * This loads a value from local storage.
 * @param {string} key This is the key of the value in local storage.
 * @returns The value stored in the key.
 * @example
 * ```
 * // This loads the value from the local
 * // storage key into the varible token. 
 * const token = load('token');
 * ```
 */

export function load(key) {
    return JSON.parse(localStorage.getItem(key));
}