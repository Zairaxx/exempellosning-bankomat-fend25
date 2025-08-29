import {useEffect} from 'react'
import './App.css'

function App() {

  let fetchData = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      let json = await response.json();
      console.log(json);
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <>
    <h1>API</h1>
    </>
  )
}

export default App
