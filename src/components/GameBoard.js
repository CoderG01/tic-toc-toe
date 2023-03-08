import React,{useState} from 'react'
import Blocks from './Blocks'

const GameBoard = () => {
    const[state, setState] = useState([...Array(9)].fill(null));
    const[isXTurn, setXTurn] = useState(true)

    const Checkwinner = () => {

        const possibleWayToWin = [  
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let element of possibleWayToWin) {
            const [a,b,c] = element;
            if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
                return state[a];
            }
        }
        return false;
        

    }
    const isWinner = Checkwinner();
    console.log(isWinner)
    

    const handleClick = (index) => {
        if (state[index] !== null) {
            return;
          }

        let audio = new Audio("./clicksound.mp3")
        audio.play()
        const copyState = [...state]
        copyState[index] = isXTurn ? "x" : "0";
        setState(copyState);
        setXTurn(!isXTurn)              

    }

    const handleReset = () => {
        setState(Array(9).fill(null));
    };
  return (
    
    <>
    <div className="container-fluid d-flex justify-content-center align-items-center">
        { isWinner ? ( 
        <>
            {isWinner} won the game{" "}
            <button onClick={handleReset}>Play Again</button>
            
        </> 
        ) : (
        <>
        <div className="board">
            <p>player {isXTurn ? "x" : "0"} move</p>
            <div className="row">
                <Blocks onClick={() => handleClick(0)} value={state[0]}/>
                <Blocks onClick={() => handleClick(1)} value={state[1]}/>
                <Blocks onClick={() => handleClick(2)} value={state[2]}/>
            </div>
            <div className="row">
                <Blocks onClick={() => handleClick(3)} value={state[3]}/>
                <Blocks onClick={() => handleClick(4)} value={state[4]}/>
                <Blocks onClick={() => handleClick(5)} value={state[5]}/>
            </div>
            <div className="row">
                <Blocks onClick={() => handleClick(6)} value={state[6]}/>
                <Blocks onClick={() => handleClick(7)} value={state[7]}/>
                <Blocks onClick={() => handleClick(8)} value={state[8]}/>
            </div>
        </div>
        </>  
        )}
    </div>
    </>
  )
}

export default GameBoard