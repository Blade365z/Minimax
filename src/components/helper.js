export const checkIfWin = (movesArr, player) => {
    let score = 0;
    for (let i = 0; i <= 2; i++) {
        if (i === 0) {
            if ((movesArr[0] == player && movesArr[4] == player && movesArr[8] == player) || (movesArr[2] == player && movesArr[4] == player && movesArr[6] == player)) {
                console.log(player, ' won!')
                score = player === 'X' ? +10 : -10;
                return true;
            }
        }
        else if ((movesArr[i * 3 + 0] == player && movesArr[i * 3 + 1] == player && movesArr[i * 3 + 2] == player) || (movesArr[0 * 3 + i] == player && movesArr[1 * 3 + i] == player && movesArr[2 * 3 + i] == player)) {
            console.log(player, ' won!')
            score = player === 'X' ? +10 : -10;
            return true;
        }
    }
    if (!movesArr.includes(null)) {
        score = 0;
        return  false;
    }
}

export const findEmptySpacesInArray = (arr) => {
    let emptySpacesArr = [];
    for (let i = 0; i < 9; i++) {
        if (arr[i] === null) {
            emptySpacesArr.push(i)
        }
    }
    return emptySpacesArr;
}

export const minimax = (currentBoardStateArr, player) => {
    let isto = player === 'X' ? 'max' : 'min';
    let emptySpaces = findEmptySpacesInArray(currentBoardStateArr);
    if(checkIfWin(currentBoardStateArr,'X')){
        return {score:-10}
    }else if(checkIfWin(currentBoardStateArr,'O')){
        return {score:10}
    }else if(emptySpaces.length===0){
        return {score:0}
    }

}   