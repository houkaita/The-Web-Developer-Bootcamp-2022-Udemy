const button = document.querySelector('button');
const h1 = document.querySelector('h1')
button.addEventListener('click', () => {
    const newColor = makeRandomColor();
    document.body.style.backgroundColor = newColor
    h1.innerText=newColor
})

const makeRandomColor = () => {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    if(r<50 || b<50 || g<50) {
        document.body.style.color = 'white'
    }
    else {
        document.body.style.color = 'black'
    }

    return `rgb(${r}, ${g}, ${b})`;
}