import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Zap, User, LogOut, ChevronDown } from 'lucide-react'

export default function Navbar({ isSubscribed, user, onLogout, onSubscribe }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinkClass = ({ isActive }) => 
    `text-sm font-semibold transition-all duration-300 hover:text-accent ${isActive ? 'text-accent' : 'text-soft'}`

  const mobileNavLinkClass = ({ isActive }) => 
    `text-2xl font-heading font-bold py-2 ${isActive ? 'text-accent' : 'text-white'}`

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-bg/90 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between relative min-h-[40px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setMenuOpen(false)}>
          <div className="w-10 h-10 bg-surface-2 border border-white/10 rounded-xl flex items-center justify-center text-xl shadow-card transition-all duration-500 group-hover:border-accent group-hover:shadow-glow group-hover:scale-105">
            <span>⚽</span>
          </div>
          <span className="font-heading text-lg font-black tracking-tight group-hover:text-accent transition-colors">B<span className="text-accent">PRO</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
          <NavLink to="/" end className={navLinkClass}>Home</NavLink>
          <NavLink to="/programs" className={navLinkClass}>Programs</NavLink>
          <NavLink to="/coaches" className={navLinkClass}>Coaches</NavLink>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          {isSubscribed ? (
            <div className="relative" onMouseLeave={() => setUserMenuOpen(false)}>
              <button 
                className="flex items-center gap-3 bg-surface-2 border border-white/10 px-4 py-2 rounded-xl hover:border-white/20 transition-all"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              >
                <div className="w-8 h-8 rounded-full bg-accent-dim flex items-center justify-center text-accent">
                  <User size={16} />
                </div>
                <span className="text-sm font-medium">{user?.name || 'Player'}</span>
                <span className="bg-gold/10 text-gold text-[10px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider border border-gold/10">PRO</span>
                <ChevronDown size={14} className={`text-muted transition-transform duration-300 ${userMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {userMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-surface-2 border border-white/10 rounded-xl shadow-card p-1.5 overflow-hidden animate-fadeInUp">
                  <button onClick={onLogout} className="flex items-center gap-3 w-full px-3 py-2 text-sm text-soft hover:bg-white/5 hover:text-red rounded-lg transition-all">
                    <LogOut size={14} />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button onClick={onSubscribe} className="text-sm font-bold text-soft hover:text-white px-4 py-2 transition-all cursor-pointer">Sign In</button>
              <button onClick={onSubscribe} className="flex items-center gap-2 bg-accent text-black px-5 py-2 rounded-xl font-heading font-bold text-sm shadow-glow hover:bg-white transition-all hover:-translate-y-0.5 cursor-pointer" id="nav-subscribe">
                <Zap size={14} fill="currentColor" />
                Subscribe
              </button>
            </>
          )}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden w-10 h-10 border border-white/10 rounded-xl flex items-center justify-center text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          id="navbar-hamburger"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 top-[70px] bg-bg/95 backdrop-blur-2xl z-40 p-8 flex flex-col gap-12 md:hidden transition-all duration-500 ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
        <nav className="flex flex-col gap-6">
          <NavLink to="/" end onClick={() => setMenuOpen(false)} className={mobileNavLinkClass}>Home</NavLink>
          <NavLink to="/programs" onClick={() => setMenuOpen(false)} className={mobileNavLinkClass}>Programs</NavLink>
          <NavLink to="/coaches" onClick={() => setMenuOpen(false)} className={mobileNavLinkClass}>Coaches</NavLink>
        </nav>
        <div className="mt-auto flex flex-col gap-4 pb-8">
          {isSubscribed ? (
            <button onClick={() => { onLogout(); setMenuOpen(false) }} className="w-full flex items-center justify-center gap-3 py-4 border border-white/10 rounded-2xl text-soft font-bold cursor-pointer">
              <LogOut size={18} /> Sign Out
            </button>
          ) : (
            <button onClick={() => { onSubscribe(); setMenuOpen(false) }} className="w-full flex items-center justify-center gap-3 py-4 bg-accent text-black rounded-2xl font-heading font-black text-xl shadow-glow cursor-pointer">
              <Zap size={22} fill="currentColor" /> Get Started
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
