const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv;

const choice = argv.choice;



class Computer {
  constructor() {
    this.output = "";

    let computerLogic = Math.ceil(Math.random() * 3);
    console.log("computer logic:", computerLogic);

    if (computerLogic === 1) {
      this.output = 'rock';
    } else if (computerLogic === 2) {
      this.output = 'paper';
    } else {
      this.output = 'scissors';
    }

  }
}
newComp = new Computer;


class Game {
  constructor(choice) {
    this.choice = choice;
    this.computerChoice = newComp.output;
    console.log("Player plays:", choice);
    console.log("Computer plays:", this.computerChoice);

  }

  option(choice) {
    if (this.choice === 'rock') {
      let newRock = new Rock(
      );
      newRock.logic(this.choice, this.computerChoice);
      console.log("rock logic chosen")
    } else if (this.choice === 'paper') {
      let newPaper = new Paper();
      newPaper.logic(this.choice, this.computerChoice);
      console.log("paper logic chosen")
    } else {
      let newScissors = new Scissors();
      newScissors.logic(this.choice, this.computerChoice);

      console.log("scissor logic chosen")
    }

  }
}

class Rock extends Game {
  constructor(choice, computerChoice) {
    super(choice, computerChoice)
  }

  logic() {
    if (this.computerChoice === 'rock') {
      //console.log('Player Plays rock!')
      // console.log('Computer Plays rock!')
      console.log("Tie!")
    } else if (this.computerChoice === 'paper') {
      //console.log('Player Plays rock!')
      // console.log('Computer Plays paper!')
      console.log("Computer wins.")
    } else {
      //console.log('Player Plays rock!')
      // console.log('Computer Plays Scissors!')
      console.log("Player wins.")
    }
  }
}

class Paper extends Game {
  constructor(choice, computerChoice) {
    super(choice, computerChoice)
  }

  logic(choice, computerChoice) {
    if (this.computerChoice === 'paper') {
      // console.log('Player Plays paper!')
      // console.log('Computer Plays paper!')
      console.log("Tie!")
    } else if (this.computerChoice === 'rock') {
      // console.log('Player Plays paper!')
      // console.log('Computer Plays rock!')
      console.log("Player wins.")
    } else {
      //console.log('Player Plays paper!')
      // console.log('Computer Plays scissors !')
      console.log("Computer wins.")
    }
  }



}

class Scissors extends Game {
  constructor(choice, computerChoice) {
    super(choice, computerChoice)
  }

  logic() {
    if (this.computerChoice === 'rock') {
      //console.log('Player Plays scissors!')
      // console.log('Computer Plays rock!')
      console.log("Computer wins!")
    } else if (this.computerChoice === 'paper') {
      // console.log('Player Plays scissors!')
      // console.log('Computer Plays paper!')
      console.log("Player wins.")
    } else {
      // console.log('Player Plays scissors!')
      // console.log('Computer Plays Scissors!')
      console.log("Tie.")
    }
  }
}


//instantiate new game
newGame = new Game(choice);
newGame.option();






