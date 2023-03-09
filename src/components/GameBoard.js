import React,{useState} from 'react'
import Blocks from './Blocks'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const GameBoard = () => {
    const[state, setState] = useState([...Array(9)].fill(null));
    const[isXTurn, setXTurn] = useState(true);
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
    // console.log(isWinner)
    

    const handleClick = (index) => {
        if (state[index] !== null) {
            return;
        }
        // let audio = new Audio("./clicksound.mp3")
        // audio.play()
        const copyState = [...state]
        copyState[index] = isXTurn ? "X" : "O";
        setState(copyState);
        setXTurn(!isXTurn)              
        
    }
        

    const handleReset = () => {
        setState(Array(9).fill(null));
    };


    const isNooneWin = (currentValue) => currentValue !== null;

    if (state.every(isNooneWin)) {
        alert('hey, This is TIE Game')
        setState(Array(9).fill(null));
    }
    
  return (
    
    <>
    <div className="container-fluid d-flex justify-content-center align-items-center main_cont">
        { isWinner ? ( 
        <>
        <div className='resultDiv'>
            <p>Player <b>{isWinner} </b>won the game{" "}</p>
            <div className='d-flex justify-content-center'>
            <button variant="outline-secondary" onClick={handleReset}>Play Again</button>
            </div>
        </div>
        </> 
        ) : (
        <>
        {
            console.log(state)
            
        }
        <div className="card">
            <div className='title'>
                <h3 className='text-center'>Tic Toc Toe</h3>
            </div>
            <div className="board">
                <p style={{textAlign : "right",color : "#c28c00"}}>player {isXTurn ? "x" : "0"} move</p>
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
            <div className='d-none noWin'><p>no one win</p></div>
        </div>
        
        </>  
        )}
    </div>
    </>
  )
}

export default GameBoard