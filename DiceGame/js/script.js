var score, roundScore, activePlayer;
init();

document.querySelector('.btn-roll').addEventListener('click',function(){
    //Random Varibale
    var diceVal = Math.floor(Math.random()*6)+1;

    //Display Result on Dice
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = "img/dice-"+diceVal+".png";
    if(diceVal !== 1){
        roundScore += diceVal;
        document.querySelector('#current-'+activePlayer).textContent = roundScore;
    }else{
        nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    score[activePlayer] += roundScore;

    document.querySelector('#score-'+activePlayer).textContent = score[activePlayer];
   

    if(score[activePlayer] >= 10){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    }else{
        nextPlayer();
    }
});
document.querySelector('.btn-new').addEventListener('click',init);

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

function init(){
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;

    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.dice').style.display = 'none';


       
}