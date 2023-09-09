import { Piece } from "../chessboard/Chessboard"

export function loadKings (){
    const kings: Piece[] = [];

    kings.push({image: './assets/images/king_w.png', vertPos: 0, horiPos: 4, side: 'white', type: 'king'});
    kings.push({image: './assets/images/king_b.png', vertPos: 7, horiPos: 4, side: 'black', type: 'king'});

    return kings;
}