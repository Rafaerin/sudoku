console.log('hello')

const input = [
    [0, 0, 0, 0, 9, 0, 0, 7, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 8],
    [0, 0, 1, 0, 8, 6, 2, 0, 0],

    [0, 0, 8, 7, 0, 0, 0, 0, 0],
    [2, 9, 0, 0, 0, 0, 0, 0, 0],
    [0, 6, 0, 1, 0, 3, 4, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 1, 0],
    [6, 0, 0, 5, 0, 0, 3, 0, 0],
    [0, 4, 5, 0, 1, 0, 0, 0, 0],
]

printBoard(input)

const output = solveSudoku(input)

printBoard(output)

function printBoard(input) {
    console.log('here is board printer')
}

[0, 0, 0, 0, 9, 0, 0, 7, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 8],
    [0, 0, 1, 0, 8, 6, 2, 0, 0],

    [0, 0, 8, 7, 0, 0, 0, 0, 0],
    [2, 9, 0, 0, 0, 0, 0, 0, 0],
    [0, 6, 0, 1, 0, 3, 4, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 1, 0],
    [6, 0, 0, 5, 0, 0, 3, 0, 0],
    [0, 4, 5, 0, 1, 0, 0, 0, 0],

    function solveSudoku() {
        for (let row = 0; row < N; row++) {
            for (let col = 0; col < N; col++) {
                if (board[row][col] === 0) {
                    for (let num = 1; num <= N; num++) {
                        if (isSafe(row, col, num)) {
                            board[row][col] = num;
                            if (solve()) {
                                return true;
                            }
                            board[row][col] = 0;
                        }
                    }
                    return false;
                    console.log('here is sudoku solver')
                }
