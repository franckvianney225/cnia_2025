import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Objectives from './components/Objectives'
import Thematics from './components/Thematics'
import ExpectedResults from './components/ExpectedResults'
import Program from './components/Program'
import Sponsors from './components/Sponsors'
import Registration from './components/Registration'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import Admin from './components/Admin'
import Login from './components/Login'

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  return isAuthenticated ? children : <Navigate to="/login" />
}

function MainApp() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Objectives />
        <Thematics />
        <ExpectedResults />
        <Program />
        <Sponsors />
        <Registration />
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/admin" 
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
