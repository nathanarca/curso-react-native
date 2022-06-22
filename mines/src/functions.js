const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_, row) => {

        return Array(columns).fill(0).map((_, column) => {
            return {
                row,
                column,
                nearMines: 0,
                opened: false,
                mined: false,
                exploded: false,
                flagged: false
            }
        })

    });
}

const spreadMines = (board, minesAmount) => {
    const rows = board.length;
    const columns = board[0].length;

    let minesPlaced = 0;

    while (minesPlaced < minesAmount) {
        const randomRow = Math.floor(Math.random() * rows, 10);
        const randomColumn = Math.floor(Math.random() * columns, 10);

        if (!board[randomRow][randomColumn].mined) {
            board[randomRow][randomColumn].mined = true;
            minesPlaced++;
        }
    }
}

const createMineBoard = (rows, columns, minesAmount) => {
    const board = createBoard(rows, columns);
    spreadMines(board, minesAmount);
    return board;
}

const cloneBoard = board => {
    return board.map(row => {
        return row.map(field => {
            return { ...field }
        })
    })
}


const getNeighbors = (board, row, column) => {

    const neighbors = [];

    const rows = [rows - 1, row, row + 1];

    const columns = [column - 1, column, column + 1];

    rows.forEach(r => {
        columns.forEach(c => {

            const diferent = r !== row || c !== column;
            const validRow = r >= 0 && r < board.length;
            const validColumn = c >= 0 && c < board[0].length;

            if (diferent && validRow && validColumn) {
                neighbors.push(board[r][c]);
            }

        })
    });

    return neighbors;
}

const safeNeighbors = (board, row, column) => {

    const safes = (result, neighbor) => result && !neighbor.mined;

    return getNeighbors(board, row, column).reduce(safes, true);
}


const openField = (board, row, column) => {

    const field = board[row][column];

    if (!field.opened) {
        field.opened = true;

        if (field.mined) {
            field.exploded = true;
        }

        else if (safeNeighbors(board, row, column)) {

            getNeighbors(board, row, column).forEach(neighbor => openField(board, neighbor.row, neighbor.column));

        } else {

            const neighbors = getNeighbors(board, row, column);

            field.nearMines = neighbors.filter(n => n.mined).length;

        }
    }
}

const fields = board => [].concat(...board);

const hadExplosion = board => fields(board).filter(field => field.exploded).length > 0;

const pendding = field => (field.mined && !field.flagged) || (!field.mined && !field.opened);

const wonGame = board => fields(board).filter(pendding).length === 0;

const penddingFields = board => fields(board).filter(pendding).length;

const flaggedUsed = board => fields(board).filter(field => field.flagged).length;

const showMines = board => fields(board).filter(field => field.mined).forEach(field => field.opened = true);

const invertFlag = (board, row, column) => {
    const field = board[row][column];
    field.flagged = !field.flagged;
}

export {
    createMineBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    flaggedUsed,
    showMines,
    invertFlag,
    penddingFields
}
