import React from 'react';
import { BingoProps } from '../App';

interface BallProps {
  num: BingoProps;
  color: string;
  selectNum : (num : BingoProps) => void;
}

const Ball: React.FC<BallProps> = ({ num, color, selectNum }) => {
  return (
    <button type='button' className={`cursor-pointer disabled:cursor-not-allowed rounded-full flex items-center justify-center w-[54px] h-[54px] p-3 hover:grayscale-[0.4]
    ${num.selected ? 'grayscale-[.8]' : ''}
    `}
    style={{ backgroundColor: color }}
    onClick={() => selectNum(num)}
    disabled={num.selected}
    >
      <div className={`bg-white rounded-full w-full h-full flex items-center justify-center
      ${num.selected ? 'font-bold bg-slate-200' : ''}
      `}>
        {num.number}
      </div>
    </button>
  );
};

export default Ball;
