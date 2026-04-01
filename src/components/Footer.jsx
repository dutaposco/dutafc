import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-bg mt-auto py-20 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-6">
        
        {/* Logo block */}
        <div className="w-[50px] h-[50px] bg-[#dc2626] text-white flex items-center justify-center font-heading font-black italic text-lg tracking-tighter">
          BPRO
        </div>

        {/* Text Details */}
        <div className="flex flex-col items-center gap-3 text-sm font-medium text-white/80">
          <p>BPRO training</p>
          <p>contact: info@bprotraining.com</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5 text-white/90 mt-2">
          <a href="#" className="hover:text-white transition-colors hover:scale-110" aria-label="YouTube">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
          </a>
          <a href="#" className="hover:text-white transition-colors hover:scale-110" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="#" className="hover:text-white transition-colors hover:scale-110" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
        
      </div>
    </footer>
  )
}
