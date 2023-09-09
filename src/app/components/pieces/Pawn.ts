import { Piece } from "../chessboard/Chessboard"

export function loadPawns (){
    const pawns: Piece[] = [];

    for (let i = 0; i < 8; i++){
        pawns.push({image:'./assets/images/pawn_w.png', vertPos: 1, horiPos: i, side: 'white', type: 'pawn'});
        pawns.push({image:'./assets/images/pawn_b.png', vertPos: 6, horiPos: i, side: 'black', type: 'pawn'});
    }

    return pawns;
}
