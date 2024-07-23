import { useState } from "react"

function App() {
  const [Color, setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-700" style={{backgroundColor : Color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-full">
          <button className="outline-none px-6 bg-red-700 rounded-full text-white py-2 shadow-md" onClick={() => setColor("#dc2626")}>Red</button>
          <button className="outline-none px-6 bg-green-700 rounded-full text-white py-2 shadow-md" onClick={() => setColor("#22c55e")}>Green</button>
          <button className="outline-none px-6 bg-blue-700 rounded-full text-white py-2 shadow-md" onClick={() => setColor("#1d4ed8")}>Blue</button>
          <button className="outline-none px-6 bg-white rounded-full text-black py-2 shadow-md" onClick={() => setColor("white")}>White</button>
          <button className="outline-none px-6 bg-orange-500 rounded-full text-white py-2 shadow-md" onClick={() => setColor("#ea580c")}>Orange</button>
          <button className="outline-none px-6 bg-purple-700 rounded-full text-white py-2 shadow-md" onClick={() => setColor("#9333ea")}>Purple</button>
          <button className="outline-none px-6 bg-gray-700 rounded-full text-white py-2 shadow-md" onClick={() => setColor("#6b7280")}>Gray</button>
          <button className="outline-none px-6 bg-lime-500 rounded-full text-white py-2 shadow-md" onClick={() => setColor("#84cc16")}>Lime</button>
          <button className="outline-none px-6 bg-pink-500 rounded-full text-white py-2 shadow-md" onClick={() => setColor("#ec4899")}>Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
