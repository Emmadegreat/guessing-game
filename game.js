let name = prompt('Enter your name');

for (let i = 2; i < 5; i++) {
    let Number = Math.floor(Math.random() * i ) + 1;
    let guess = parseInt(prompt(`enter a number between 1 and ${i}`));
    let count = 0;

    if (guess > Number) {
        console.log('your guess is high try again');
        console.log(`point: ${count}`);

    } else if(guess < Number){
        console.log('your guess is low try again');
        console.log(`point: ${count}`);
    } else if(guess == Number){
        console.log(`correct, you got it,` + 'point: ' + 1);
        break;
    } else {
        console.log('your chance has expired');
    }
}

