import {useEffect, useState} from 'react'
import './App.css'

function App() {

const [data, setData] = useState(null);
const [errorMsg, setErrorMsg] = useState(null);
const [loading, setLoading] = useState(false);

const fetchData = async () => {
    try {

      setLoading(true);
      setErrorMsg(null);

      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const json = await res.json();

      setData(json)
      setLoading(false)
    } catch {
      setErrorMsg("Failed to fetch");
      setLoading(false)
    }
  }

useEffect(() => {
  
  fetchData();
}, []);

  // if(loading){
  //   return <h2>Loading data.. Please wait a moment</h2>
  // }
  // if(errorMsg){
  //   return <h2 style={{color:"red"}}>{errorMsg}</h2>
  // }
  // if(data){
  //   return <h1>Todo-applikation</h1>
  // }

  return (<>
    <h1>Todo-applikation</h1>
    {loading ?
      <h2>Loading data.. Please wait a moment</h2> 
      : errorMsg ? <h2 style={{color:"red"}}>{errorMsg}</h2>
      : <h2>We have data</h2>  }
  </>)
}

export default App
