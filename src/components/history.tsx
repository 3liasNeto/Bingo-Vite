import React from 'react'
import { BingoProps } from '../App'

interface HistoryProps{
    data : BingoProps[];
    undoData : (data : BingoProps) => void;
}

const History:React.FC<HistoryProps> = ({ data, undoData }) => {
  return (
    <div>
    {data.map((item,index) => (
        <div key={index} className='text-black'>
          <h1>A bola selecionada foi {item.number}</h1>
          <button type='button' onClick={() => undoData(item)}>
            voltar
          </button>
        </div>
      ))}
    </div>
  )
}

export default History