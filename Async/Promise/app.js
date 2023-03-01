const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 10000)
    })
}