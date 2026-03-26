import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 mt-auto">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 font-heading text-xl font-extrabold">
              <div className="text-2xl">⚽</div>
              <span>Elite<span className="text-accent">FC</span></span>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-[300px]">
              The world's premier football training platform. Train smarter, play better.
            </p>
            <div className="flex gap-2 mt-2">
              <a href="#" className="w-[38px] h-[38px] bg-surface-2 border border-white/5 rounded-medium flex items-center justify-center text-muted hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all duration-300" id="footer-email" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-muted mb-1">Platform</h4>
              <Link to="/programs" className="text-sm text-soft hover:text-accent transition-colors">Programs</Link>
              <Link to="/coaches" className="text-sm text-soft hover:text-accent transition-colors">Coaches</Link>
              <Link to="/pricing" className="text-sm text-soft hover:text-accent transition-colors">Pricing</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-muted mb-1">Training</h4>
              <Link to="/programs" className="text-sm text-soft hover:text-accent transition-colors">Dribbling</Link>
              <Link to="/programs" className="text-sm text-soft hover:text-accent transition-colors">Finishing</Link>
              <Link to="/programs" className="text-sm text-soft hover:text-accent transition-colors">Tactics</Link>
              <Link to="/programs" className="text-sm text-soft hover:text-accent transition-colors">Fitness</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-muted mb-1">Company</h4>
              <a href="#" className="text-sm text-soft hover:text-accent transition-colors">About Us</a>
              <a href="#" className="text-sm text-soft hover:text-accent transition-colors">Blog</a>
              <a href="#" className="text-sm text-soft hover:text-accent transition-colors">Contact</a>
              <a href="#" className="text-sm text-soft hover:text-accent transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted font-medium">
          <span>© 2025 EliteFC Academy. All rights reserved.</span>
          <span>Made with ⚽ for players who want to be the best.</span>
        </div>
      </div>
    </footer>
  )
}
