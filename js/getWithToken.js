export async function getWithToken(url) {
    try {
        console.log(url);
        const token = localStorage.getItem('accessToken');
        console.log(token);
        const fetchOptions = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                "X-Noroff-API-Key": apiKey.data.key,
            },
        };
        const response = await fetch(url, fetchOptions);
        console.log(response);
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
}