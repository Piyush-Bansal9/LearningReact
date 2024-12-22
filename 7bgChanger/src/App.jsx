import { useState } from "react"


function App(){ 
  const [Color, setColor] = useState("olive")
  return (
      <div style={{backgroundColor: Color}} className="w-full h-screen">
        <div className="fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center bg-white rounded-3xl px-4 py-2 shadow-xl gap-3">
            <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white bg-red-500 shadow-xl">Red</button>
            <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white bg-yellow-500 shadow-xl">yellow</button>
            <button onClick={() => setColor("pink")} className="outline-none px-4 py-1 rounded-full text-white bg-pink-500 shadow-xl">pink</button>
            <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white bg-green-500 shadow-xl">green</button>
            <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white bg-blue-500 shadow-xl">blue</button>
            <button onClick={() => setColor("grey")} className="outline-none px-4 py-1 rounded-full text-white bg-gray-500 shadow-xl">grey</button>
          </div>
        </div>
      </div>
  )
}

export default App
