import { useState } from "react"

function App() {
  const [color, setcolor] = useState()

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">

        <div className="flex flex-wrap shadow-xl bg-white gap-3 justify-center px-3 py-2 rounded-full">

          <button onClick={() => setcolor("red")} className="outline-none px-4 py-1 text-white rounded-full shadow-lg " style={{ backgroundColor: "red" }}>Red</button>

          <button onClick={() => setcolor("blue")} className="outline-none px-4 py-1 text-white rounded-full shadow-lg " style={{ backgroundColor: "blue" }}
          >Blue</button>

          <button onClick={() => setcolor("green")} className="outline-none px-4 py-1 text-white rounded-full shadow-lg " style={{ backgroundColor: "green" }}>Green</button>

          <button onClick={() => setcolor("white")} className="outline-none px-4 py-1 text-black rounded-full shadow-lg " style={{ backgroundColor: "white" }}>White</button>

          <button onClick={() => setcolor("black")} className="outline-none px-4 py-1 text-white rounded-full shadow-lg " style={{ backgroundColor: "black" }}>Black</button>

          <button onClick={() => setcolor("yellow")} className="outline-none px-4 py-1 text-black rounded-full shadow-lg " style={{ backgroundColor: "Yellow" }}>Yellow</button>

          <button onClick={() => setcolor("olive")} className="outline-none px-4 py-1 text-black rounded-full shadow-lg " style={{ backgroundColor: "olive" }}>Olive</button>


        </div>
      </div>
    </div>
  )
}

export default App
