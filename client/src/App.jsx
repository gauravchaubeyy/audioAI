import {BrowserRouter as BrowserRouter,Routes,Route} from 'react-router-dom'
import Landing from './components/Landing'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/usemyvoice" element={<Navbar/>} />
    </Routes>
    </BrowserRouter>
  
  )
}
