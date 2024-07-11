
import { useCallback, useState } from 'react';
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState();

  const passwordGenerator = useCallback(() => {
    let pass = "";

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789";

    if (charAllowed) str += "~!@#$%^&*()_+={}[]`<>?:|"

    for (let i = 1; i <= length; i++ ) {

      const char = Math.floor(Math.random() * str.length + 1);

      pass.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword])


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg my-8 text-orange-500 px-4 py-5 bg-gray-700">

        <h1 className="text-4xl text-white text-center mb-3">Password Generator </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">

          <input
            type='text'
            value={password}
            className="outline-none w-full py-1 px-3"  
            placeholder="password"
            readOnly
          
          />

          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >copy </button>


        </div>
      
        <div
          className='flex text-sm gap-x-2'
        >
          <div className='flex items-center gap-x-1'> 
              <input
                type='range'
                min={6}
                max={70}
                value={length}
                className='cursor-pointer'
                onChange={(e) => {setLength(e.target.value)}}
              />
              <label> Length {length}</label>


          </div>
        </div>

      </div>
    </>
  );
 
}

export default App
