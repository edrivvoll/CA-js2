export async function getAPIKey(url) {
    const token = localStorage.getItem('accessToken');
    console.log(token)
    const options = {
        method: 'POST',
        headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        body: JSON.stringify({
            name: 'Test key',
            
        })
    };
    const response = await fetch(url, options);
    console.log(response)

    if (response.ok) {
        return await response.json();
    }
    
    console.error(await response.json());
    throw new Error('Could not registrer for an API key');
}