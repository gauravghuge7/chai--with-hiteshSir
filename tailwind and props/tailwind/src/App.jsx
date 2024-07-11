import './App.css'
import Card from './components/Card';

function App() {

  let object1 = {
    username: "gaurav ghuge",
    age: "21"
  }

  let newArr = [
    1,2,3,4,
  ]
  return (
    <>

      <h1 className="bg-green-400 text-yellow-100"> Tailwind Css</h1>
   
      <Card channel="gaurav ghuge" someObj={object1} newArr={newArr} />
    </>
  )
}

export default App
