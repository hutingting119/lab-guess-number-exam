const compare = require('./compare-number');
let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);
class ReurnPut {
    static Put(answer, input, count) {
        let put = compare.Number(answer, input);

        if (count === 0) {
            console.log("Game Over");
            rl.close();
        }
        else if (put === '4A0B') {
            console.log("Congratulations!");
            rl.close();
        } else {
            console.log(`${put}
Please input your number(${count}): `);
        }
    }
}

module.exports=ReurnPut;