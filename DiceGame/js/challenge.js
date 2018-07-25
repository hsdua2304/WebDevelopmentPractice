var score, roundScore, activePlayer, gamePlaying, lastDice, targetScore;
init();

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
        //Random Varibale
        var diceVal1 = Math.floor(Math.random()*6)+1;
        var diceVal2 = Math.floor(Math.random()*6)+1;
        
        //Display Result on Dice
        document.querySelector('#dice-1').style.display = 'block';
        document.querySelector('#dice-2').style.display = 'block';
        
        document.querySelector('#dice-1').src = "img/dice-"+diceVal1+".png";
        document.querySelector('#dice-2').src = "img/dice-"+diceVal2+".png";

        if(diceVal1 !== 1 && diceVal2 !== 1){
            roundScore += diceVal1 + diceVal2;
            document.querySelector('#current-'+activePlayer).textContent = roundScore;
        }else{
            nextPlayer();
        }

        // Challenge - 2
        // if(diceVal === 6 && lastDice === 6){
        //     score[activePlayer] = 0;
        //     document.querySelector('#score-'+activePlayer).textContent = score[activePlayer];
        //     nextPlayer();
        // } else if(diceVal !== 1){
        //     roundScore += diceVal1+diceVal2;
        //     document.querySelector('#current-'+activePlayer).textContent = roundScore;
        // }else{
        //     nextPlayer();
        // }

        // lastDice = diceVal;
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        score[activePlayer] += roundScore;

        document.querySelector('#score-'+activePlayer).textContent = score[activePlayer];

        var input = document.querySelector('#targetScore').value;

        if(input){
            targetScore = input;
        }else{
            targetScore = 100;
        }
       
    
        if(score[activePlayer] >= targetScore){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('#dice-1').style.display = 'none';
            document.querySelector('#dice-2').style.display = 'none';
            
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }else{
            nextPlayer();
        }
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

    // document.querySelector('.dice').style.display = 'none';
}

function init(){
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    targetScore = 0;
    gamePlaying = true;

    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#targetScore').value = "";

    document.querySelector('#name-0').textContent = 'Player1';
    document.querySelector('#name-1').textContent = 'Player2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';


       
}