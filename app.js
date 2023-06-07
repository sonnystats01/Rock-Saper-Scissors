

//creating a random number and then assigning said numbers to a string value of rock paper or scissors
function getComputerChoice () {
    let randChoice = Math.floor(Math.random() * 3 + 1);
    if(randChoice === 1) {
        return 'rock';
    } else if (randChoice === 2) {
        return 'paper';
    } else if (randChoice === 3) {
        return  'scissors';
    }

};

//using a funciton to get the userinput and determining if it's one of the 3 options 
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Not a valid selection. Please try again.') 
    }
}
// using a function to determine the winner between the computer choice and the getUserChoice
//returning is a powerful piece of syntax as you can use the value later on. Very useful to know
function determineWinner (getUserChoice, getComputerChoice) {
    if(getUserChoice === getComputerChoice) {
        return 'This game was a tie!'
    }
    if(getUserChoice === 'rock') {
        if(getComputerChoice === 'paper') {
            return 'You lose to the computer!'
        } else {
            return 'You beat the computer!'
        }
    }

    if(getUserChoice === 'paper') {
        if(getComputerChoice === 'scissors'){
            return 'You lose to the computer!'
        } else {
            return 'You beat the computer!'
        }
    }

    if(getUserChoice === 'scissors') {
        if (getComputerChoice === 'rock') {
            return 'You lose to the computer'
        } else {
            return 'You beat the computer!'
        }
    }
}


//the final part of putting it all together. Wasn't totally sure on how to add a scoring element. But may try later on. 
function playGame(){
    let userChoice = getUserChoice('paper');
    let computerChoice = getComputerChoice();
    console.log(`You shot a ${userChoice}`);
    console.log(`The computer shot a ${computerChoice}`);

}
for(let i = 0; i <= 5; i++) {
    playGame();
}