let player1 = Math.floor(Math.random() * 6) +1;

console.log(player1);

let computer = Math.floor(Math.random() * 6) +1;

console.log(computer);

if (player1 == computer) {
    alert('it is a draw');
} else if (player1 > computer) {
    alert('player 1 win!');
} else {
    alert('computer win!');
}

