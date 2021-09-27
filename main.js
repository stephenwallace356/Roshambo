const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv;

class Game {
  constructor(choice, computerChoice) {
    this.computerChoice = computerChoice;
    this.choice = choice;
    // this.options = ['rock', 'paper', 'scissors'] ths can probably go, not used

  }
  outcome(choice, computerChoice) {
    if (this.choice = 'rock' this.computerChoice = 'paper') {
      //if( this)
      console.log(argv., 'Paper beats Rock')

    }


  }

}
let computerChoice = Math.ceil(Math.random() * 3);
if (computerChoice = 1) {
  computerChoice = 'rock';
} else if (computerChoice = 2) {
  computerChoice = 'paper';
} else {
  computerChoice = 'scissors';
}








// if (argv.move > 3 && argv.distance < 53.5) {
//   console.log('Plunder more riffiwobbles!')
// } else {
//   console.log('Retreat from the xupptumblers!')
// }
