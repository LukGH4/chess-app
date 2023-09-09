import Image from 'next/image'
import { Inter } from 'next/font/google'
import Chessboard from './components/chessboard/Chessboard'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
  <>
  <header className={`font-serif font-semibold flex flex-col justify-center items-center m-4 text-6xl text-slate-300`}>
      Chess
    </header>
    <Chessboard/>
    </>
  )
}
