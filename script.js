const btnRoll = document.querySelector('.roll');
const btnHold = document.querySelector('.hold');
const btnRestart = document.querySelector('.restart');
const dice = document.querySelector('.dice');
const current0 = document.querySelector('.current-0');
const current1 = document.querySelector('.current-1');
const player0 = document.querySelector('.player-0');
const player1 = document.querySelector('.player-1');
const score0 = document.querySelector('.score-0');
const score1 = document.querySelector('.score-1');
const name0 = document.querySelector('.name-0');
const name1 = document.querySelector('.name-1');

let scores = [0,0];
let currentScore = 0;
let activePlayer = 0;
score0.textContent = 0;
score1.textContent = 0;
let playing = true;


function switchPlayer(){
    document.querySelector(`.current-${activePlayer}`).textContent = 0;
    currentScore = 0;
    player0.classList.toggle('player-active');
    player1.classList.toggle('player-active');
    activePlayer = activePlayer === 1 ? 0 : 1 ;
}

function restart (){
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 'Current Score';
    current1.textContent = 'Current Score';
    player0.classList.add('player-active');
    player1.classList.remove('player-active');
    player0.classList.remove('player-winner');
    player1.classList.remove('player-winner');
    dice.classList.remove('hidden');
    playing = true;
}


btnRoll.addEventListener('click', () => {
    if(playing){
    const random = Math.trunc(Math.random() * 6) + 1;
    console.log(random);
    dice.src = `img/dice-${random}.png`;

    if(random !== 1){
        currentScore += random;
        document.querySelector(`.current-${activePlayer}`).textContent = currentScore;
    }else{
        currentScore = 0;
        document.querySelector(`.current-${activePlayer}`).textContent = 0;
        player0.classList.toggle('player-active');
        player1.classList.toggle('player-active');
        activePlayer = activePlayer === 1 ? 0 : 1 ;

    }
}});

btnHold.addEventListener('click', () => {
    if(playing){
    scores[`${activePlayer}`] += currentScore;
    document.querySelector(`.score-${activePlayer}`).textContent = scores[`${activePlayer}`];
    }
    if(scores[`${activePlayer}`] >= 100){
        playing = false;
        document.querySelector(`.name-${activePlayer}`).textContent = 'WINNER!';
        document.querySelector(`.player-${activePlayer}`).classList.add('player-winner');
        dice.classList.add('hidden');
    }else{
        switchPlayer();
    }
});

btnRestart.addEventListener('click', restart);