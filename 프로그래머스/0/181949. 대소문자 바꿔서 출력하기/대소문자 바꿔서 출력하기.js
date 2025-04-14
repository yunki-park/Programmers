const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    let resultStr = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === str[i]) {
            resultStr += str[i].toUpperCase();
        } else {
            resultStr += str[i].toLowerCase();
        }
    }
    
    console.log(resultStr);
});