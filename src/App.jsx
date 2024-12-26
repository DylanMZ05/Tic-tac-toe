import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const TURNS = {
  X: 'X',
  O: 'O',
}

const board = Array(9).fill(null)

const Square = ({ children, updateBoard, index}) => {
  return (
    <button className='square'>
      {children}
    </button>
  )
}

function App() {
  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
      {
        board.map((_, index) => {
          return (
            <Square key={index}
            index={index}
            >
              {index}

              {board[index]}
            </Square>
          )
        })
      }
      </section>
    </main>
  )
}

export default App
