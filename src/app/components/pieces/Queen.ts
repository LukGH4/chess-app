import { Piece } from "../chessboard/Chessboard"

export function loadQueens (){
    const queens: Piece[] = [];

    queens.push({image: './assets/images/queen_w.png', vertPos: 0, horiPos: 3, side: 'white', type: 'queen'});
    queens.push({image: './assets/images/queen_b.png', vertPos: 7, horiPos: 3, side: 'black', type: 'queen'});

    return queens;
}