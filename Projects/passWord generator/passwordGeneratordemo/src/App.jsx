

import { useCallback, useState } from 'react'
import './App.css'

function App() {
  
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);


  const passwordGenerator  = useCallback(() => {
    let pass = ''
    let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) "0123456789";
    if (charAllowed) '`~!@#$%^&*()-_=+[]{}.,></?';

    for (let i=0; i<length; i++) {
      pass = Math.floor(Math.random() * char.length) + 1;
    }
    console.log(pass);


},[length, numberAllowed, charAllowed, setPassword])



  return (
    <>
        <div className="text-center w-[3] w-[400px] rounded bg-gray-700 mx-auto my-3 text-white px-3 py-3 ">

            <h1 className="text-3xl font-bold">Password Generator</h1>

            <div>
                <input
                 type="text" 
                 className="w-full border-none rounded-lg px-2" 
                 placeholder="Password" 
                 value={password}
                 readOnly

                />


            </div>
            <div>
                <input
                  type='range'
                  min={6}
                  max={70}
                  value={setLength}
                  className='cursor-pointer'
                  
                />
                <label className='text-orange-500'> Length {length}</label>

                
            </div>

            

            
        </div>
    </>
  )
}

export default App
