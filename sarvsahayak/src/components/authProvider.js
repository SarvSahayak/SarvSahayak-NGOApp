// const authProvider = {
//     // authentication
//     //login: params => Promise.resolve(),
//     //checkError: error => Promise.resolve(),
//     checkAuth: () => localStorage.getItem('authToken')
//     ? Promise.resolve()
//     : Promise.reject({ message: false }),
//    // logout: () => Promise.resolve(),
//    // getIdentity: () => Promise.resolve(),
//     // authorization
//    // getPermissions: params => Promise.resolve(),
// };

// export default authProvider;

const authProvider = {
    // called when the user attempts to log in
    login:  ({ email, password }) =>  {
        const request = new Request('https://sarvsahayakapi.herokuapp.com/ngos/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(authToken => {
                localStorage.setItem('authToken', JSON.stringify(authToken));
            })
            // .catch(() => {
            //     throw new Error('Network error')
            // });
    },

    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('authToken');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('authToken');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('authToken')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};


export default authProvider;