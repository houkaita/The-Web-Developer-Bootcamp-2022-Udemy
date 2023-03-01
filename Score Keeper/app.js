const p1 = {
    score: 0,
    button: document.querySelector('#p1ScoreButton'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2ScoreButton'),
    display: document.querySelector('#p2Display')
}

const content = document.querySelector('.card-content')
const resetButton = document.querySelector('#Reset')
const winningScoreSelect = document.querySelector('#playto')


let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {

    if(!isGameOver) {
        player.score += 1;
        player.display.textContent = player.score;
        if(player.score === winningScore-1 && opponent.score===winningScore-1) {            
            winningScore+=1;
        }
        if(player.score === winningScore) {
            isGameOver=true;
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')

            player.button.disabled=true;
            opponent.button.disabled=true;
        }

        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function () {
    updateScores(p1,p2)
})

p2.button.addEventListener('click', function () {
    updateScores(p2,p1)
})

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', function() {
    reset();
})

function reset () {
    isGameOver = false;
    p1.score= 0;
    p2.score = 0;

    p1.display.textContent=p1.score;
    p2.display.textContent=p2.score;

    p1.display.classList.remove('has-text-success', 'has-text-danger')
    p2.display.classList.remove('has-text-danger', 'has-text-success')

    p1.button.disabled = false;
    p2.button.disabled=false;
}