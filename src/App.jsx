import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Programs from './pages/Programs'
import Coaches from './pages/Coaches'
import VideoPlayer from './pages/VideoPlayer'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  // Simulate subscription state — in a real app this comes from auth/backend
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [user, setUser] = useState(null)

  const handleSubscribe = () => {
    // Simulate subscribing
    setIsSubscribed(true)
    setUser({ name: 'Player' })
  }

  const handleLogout = () => {
    setIsSubscribed(false)
    setUser(null)
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar isSubscribed={isSubscribed} user={user} onLogout={handleLogout} onSubscribe={handleSubscribe} />
      <Routes>
        <Route path="/" element={<Home isSubscribed={isSubscribed} onSubscribe={handleSubscribe} />} />
        <Route path="/programs" element={<Programs isSubscribed={isSubscribed} onSubscribe={handleSubscribe} />} />
        <Route path="/programs/:id" element={<VideoPlayer isSubscribed={isSubscribed} />} />
        <Route path="/coaches" element={<Coaches />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
