var input = prompt('What shoudl i do?')
var todo = []
var oi = 0;

do {
    if(input==='new') {
        var newValue = prompt('Add something');
        todo.push(newValue);
    }

    if(input==='list') {
        todo.map(e => {
            oi++
            console.log(`${oi} ${e}`)
        })
    }

    if(input==='delete') {
        var deleteValue = prompt('Select a value to delete?');
        for(let i=0; i<input.length; i++) {
            if(todo[i]===deleteValue) {
                delete[i]
            }
        }
    }

    oi=0;

    input = prompt('What shoudl i do?')

} while (input!=='quit')