export async function getWithToken(url) {
    try {
        console.log(url);
        const token = localStorage.getItem('accessToken');
        const apiKey = '4f3ee179-18e9-46f1-b721-844731846040';
        console.log(token);
        const fetchOptions = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, 
                "X-Noroff-API-Key": `${apiKey}`,               
            },
        };
        const response = await fetch(url, fetchOptions);
        console.log(response);
        const json = await response.json();
        console.log(json);
        console.log(fetchOptions);
        
    } catch (error) {
        console.log(error);
    }
} 
