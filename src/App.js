import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Sobre from './components/pages/Sobre'
import Planos from './components/pages/Planos'
import Contato from './components/pages/Contato'
import Login from './components/pages/Login'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import './App.sass'

function App() {
  return (
    <>
      <div className="App">
        <video
          src="/images/bg.mp4"
          autoPlay={true}
          loop={true}
          muted={true}
        ></video>
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/planos" element={<Planos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/login" element={<Login />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App
