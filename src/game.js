const answer = require('./answer-generator');
let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);
let returnPut = require('./returnPut');

class Game {
    constructor() {
        console.log(`Welcome!
Please input your number(6):`);
        let answers = answer.answers() + '';
        let count = 5;
        rl.on('line', (input)=> {

            const inputs = input.split('');
            let tag = 0;
            for (const input of inputs) {
                if (inputs.indexOf(input) != inputs.lastIndexOf(input)) {
                    tag = 1;
                }
            }
            if (tag === 0 && inputs.length === 4) {
                returnPut.Put(answers, input, count);
                count--;
            }
            else {
                console.log('Cannot input duplicate numbers!');
            }
        })

    }


}
new Game();
module.exports = Game;