const input = document.querySelector('#catName');
const form = document.querySelector('#shelterForm');
const list = document.querySelector('#cats');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const newLi = document.createElement('LI');
    const catName= input.value;

    newLi.innerText = catName;

    list.append(newLi)

    input.value = '';
})