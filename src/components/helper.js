const human = 'O';
const AI = 'X';

export const checkIfWin = (movesArr, player) => {
    let score = 'WIN';
    for (let i = 0; i <= 2; i++) {
        if (i === 0) {
            if ((movesArr[0] == player && movesArr[4] == player && movesArr[8] == player) || (movesArr[2] == player && movesArr[4] == player && movesArr[6] == player)) {
                return score;
            }
        }
        if ((movesArr[i * 3 + 0] == player && movesArr[i * 3 + 1] == player && movesArr[i * 3 + 2] == player) || (movesArr[0 * 3 + i] == player && movesArr[1 * 3 + i] == player && movesArr[2 * 3 + i] == player)) {
            return score;
        }
    }
    return null;
}
export const findEmptySpacesInArray = (arr) => {
    let emptySpacesArr = [];
    for (let i = 0; i < 9; i++) {
        if (arr[i] === '') {
            emptySpacesArr.push(i)
        }
    }
    return emptySpacesArr;
}
export const bestMove = (arr, player) => {
    let bestMove = minimax(arr, player);
    return bestMove;
}
export const minimax = (currentBoardStateArr, player) => {
    let emptySpaces = findEmptySpacesInArray(currentBoardStateArr);
    if (checkIfWin(currentBoardStateArr, AI)) {
        return { score: 10 };
    } else if (checkIfWin(currentBoardStateArr, human)) {
        return { score: -10 };
    } else if (emptySpaces.length === 0) {
        return { score: 0 };
    }
    var moves = [];
    for (let i = 0; i < emptySpaces.length; i++) {
        var move = {};
        move.index = emptySpaces[i];
        var backup = currentBoardStateArr[emptySpaces[i]]
        currentBoardStateArr[emptySpaces[i]] = player;
        if (player === AI) {
            var result = minimax(currentBoardStateArr, human);
            move.score = result.score;
        } else {
            var result = minimax(currentBoardStateArr, AI);
            move.score = result.score;
        }
        currentBoardStateArr[emptySpaces[i]] = backup
        moves.push(move);
    }
    var bestMove;
    if (player === AI) {
        var bestScore = -10000;
        for (var i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        var bestScore = 10000;
        for (var i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }
    return moves[bestMove];
}   