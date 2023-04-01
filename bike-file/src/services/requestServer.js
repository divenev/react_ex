const host = 'http://localhost:3030'

export const requestServer = async (url, method, data) => {
    const options = {
        method: method,
        headers: {}
    };

    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(data)
    }

    let userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    try {
        let response = await fetch(host + url, options)

        if (response.ok === false) {
            if (response.status === 403) {
                localStorage.removeItem('userData')
            }
            const err = await response.json()
            throw new Error(err.message)
        }

        if (response.status === 204) {
            return response
        }
        let responseData = await response.json()
        return responseData

    } catch (err) {
        alert(await err.message)
        throw err
    }
}