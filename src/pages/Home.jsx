import { Link } from 'react-router-dom'
import { Play, ArrowRight, Star, Users, Trophy, ChevronRight, Zap, Shield, Target } from 'lucide-react'

const stats = [
  { icon: Users, value: '12,000+', label: 'Active Players' },
  { icon: Play, value: '300+', label: 'Training Videos' },
  { icon: Trophy, value: '48', label: 'Pro Coaches' },
  { icon: Star, value: '4.9', label: 'Average Rating' },
]

const features = [
  {
    icon: Target,
    title: 'Skill-Based Programs',
    desc: 'From dribbling to finishing — curated training paths for every position and skill level.',
    color: 'var(--clr-accent)',
    dimColor: 'var(--clr-accent-dim)'
  },
  {
    icon: Play,
    title: 'HD Video Library',
    desc: 'Access 300+ HD training videos with slow-motion breakdowns and tactical analysis.',
    color: '#3b82f6', // blue-500
    dimColor: 'rgba(59, 130, 246, 0.1)'
  },
  {
    icon: Shield,
    title: 'Pro Coaching',
    desc: 'Learn directly from UEFA-licensed coaches who have trained professional players.',
    color: 'var(--clr-gold)',
    dimColor: 'rgba(245, 158, 11, 0.1)'
  },
  {
    icon: Zap,
    title: 'Weekly Content',
    desc: 'New videos added every week — stay ahead with the latest training techniques.',
    color: 'var(--clr-red)',
    dimColor: 'var(--clr-accent-dim)'
  },
]


const testimonials = [
  {
    name: 'Rizky A.',
    role: 'U-18 Central Midfielder',
    rating: 5,
    text: 'EliteFC totally changed how I approach training. The passing drills alone improved my vision within 3 weeks.',
    avatar: '🇮🇩'
  },
  {
    name: 'Marco T.',
    role: 'Amateur Striker',
    rating: 5,
    text: 'The finishing program is insane. Coach Barca explains every movement so clearly. Worth every rupiah.',
    avatar: '🇮🇹'
  },
  {
    name: 'Dani S.',
    role: 'Youth Academy Player',
    rating: 5,
    text: "I got scouted after 6 months of training with EliteFC. The technical sessions are next level.",
    avatar: '🇪🇸'
  },
]

