import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import Navbar from './components/Navbar'
import Apply from './pages/Apply'
import Congrats from './pages/Congrats'
function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/congrats" element={<Congrats />} />
        </Routes>
      </div>
    </>
  )
}

export default App
