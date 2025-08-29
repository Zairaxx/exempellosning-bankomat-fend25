import './App.css'
import { BrowserRouter as Router, Routes, Route
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import NavBar from './components/NavBar'
function App() {

  return (
  <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/contact" element={<ContactPage/>} />
    </Routes>


  </Router>)
}

export default App
