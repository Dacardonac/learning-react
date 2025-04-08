import { useState } from "react"
import confetti from "canvas-confetti"

import { Square } from "/src/components/Square.jsx"
import { TURNS } from "/src/constans.js"
import { checkWinnerFrom, checkEndGame } from "./logic/board.js"
import { WinnerModal } from "/src/components/WinnerModal.jsx"

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }



  const updateBoard = (index) => {

    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
  <main className="board">
    <h1>Tic Tac Toe</h1>
    <button onClick={resetGame}>Reset Game</button>
    <section className="game">
    {
      board.map((_, index) => {
        return (
          <Square
            key={index}
            index={index}
            updateBoard={updateBoard}
          >
              {board[index]}
          </Square>
        )
      })
    }
    </section>
    <section className="turn">
      <Square isSelected={turn ===TURNS.X}>
        {TURNS.X}
      </Square>
      <Square isSelected={turn ===TURNS.O}>
        {TURNS.O}
      </Square>
    </section>
    <WinnerModal resetGame={resetGame} winner={winner}/>
  </main>
  )
}

export default App
