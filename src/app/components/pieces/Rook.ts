import { Piece } from "../chessboard/Chessboard"

export function loadRooks (){
    const rooks: Piece[] = [];

    rooks.push({image: './assets/images/rook_w.png', vertPos: 0, horiPos: 0, side: 'white', type: 'rook'});
    rooks.push({image: './assets/images/rook_w.png', vertPos: 0, horiPos: 7, side: 'white', type: 'rook'});
    rooks.push({image: './assets/images/rook_b.png', vertPos: 7, horiPos: 0, side: 'black', type: 'rook'});
    rooks.push({image: './assets/images/rook_b.png', vertPos: 7, horiPos: 7, side: 'black', type: 'rook'});

    return rooks;
}