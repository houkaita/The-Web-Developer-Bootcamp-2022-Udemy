const fakeRequest = (url, success, failure) => {
    const delay = Math.random() * 4000;

    setTimeout(() =>{
        if(delay<2000) {
            success(`Here's your data from ${url}!!!`)
        } 
        else if (delay>2000){
            failure(`Timeout Error`)
        }
    }, delay)
}

fakeRequest('dog.com', (response) => {
    console.log(`yuuppp ${response}`)
}, (response) => {
    console.log(`phewwww error, ${response}`)
})