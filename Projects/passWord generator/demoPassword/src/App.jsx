
import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  // use states for update the password at every change
  const [length, setLength] = useState(8);

  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  // useRef hook to 

  const passwordRef = useRef(null);

  // password generator function to generate the password

  const passwordGenerator = useCallback(() => {
    let pass = "";

    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let number = "0123456789";
    let char = "!@#$%^&*()_+{}[]|;':\"<>?,./";

    if (numberAllowed) str += number;
    if (charAllowed) str += char;

    

    for (let i=0; i<length; i++) {
      let pass1 = Math.floor(Math.random() * str.length + 1);

        pass += str.charAt(pass1); 
    }

    setPassword(pass);

    
  }, [length, charAllowed, numberAllowed, setPassword])


  const copyPasswordToClipboard = useCallback(() => {

    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 14);
    window.navigator.clipboard.writeText(password);
  }, [password])


  useEffect(() => {
    passwordGenerator()
    
  }, [length, numberAllowed, charAllowed, passwordGenerator])


  return (
    <div className="">
      <div className=' w-[500px] my-7 mx-auto py-4 px-7 border rounded-lg bg-gray-700'>
          <h1 className='text-white text-center text-3xl px-4 py3 font-bold'>Password Generator</h1>
          <div className=''>
            <input 
              type="text"
              className="w-2/3 outline-none  text-black my-4 py-2 px-4 rounded-s-lg"
              placeholder="Pasword"
              value={password}
              readOnly   
              ref={passwordRef}
            />
            <button className='outline-none rounded-e-lg border-blue-500 text-white py-2 px-4 bg-blue-500'
              onClick={copyPasswordToClipboard}
            >
              copy
            </button>
          </div>

          <main className='items-center'>
            <input
              type="range"
              min={6}
              max={100}
              id='range'
              value={length}
              onChange={(e) => setLength(e.target.value)}

            />
            <label htmlFor='range' className='text-orange-500 text-lg mx-2'>length {length} </label>

            <input
              type="checkbox"
              id="show"
              value={numberAllowed}
              onChange={(e) => setNumberAllowed(e.target.checked)}
            />
            <label htmlFor="show" className='text-orange-500 text-lg mx-2'>Number</label>

            <input
              type="checkbox"
              id="char"
              value={charAllowed}
              onChange={(e) => setCharAllowed(e.target.checked)}
            />
            <label htmlFor="char" className='text-orange-500 text-lg mx-2'>Character</label>
          </main>

      </div>
    </div>
  )
}

export default App
