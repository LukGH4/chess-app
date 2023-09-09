import { Piece } from "../chessboard/Chessboard"

export function loadKnights (){
    const knights: Piece[] = [];

    knights.push({image: './assets/images/knight_w.png', vertPos: 0, horiPos: 1, side: 'white', type: 'knight'});
    knights.push({image: './assets/images/knight_w.png', vertPos: 0, horiPos: 6, side: 'white', type: 'knight'});
    knights.push({image: './assets/images/knight_b.png', vertPos: 7, horiPos: 1, side: 'black', type: 'knight'});
    knights.push({image: './assets/images/knight_b.png', vertPos: 7, horiPos: 6, side: 'black', type: 'knight'});

    return knights;
}