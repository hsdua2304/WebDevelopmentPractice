var playerScore,currentScore,turn,wins;

playerScore = [0,0];
currentScore = 0;
turn = 0;
wins = false;

while(playerScore[0] < 100 || playerScore[1] < 100){
    if(turn == 0 && wins == false){
        console.log("Player 1's Turn");
        currentScore = 0;
        while(currentScore != 1){
            currentScore = Math.floor(Math.random() * 6) + 1;
            if(currentScore != 1 && playerScore[0] < 100){
                playerScore[0] += currentScore;
                console.log("Player1 Score till now : " + playerScore[0]);
            }else{
                turn=1;
                break;
            }
        }
    }else if(turn == 1 && wins == false){
                console.log("Player 2's Turn");
                currentScore = 0;
                while(currentScore != 1){
                    currentScore = Math.floor(Math.random() * 6) + 1;
                    if(currentScore != 1 && playerScore[1] < 100){
                        playerScore[1] += currentScore;
                        console.log("Player2 Score till now : " + playerScore[1]);
                    }else{
                        turn=0;
                        break;
                    }
                }
            }
            if(playerScore[1] >= 100 || playerScore[0] >= 100){
                wins = true;
                break;
            }
    }

if(playerScore[0] >= 100){
    console.log("Player 1 wins");
}else{
    console.log("Player 2 wins");
}