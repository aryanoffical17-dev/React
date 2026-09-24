import { useState, useCallback, useEffect,useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [number, setnumber] = useState(false);
  const [character, setcharacter] = useState(false);

  const passwordref = useRef(null)

  const [password, setpassword] = useState("")

  const passwordgen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (character) str += "@#$./*-+"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)

    }
    setpassword(pass)

  }, [length, number, character, setpassword])

  const copyPasswordToClicpbord =useCallback(() => {
    passwordref.current?.select();
    // passwordref.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordgen()
  }, [length, number, character, setpassword])

  return (

    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 
      text-orange-500 bg-gray-700" >
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4"><input
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="password"
        readOnly
        ref={passwordref}
      />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" 
        onClick={copyPasswordToClicpbord}
        >copy</button>


      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1
        ">
          <input type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => { setlength(e.target.value) }}
          />
          <label >length:{length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input type="checkbox"
            defaultChecked={number}
            id="numberInput"
            onChange={() => {
              setnumber((prev) => !prev)
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>


        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={character}
            id="characterInput"
            onChange={() => {
              setcharacter((prev) => !prev)
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>

  )
}

export default App
