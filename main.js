const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv;

const choice = argv.choice;
//const computerChoice = output;


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
      this.output = 'Scissors';
    }
    //return this.computerChoice;
    console.log(computerLogic);
    console.log(this.output);
  }
  //return output;
}
newComp = new Computer;


class Game {
  constructor(choice) {
    // this.computerChoice = [];
    this.choice = choice;
    this.computerChoice = newComp.output;
    console.log("Player plays:", choice);
    console.log("Computer plays:", this.computerChoice);

    // this.options = ['rock', 'paper', 'scissors'] ths can probably go, not used
  }

  option(choice) {
    if (this.choice = 'rock') {
      Rock.logic;
      console.log("rock logic chosen")
    } else if (this.choice = 'paper') {
      Paper.logic;
    } else {
      Scissors.logic;
    }

  }

  // computer() {
  //   let computerLogic = Math.ceil(Math.random() * 3);
  //   if (computerLogic = 1) {
  //     return this.computerChoice.push('rock');
  //   } else if (computerLogic = 2) {
  //     return this.computerChoice.push('paper');
  //   } else {
  //     return this.computerChoice.push('Scissors');
  //   }
  //   //return this.computerChoice;
  //   console.log(this.computerLogic);
  //   console.log(this.computerChoice);
  // }


}

class Rock extends Game {
  super(choice, computerChoice) { }

  logic() {
    //if else statements
    console.log("this is the from the rock logic")
  }



}

class Paper extends Game {
  super(choice, computerChoice) { }

  logic() {
    //if else statements
    console.log("this is the from the paper logic")
  }



}

class Scissors extends Game {
  super(choice, computerChoice) { }

  logic() {
    //if else statements
    console.log("this is the from the scissors logic")
  }



}
//instantiate new game
newGame = new Game(choice);
//newGame.computer();






