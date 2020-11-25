const authProvider = {
    // authentication
    login: params => Promise.resolve(),
    checkError: error => Promise.resolve(),
    checkAuth: params => Promise.resolve(),
    logout: () => Promise.resolve(),
    getIdentity: () => Promise.resolve(),
    // authorization
    getPermissions: params => Promise.resolve(),
};

export default authProvider;