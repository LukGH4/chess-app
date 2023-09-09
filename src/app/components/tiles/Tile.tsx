import { EventHandler, SyntheticEvent } from 'react';
import './Tile.css';

interface Props {
    number: number
    image?: string
    x: number
    y: number
}

export default function Tile({number, image, x, y}: Props){

    if (number % 2 === 0){
        return (<div className='tile bg-slate-900'>
            {image && <div className='tile-image' style={{backgroundImage: `url(${image})`}}></div>}
            </div>)
    } else {
        return (<div className='tile bg-slate-300'>
            {image && <div className='chess-piece' style={{backgroundImage: `url(${image})`}}></div>}
        </div>)
    }
}


