import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Programs from './pages/Programs'
import Pricing from './pages/Pricing'
import Coaches from './pages/Coaches'
import VideoPlayer from './pages/VideoPlayer'

function App() {
  // Simulate subscription state — in a real app this comes from auth/backend
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [user, setUser] = useState(null)

  const handleSubscribe = (plan) => {
    // Simulate subscribing
    setIsSubscribed(true)
    setUser({ name: 'Player', plan })
  }

  const handleLogout = () => {
    setIsSubscribed(false)
    setUser(null)
  }

  return (
    <BrowserRouter>
      <Navbar isSubscribed={isSubscribed} user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home isSubscribed={isSubscribed} />} />
        <Route path="/programs" element={<Programs isSubscribed={isSubscribed} />} />
        <Route path="/programs/:id" element={<VideoPlayer isSubscribed={isSubscribed} />} />
        <Route path="/pricing" element={<Pricing isSubscribed={isSubscribed} onSubscribe={handleSubscribe} />} />
        <Route path="/coaches" element={<Coaches />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