export default function Home({ isSubscribed, onSubscribe }) {
  return (
    <main className="min-h-screen animate-fadeIn bg-bg">
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:40px_40px] opacity-30 pointer-events-none" />
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-[55%] animate-fadeInUp">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-accent" />
              <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-accent">⚡ The #1 Football Training Platform</span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-8">
              Train Like a<br />
              <span className="text-accent">Pro Footballer</span>
            </h1>
            
            <p className="text-lg text-soft leading-relaxed max-w-[600px] mb-10">
              Access elite football training programs taught by UEFA-licensed coaches.
              Master your skills, dominate the pitch, and unlock your true potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {isSubscribed ? (
                <Link to="/programs" className="group flex items-center justify-center gap-3 bg-accent text-black px-8 py-4 rounded-2xl font-heading font-black text-lg shadow-glow hover:bg-white transition-all hover:-translate-y-1">
                  <Play size={20} fill="currentColor" />
                  Start Training
                </Link>
              ) : (
                <>
                  <button onClick={onSubscribe} className="group flex items-center justify-center gap-3 bg-accent text-black px-8 py-4 rounded-2xl font-heading font-black text-lg shadow-glow hover:bg-white transition-all hover:-translate-y-1 cursor-pointer w-full sm:w-auto">
                    <Zap size={20} fill="currentColor" />
                    Start Free Trial
                  </button>
                  <Link to="/programs" className="flex items-center justify-center gap-3 border border-white/10 hover:border-white/30 px-8 py-4 rounded-2xl font-heading font-bold text-lg text-white transition-all w-full sm:w-auto">
                    Browse Programs
                    <ArrowRight size={20} className="group-hover:translate-x-1" />
                  </Link>
                </>
              )}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {['🧑', '👦', '🧔', '👤'].map((emoji, i) => (
                  <div key={i} className="w-10 h-10 bg-surface-2 border-2 border-bg rounded-full flex items-center justify-center text-lg shadow-sm">{emoji}</div>
                ))}
              </div>
              <span className="text-sm text-soft">Join <strong className="text-white">12,000+</strong> players already training</span>
            </div>
          </div>

          <div className="lg:w-[45%] relative animate-fadeInUp delay-200">
            {/* Main Video Card UI */}
            <div className="bg-surface rounded-3xl border border-white/10 overflow-hidden shadow-card animate-float">
              <div className="aspect-video relative group cursor-pointer bg-black/40">
                <div className="absolute inset-0 flex items-center justify-center transition-transform group-hover:scale-110">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-black shadow-glow">
                    <Play size={28} fill="currentColor" className="ml-1" />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20 group-hover:opacity-40 transition-opacity">⚽</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-red rounded-full animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-red">● LIVE MASTERCLASS</span>
                </div>
                <h3 className="font-heading text-xl font-bold mb-1">Elite Dribbling Secrets</h3>
                <p className="text-sm text-muted">Coach Marco Barca · 47 min</p>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute top-[-20px] right-[-20px] bg-surface-2 border border-white/10 p-4 rounded-2xl shadow-card flex items-center gap-4 animate-float delay-500">
              <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center text-gold">
                <Trophy size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black leading-none">300+</span>
                <span className="text-[10px] text-muted uppercase font-bold tracking-widest">Training Videos</span>
              </div>
            </div>

            <div className="absolute bottom-10 left-[-40px] bg-surface-2 border border-white/10 p-4 rounded-2xl shadow-card flex items-center gap-4 animate-float delay-700">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                <Star size={20} fill="currentColor" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black leading-none">4.9/5</span>
                <span className="text-[10px] text-muted uppercase font-bold tracking-widest">Member Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-surface/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-10 flex flex-wrap justify-center md:justify-between items-center gap-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-4 min-w-[160px]">
              <div className="text-accent">
                <Icon size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black leading-none">{value}</span>
                <span className="text-[11px] text-muted uppercase font-bold tracking-wider">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-[700px] mx-auto">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-6 h-[1.5px] bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Why EliteFC?</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-black mb-6">Everything You Need to <span className="text-accent">Level Up</span></h2>
            <p className="text-soft leading-relaxed">
              A complete football training ecosystem built for players who are serious about improving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc, color, dimColor }) => (
              <div key={title} className="group p-8 rounded-3xl bg-surface border border-white/5 hover:border-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-card relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity" style={{ backgroundColor: color }} />
                <div className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: dimColor }}>
                  <Icon size={24} style={{ color }} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">{title}</h3>
                <p className="text-sm text-soft leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS PREVIEW ── */}
      <section className="py-24 bg-surface/10 border-y border-white/5 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-6 h-[1.5px] bg-accent" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Featured Programs</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-black">Popular <span className="text-accent text-mid">Training Series</span></h2>
            </div>
            <Link to="/programs" className="flex items-center gap-2 px-6 py-3 border border-white/10 rounded-xl font-bold hover:border-accent hover:text-accent transition-all group">
              View All Programs <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { emoji: '🎯', title: 'Finishing Masterclass', coach: 'Coach Barca', level: 'Advanced', videos: 12, locked: false, banner: 'from-gold/20' },
              { emoji: '🦵', title: 'Dribbling Technique', coach: 'Coach Torres', level: 'Intermediate', videos: 8, locked: false, banner: 'from-accent/20' },
              { emoji: '🧠', title: 'Football IQ & Vision', coach: 'Coach Silva', level: 'All Levels', videos: 10, locked: false, banner: 'from-blue-500/20' },
            ].map(({ emoji, title, coach, level, videos, locked, banner }) => (
              <div key={title} className="group bg-surface rounded-[2rem] border border-white/5 overflow-hidden transition-all duration-500 hover:border-white/15 hover:shadow-card">
                <div className={`h-48 relative flex items-center justify-center text-6xl bg-gradient-to-br ${banner} to-transparent overflow-hidden`}>
                  <div className="transition-transform duration-700 group-hover:scale-125">{emoji}</div>
                  {locked ? (
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex flex-col items-center justify-center p-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 border border-white/10">🔒</div>
                      <span className="text-xs font-black uppercase tracking-widest">Subscribe to unlock</span>
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors flex items-center justify-center">
                      <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-black opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-glow">
                        <Play size={24} fill="currentColor" stroke="none" className="ml-1" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-black uppercase tracking-widest text-muted">{level}</span>
                    <span className="text-[10px] font-bold text-muted uppercase tracking-wider">📹 {videos} videos</span>
                  </div>
                  <h3 className="font-heading text-xl font-black mb-1 group-hover:text-accent transition-colors">{title}</h3>
                  <p className="text-sm text-soft mb-8">with {coach}</p>
                  {locked ? (
                    <button onClick={onSubscribe} className="w-full py-4 rounded-2xl flex items-center justify-center gap-2 font-heading font-black text-sm tracking-wide transition-all border border-white/10 text-white hover:bg-white/5 cursor-pointer">
                      🔓 UNLOCK NOW
                    </button>
                  ) : (
                    <Link to="/programs" className="w-full py-4 rounded-2xl flex items-center justify-center gap-2 font-heading font-black text-sm tracking-wide transition-all bg-accent text-black hover:bg-white shadow-glow">
                      ▶ WATCH NOW
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-6 h-[1.5px] bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Success Stories</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-black">What Players <span className="text-accent">Are Saying</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(({ name, role, rating, text, avatar }) => (
              <div key={name} className="p-10 rounded-[2.5rem] bg-surface-2 border border-white/5 relative group hover:border-white/15 transition-all duration-500">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} size={14} fill="#f5c842" color="#f5c842" />
                  ))}
                </div>
                <p className="text-lg text-white leading-relaxed italic mb-8">"{text}"</p>
                <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                  <div className="w-14 h-14 bg-bg border border-white/10 rounded-2xl flex items-center justify-center text-3xl shadow-sm">{avatar}</div>
                  <div className="flex flex-col">
                    <strong className="text-lg">{name}</strong>
                    <span className="text-xs text-muted uppercase font-bold tracking-widest">{role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </main>
  )
}
