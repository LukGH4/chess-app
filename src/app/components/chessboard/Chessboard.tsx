"use client";
import './Chessboard.css'
import Tile from '../tiles/Tile';
import { loadPawns } from '../pieces/Pawn';
import { PieceLoader } from '../pieces/PieceLoader';

export const vertTiles = ['1', '2', '3', '4', '5', '6', '7', '8'];
export const horiTiles = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

export interface Piece {
    image: string;
    vertPos: number;
    horiPos: number;
    side: string;
    type: string;
}

export const pieces: Piece[] = [];

pieces.push(...PieceLoader());

function grabPiece(e: React.MouseEvent){
    console.log(e.target);
}

export default function chessBoard(){

    let board = []

    for (let j = vertTiles.length - 1; j >= 0; j--){
        for (let i = 0; i < horiTiles.length; i++){
            let number = i + j + 2;
            let x = i;
            let y = j;
            let image = undefined;

            pieces.forEach((p) => {
                if(p.horiPos === i && p.vertPos === j){
                    image = p.image;
                }
            });

            board.push(<Tile key={`${horiTiles[i] + vertTiles[j]}`} number={number} image={image} x={x} y={y}/>)
    }
}
    
    return (
        <>
        <div className='flex flex-col justify-center items-center flex-wrap'>

            <div id="chessboard" className="bg-slate-800" onMouseDown={e => grabPiece(e)}>{board}</div>
        </div>
        </>
    )
}

function Pawn() {
    throw new Error('Function not implemented.');
}
