let game = $('#game');
let reset = $('.reset');
let current = $('h2');
let winner;
let player;
let currentPlayer;

$(document).ready(() => {
    //on click of any col in game container. event will happen
    game.on('click', (e) => {
    
    const colData = $('.col').get();

    const $col = $(e.target.closest('.col'))
    //determines which player gets x or o;
    if($col.length != 0 && currentPlayer === 1) {
        player = '✖️'
        $col.empty();
        $col.append('✖️');
    } else {
        player = '⭕'
        $col.empty();
        $col.append('⭕');
    };
    //sets player
    if(currentPlayer === 1){
        currentPlayer = 2;
        current.text(`⭕`);
    } else {
        currentPlayer = 1;
        current.text(`✖️`);
    };
    //resets the board
    reset.on('click', () => {
        $col.empty();
        current.text('⭕')
        currentPlayer = 0;
        $('.alert').remove()
    });

    const array = $(colData).text();
    //attenpt at tic tac toe win logic
    if(array[0], array[1], array[2] === '⭕') {
        $('body').append(`<div class='alert alert-info' role= 'alert'> Winner: ${player} </div>`)
    } else if (array[3], array[4], array[5] === '⭕'){
        $('body').append(`<div class='alert alert-info' role= 'alert'> Winner: ${player} </div>`)
    } else if (array[6], array[7], array[8] === '⭕'){
        $('body').append(`<div class='alert alert-info' role= 'alert'> Winner: ${player} </div>`)
    };

    console.log(e.target, currentPlayer, player, '--------', array,array.length)

});
});