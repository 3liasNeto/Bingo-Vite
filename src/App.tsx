import React, { useState } from 'react';
import Ball from './components/ball-style';
import "./index.css"
import History from './components/history';

export interface BingoProps{
  number: number;
  selected: boolean;
}
/*  */
function App() {
  // Lista com o numero de bolas e Historico
  const [history, setHistory] = useState<BingoProps[]>([]);
  const [numbers, setNumbers] = useState<BingoProps[]>(
    Array.from({ length: 60 }, (_, i) => ({
      number: i + 1,
      selected: false
    }))
  );
  console.log(numbers);
  console.log(history);
  const colors = generateHslColors(numbers.length);
  // Aqui e selecionado e numero e criado o historico com os numeros selecionados
  const selectedNumber = (num : BingoProps) => {
    setHistory((prevHistory) => [...prevHistory, {...num, selected: true}]);
    setNumbers((e) => e.filter(item => item.number !== num.number ? item : num.selected = true));
  };
  // Aqui e desfeito a acao anterior mas especificando qual numero deve ser alterado
  const undoSelectedNumber = (data : BingoProps) => {
    setHistory((prevHistory) => prevHistory.filter(item => item.number !== data.number));
    setNumbers((prevNumbers) =>
    prevNumbers.map(item =>
      item.number === data.number ? { ...item, selected: false } : item
    )
  );
  }
  /* E por fim esta funcao faz praticamente o mesmo da acima porem desfaz a acao anterior
  (remove dos history o ultimo numero selecionado e altera o valor de selected da lista de numeros) */
  const undoAction = () => {
    setHistory((prevHistory) => {
      if(prevHistory.length > 0){
        const lastNumber = prevHistory[prevHistory.length - 1];
        setNumbers((prevNumbers) =>
          prevNumbers.map((item) =>
            item.number === lastNumber.number ? { ...item, selected: false } : item
          )
        );
        return prevHistory.slice(0,-1)
      }
      return prevHistory
    })
  }

  return (
    <div className="h-full grid grid-cols-12 gap-4  w-[65%] justify-items-center">
      {numbers.map((item, index) => (
        <Ball key={index} num={item} color={colors[index]} selectNum={selectedNumber}/>
      ))}
      <History data={history} undoData={undoSelectedNumber}/>
      <button type='button' onClick={undoAction}>
        Back
      </button>
    </div>
  );
}

// Funcao para gerar cores HSL - Para a bolas terem esse feito de cores
function generateHslColors(n: number): string[] {
  const colors: string[] = [];
  
  for (let i = 0; i < n; i++) {
    const hue = i * (360 / n);
    const saturation = 70;
    const lightness = 50;
    colors.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
  }
  
  return colors;
}

export default App;
