import { useState, useCallback, useEffect, useRef } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("false")

  const passRef = useRef(null)

  const passwordGenerator = useCallback( () =>{
    let pass = ""
    
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!#%&*(){}+=-_^~`[].@/|"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  } , [length, numberAllowed, characterAllowed, setPassword])

  const copyPassToClip = useCallback( () => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password] )

  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    
      <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-600">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input value={password} className="outline-none w-full py-1 px-3" placeholder="Password" readOnly type="text" ref={passRef} />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPassToClip}>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={8} max={100} value={length} className="cursor-pointer " onChange={(e) => {setLength(e.target.value)}}/>
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked= {numberAllowed} id="numberInput" onChange={ () =>{
              setNumberAllowed((prev)=>!prev)
            } } />
            <label className="mx-1">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked= {characterAllowed} id="characterInput" onChange={ () =>{
              setCharacterAllowed((prev)=>!prev)
            } } />
            <label className="mx-1">Charcter</label>
          </div>
        </div>
      </div>
    
  )
}

export default App
