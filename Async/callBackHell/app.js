/*etTimeout(() =>{
    document.body.style.backgroundColor= 'red';
    setTimeout(() =>{
        document.body.style.backgroundColor= 'orange';
        setTimeout(() =>{
            document.body.style.backgroundColor= 'yellow';
            setTimeout(() =>{
                document.body.style.backgroundColor= 'green';
                setTimeout(() =>{
                    document.body.style.backgroundColor= 'blue';
                    setTimeout(() =>{
                        document.body.style.backgroundColor= 'purple';
                        setTimeout(() =>{
                            document.body.style.backgroundColor= 'violet';
                        }, 2000) 
                    }, 2000) 
                }, 2000) 
            }, 2000) 
        }, 2000) 
    }, 2000) 
}, 2000) */

/*const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'violet'];
let delay = 2000;

const delayColorChange = (delay) => {
    for(const e of rainbow) {
        setTimeout(() => {
            document.body.style.backgroundColor = e;
        }, delay)
    }
}

delayColorChange(delay);*/


/*while(always) {
  delayColorChange(rainbow[newColorNumber], delay)  
  if(newColorNumber===rainbow.length-1) {
    newColorNumber=0;
  } 
  newColorNumber++;
}
*/
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor=color;
            resolve();
        }, delay)
    })
}
/*
delayedColorChange('red', 1000)
.then(() => delayedColorChange('orange', 1000))
.then(() => delayedColorChange('yellow', 1000))
.then(() => delayedColorChange('green', 1000))
.then(() => delayedColorChange('blue', 1000))
.then(() => delayedColorChange('purple', 1000))
.then(() => delayedColorChange('violet', 1000))*/

const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'violet'];

const rainbow = async () => {
    await delayedColorChange('orange', 2000)
    await delayedColorChange('yellow', 2000)
    await delayedColorChange('green', 2000)
    await delayedColorChange('blue', 2000)
    await delayedColorChange('purple', 2000)
    await delayedColorChange('violet', 2000)
    return rainbow();
}