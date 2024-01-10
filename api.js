const apiKeyHeader = { 'x-api-key': 'live_qy1Dufom4upfPeeHE3UHLcEheBWF2ksM8TrBIOzwaztDSXNpfSKLCzM8lIvT0h3x' };

export async function fetchData(endpoint) {
    const response = await fetch(`https://api.thedogapi.com/v1/${endpoint}`, {
        headers: apiKeyHeader
    });
    const data = await response.json();
    return data;
}

export async function postData(endpoint, body) {
    const response = await fetch(`https://api.thedogapi.com/v1/${endpoint}`, {
        method: 'POST',
        headers: {
            ...apiKeyHeader,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
}

export async function putData(endpoint, id, body) {
    const response = await fetch(`https://api.thedogapi.com/v1/${endpoint}/${id}`, {
        method: 'PUT',
        headers: {
            ...apiKeyHeader,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
}

export async function patchData(endpoint, id, body) {
    const response = await fetch(`https://api.thedogapi.com/v1/${endpoint}/${id}`, {
        method: 'PATCH',
        headers: {
            ...apiKeyHeader,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
}
