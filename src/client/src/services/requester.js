const request = async (method, url, data, additionalHeader) => {
    try {

        const authString = localStorage.getItem('auth');
        const auth = JSON.parse(authString || '{}');
        
        let headers = {
            'X-Parse-Application-Id': '2RjXe6GFaplaqVLYhu2JBYiLToMm76B6VJgEniSI',
            'X-Parse-REST-API-Key': 'CnBKsMP7jL5FmN3dG0sY0e4uQzDswVzrAePKV8X5',
        }

        if (additionalHeader) {
            headers['X-Parse-Revocable-Session'] = '1';
        }

        if (auth.sessionToken) {
            headers['X-Parse-Session-Token'] = auth.sessionToken;
        }

        let buildRequest;

        if (method === 'GET') {
            buildRequest = fetch(url, { headers });
        } else {
            buildRequest = fetch(url, {
                method,
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        }

        const response = await buildRequest;

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }
        try {
            const result = await response.json()
            return result;
        } catch (err) {
            return response;
        }

        // const result = await response.json();
        // console.log('from requester')
        // console.log(result);

        // return result;

    } catch (err) {
        console.error(err.message);
        throw err;
    }
};

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const patch = request.bind({}, 'PATCH');
export const put = request.bind({}, 'PUT');
export const del = request.bind({}, 'DELETE');
