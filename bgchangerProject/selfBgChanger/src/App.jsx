
import { useState } from 'react';
import './App.css'

function App() {

  const [color, setColor] = useState("yellow");

  return (
    <div 
        className="w-full h-screen duratiion-200 color-red s"
        style={{backgroundColor: color}}
      >

      <div 
          className="fixed flex justify-center align-center"
          style={{backgroundColor: color, position: "absolute", bottom: "20px", alignItems: "center", border: "2px solid black"}}
        >

        <button 
            onClick={() => setColor("Red")}
            className="flex color-white px-1 py-1 rounded-xl"
            style={{backgroundColor: "red", border: "6px solid white"}}
          >
            Red Color
        </button>
        <button 
            onClick={() => setColor("black")}
            className="flex color-white px-1 py-1 rounded-xl"
            style={{backgroundColor: "black", border: "6px solid white", color: "white"}}
          >
            Black Color
        </button>

        <button 
            onClick={() => setColor("blue")}
            className="flex color-white px-1 py-1 rounded-xl"
            style={{backgroundColor: "blue", border: "6px solid white"}}
          >
            Blue Color
        </button>

        <button 
            onClick={() => setColor("violet")}
            className="flex color-white px-1 py-1 rounded-xl"
            style={{backgroundColor: "violet", border: "6px solid white"}}
          >
            Violet Color
        </button>
      </div>
    </div>
  );
}

export default App
