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
            <Square 
              key={index}
              index={index}
            >

            </Square>
          )
        })
      }
      </section>
    </main>
  )
}

export default App
