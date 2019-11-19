export default (dataToReturn, shouldFail) => {
    const request = () =>
        new Promise((resolve, reject) => {
            if (shouldFail) {
                reject({ error: 'Something went wrong...' });
                return;
            }
            resolve(dataToReturn);
        });

    return {
        get: request,
        post: request,
        put: request,
    };
};
