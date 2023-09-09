import { Piece } from "../chessboard/Chessboard"

export function loadBishops (){
    const bishops: Piece[] = [];

    bishops.push({image: './assets/images/bishop_w.png', vertPos: 0, horiPos: 2, side: 'white', type: 'bishop'});
    bishops.push({image: './assets/images/bishop_w.png', vertPos: 0, horiPos: 5, side: 'white', type: 'bishop'});
    bishops.push({image: './assets/images/bishop_b.png', vertPos: 7, horiPos: 2, side: 'black', type: 'bishop'});
    bishops.push({image: './assets/images/bishop_b.png', vertPos: 7, horiPos: 5, side: 'black', type: 'bishop'});

    return bishops;
}