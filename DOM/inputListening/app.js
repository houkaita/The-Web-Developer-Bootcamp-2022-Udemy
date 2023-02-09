const username = document.querySelector('#username')
const header = document.querySelector('h1')

username.addEventListener('input', function(e) {
    header.innerText = `Welcome, ${username.value}`
    if(username.value==='') {
        header.innerText = 'Enter Your Username'
    }
})