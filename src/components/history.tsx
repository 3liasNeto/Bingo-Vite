import React from 'react'
import { BingoProps } from '../App'
import { IoIosUndo } from "react-icons/io";

interface HistoryProps{
    data : BingoProps[];
    undoData : (data : BingoProps) => void;
}

const History:React.FC<HistoryProps> = ({ data, undoData }) => {
  return (
    <div className='overflow-auto h-[600px] w-[270px]'>
    {data.length > 0 ? 
    data.map((item,index) => (
        <div key={index} className='text-black flex flex-row items-center gap-4'>
          <h1>A bola selecionada foi {item.number}</h1>
          <button title='Voltar' type='button' onClick={() => undoData(item)}>
            <IoIosUndo />
          </button>
        </div>
      ))
     : 
      <div>
        Nenhum Item Foi Selecionado
      </div>
    }
    </div>
  )
}

export default History