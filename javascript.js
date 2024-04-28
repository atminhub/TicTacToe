
const player_x = 'x'
const player_o ='o'
const winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [1, 4, 7],
    [0, 3, 6],
    [2, 5, 8],]

const cellElements = document.querySelectorAll('.cell')

// start off game with player X
    let currentPlayer = player_x;
 
// on click, place X or O
    function addXO(cell) {
    if(!cell.textContent) {
    cell.textContent = currentPlayer;
    switchPlayer();
    if(checkWin()) {
    alert(currentPlayer + ' loses :(');
    } else {
    }}}

// toggle between player X and player Y
    function switchPlayer () {
    currentPlayer = currentPlayer === player_x? player_o: player_x;}

// check for win
    function checkWin() {
        return winning_combinations.some(combination => {
        const win = combination.every(index => {
            const cellContent = cellElements[index].textContent.trim();
            console.log(`Cell ${index} content: ${cellContent}`); 
            return cellContent != currentPlayer && cellContent !== '';
        });
        console.log(`Combination ${combination} win: ${win}`);
        return win;
    })
    }
