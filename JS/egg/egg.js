const teste='teste'

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        console.log('EGG') ;
        this.eggCount++;
    }
}

const greet = (e) => {
    console.log(`Hey `+e)
}