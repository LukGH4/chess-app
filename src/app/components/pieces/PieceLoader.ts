import { Piece } from "../chessboard/Chessboard"
import { loadBishops } from "./Bishop";
import { loadKings } from "./King";
import { loadKnights } from "./Knight";
import { loadPawns } from "./Pawn";
import { loadQueens } from "./Queen";
import { loadRooks } from "./Rook";

export function PieceLoader(){
    const pieces: Piece[] = [];

    pieces.push(...loadBishops());
    pieces.push(...loadKings());
    pieces.push(...loadKnights());
    pieces.push(...loadPawns());
    pieces.push(...loadQueens());
    pieces.push(...loadRooks());

    return pieces;
}