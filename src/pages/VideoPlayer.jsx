import { useParams, Link, Navigate } from 'react-router-dom'
import { Play, Lock, ArrowLeft, Clock, Star, CheckCircle, ChevronRight, Zap } from 'lucide-react'

const programData = {
  'dribbling-masterclass': {
    title: 'Elite Dribbling Masterclass',
    coach: 'Coach Torres',
    category: 'Dribbling',
    totalDuration: '4h 20min',
    rating: 4.9,
    reviews: 312,
    emoji: '🦵',
    description: 'Master close control, feints, and 1v1 skills used by world-class players. This comprehensive program takes you through every aspect of elite dribbling.',
    isPro: true,
    episodes: [
      { id: 1, title: 'Introduction: The Mindset of a Dribbler', duration: '12:30', free: false },
      { id: 2, title: 'Close Control Fundamentals', duration: '28:15', free: false },
      { id: 3, title: 'The Cruyff Turn & Its Variations', duration: '35:00', free: false },
      { id: 4, title: 'Body Feints & Shoulder Drops', duration: '22:45', free: false },
      { id: 5, title: 'Speed Dribbling in Open Space', duration: '31:20', free: false },
      { id: 6, title: '1v1 Situations: Beating Defenders', duration: '40:00', free: false },
      { id: 7, title: 'Dribbling Under Pressure', duration: '27:10', free: false },
      { id: 8, title: 'Game Application & Match Analysis', duration: '43:55', free: false },
    ],
  },
  'passing-vision': {
    title: 'Passing & Vision Training',
    coach: 'Coach Silva',
    category: 'Passing',
    totalDuration: '3h 10min',
    rating: 4.7,
    reviews: 265,
    emoji: '🎯',
    description: 'Develop laser-accurate passing and learn to read the game like a midfielder.',
    isPro: false,
    episodes: [
      { id: 1, title: 'The Art of Passing: Introduction', duration: '10:00', free: true },
      { id: 2, title: 'Short Passing Accuracy Drills', duration: '25:30', free: true },
      { id: 3, title: 'Long Ball Technique', duration: '30:00', free: true },
      { id: 4, title: 'Through Balls & Splitting Defenses', duration: '28:15', free: true },
      { id: 5, title: 'First Touch & Receiving', duration: '22:00', free: true },
      { id: 6, title: 'Vision Training Exercises', duration: '33:45', free: true },
    ],
  },
  'youth-basics': {
    title: 'Youth Player Fundamentals',
    coach: 'Coach Torres',
    category: 'Dribbling',
    totalDuration: '2h 20min',
    rating: 4.7,
    reviews: 89,
    emoji: '⭐',
    description: 'Perfect intro for young players — touch, control, and first-step basics.',
    isPro: false,
    episodes: [
      { id: 1, title: 'Ball Mastery Basics', duration: '15:00', free: true },
      { id: 2, title: 'First Touch Control', duration: '20:00', free: true },
      { id: 3, title: 'Basic Dribbling Patterns', duration: '25:30', free: true },
      { id: 4, title: 'Shooting Fundamentals', duration: '22:00', free: true },
      { id: 5, title: 'Small-Sided Game Tactics', duration: '28:00', free: true },
      { id: 6, title: 'Growing as a Player', duration: '9:30', free: true },
    ],
  },
}

const defaultProProgram = (id) => ({
  title: id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
  coach: 'Pro Coach',
  category: 'Training',
  totalDuration: '5h 00min',
  rating: 4.8,
  reviews: 200,
  emoji: '⚽',
  description: 'Premium football training content available to subscribers only.',
  isPro: true,
  episodes: Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Episode ${i + 1}: Training Session`,
    duration: `${20 + i * 3}:00`,
    free: false,
  })),
})

export default function VideoPlayer({ isSubscribed }) {
  const { id } = useParams()
  const program = programData[id] || defaultProProgram(id)
  const isLocked = program.isPro && !isSubscribed

  return (
    <main className="min-h-screen bg-bg pt-20 animate-fadeIn">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar: episode list */}
          <aside className="w-full lg:w-[400px] flex flex-col gap-6 order-2 lg:order-1">
            <Link to="/programs" className="flex items-center gap-2 text-sm font-bold text-muted hover:text-white transition-all group" id="video-back-btn">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Programs
            </Link>

            <div className="p-6 bg-surface rounded-[2rem] border border-white/5 space-y-6 shadow-card relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[40px]" />
               <div className="flex items-center gap-4 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-surface-2 border border-white/5 flex items-center justify-center text-4xl shadow-sm">
                  <span className="select-none">{program.emoji}</span>
                </div>
                <div>
                  <h2 className="font-heading text-xl font-black leading-tight group-hover:text-accent transition-colors">{program.title}</h2>
                  <p className="text-xs font-bold text-soft uppercase tracking-wider flex items-center gap-2 mt-1">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    {program.coach}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/5 relative z-10">
                <div className="flex items-center gap-1.5 text-xs font-black text-white">
                  <Star size={12} fill="#f5c842" color="#f5c842" />
                  {program.rating} <span className="text-muted font-bold ml-1">({program.reviews})</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-black text-white">
                  <Clock size={12} className="text-muted" />
                  {program.totalDuration}
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-white/5 relative z-10">
                <h4 className="text-[10px] font-black text-muted uppercase tracking-widest mb-4">Episodes ({program.episodes.length})</h4>
                <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {program.episodes.map((ep) => {
                    const epLocked = isLocked && !ep.free
                    return (
                      <div
                        key={ep.id}
                        className={`group p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 cursor-pointer ${ep.id === 1 && !epLocked ? 'bg-accent/10 border-accent/20 text-accent ring-1 ring-accent/10' : 'bg-surface-2 border-white/5 text-soft hover:border-white/10 hover:text-white'} ${epLocked ? 'opacity-50 grayscale cursor-not-allowed' : ''}`}
                        id={`episode-${ep.id}`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0 transition-all ${ep.id === 1 && !epLocked ? 'bg-accent text-black' : 'bg-surface border border-white/10 group-hover:border-white/30'}`}>
                          {epLocked ? <Lock size={12} /> : ep.id === 1 ? <Play size={12} fill="currentColor" stroke="none" /> : ep.id}
                        </div>
                        <div className="flex flex-col flex-grow min-w-0">
                          <span className="font-bold text-sm truncate">{ep.title}</span>
                          <span className="text-[10px] opacity-60 uppercase font-black tracking-widest">{ep.duration}</span>
                        </div>
                        {epLocked && <Lock size={14} className="text-gold" />}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </aside>

          {/* Main: player area */}
          <section className="flex-grow order-1 lg:order-2">
            {isLocked ? (
              <div className="aspect-video bg-surface rounded-[2.5rem] border border-white/5 overflow-hidden shadow-card relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-10 blur-[2px]">
                   <span className="text-[150px] animate-pulse grayscale opacity-30 select-none">{program.emoji}</span>
                </div>
                <div className="absolute inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-8 md:p-12 text-center">
                  <div className="max-w-[500px] animate-fadeIn">
                    <div className="w-20 h-20 bg-gold/10 rounded-[2rem] flex items-center justify-center text-4xl mb-8 mx-auto shadow-sm ring-1 ring-gold/20">🔒</div>
                    <h2 className="font-heading text-3xl md:text-5xl font-black mb-6">This is a <span className="text-gold">PRO</span> Program</h2>
                    <p className="text-soft text-lg mb-10 leading-relaxed">Subscribe to get unlimited access to this program and 300+ other training masterclasses. Start your 7-day free trial today.</p>
                    <div className="flex flex-col gap-4 max-w-[320px] mx-auto mb-10 text-left">
                      {[
                        'Unlimited access to all programs',
                        'New videos added weekly',
                        'Download for offline viewing',
                        'Cancel anytime',
                      ].map(perk => (
                        <div key={perk} className="flex items-center gap-3 text-sm font-bold text-soft group">
                          <CheckCircle size={16} className="text-accent group-hover:scale-110 transition-transform" />
                          {perk}
                        </div>
                      ))}
                    </div>
                    <Link to="/pricing" className="inline-flex items-center gap-4 bg-accent text-black px-10 py-5 rounded-2xl font-heading font-black text-xl shadow-glow hover:bg-white hover:-translate-y-1 transition-all" id="paywall-subscribe-btn">
                      <Zap size={22} fill="currentColor" />
                      Unlock Now
                      <ChevronRight size={22} />
                    </Link>
                    <p className="text-xs text-muted font-bold mt-6 uppercase tracking-widest">7-day free trial · No credit card required</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Video Player UI */}
                <div className="group aspect-video bg-black rounded-[2.5rem] border border-white/5 overflow-hidden shadow-card relative cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform duration-700">
                    <div className="w-24 h-24 bg-accent/40 backdrop-blur-md rounded-full flex items-center justify-center text-accent ring-4 ring-accent/20">
                      <Play size={40} fill="currentColor" className="ml-2" />
                    </div>
                    <span className="absolute inset-0 flex items-center justify-center text-[200px] opacity-10 select-none grayscale-0">{program.emoji}</span>
                  </div>
                  
                  {/* Controls UI overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent flex flex-col gap-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <div className="flex flex-col gap-3">
                      <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden flex items-center gap-0 group/bar relative">
                        <div className="h-full bg-accent relative" style={{ width: '35%' }}>
                           <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full scale-0 group-hover/bar:scale-100 transition-transform shadow-lg" />
                        </div>
                      </div>
                      <div className="flex justify-between text-[10px] font-black tracking-widest text-white/60">
                         <span>12:30</span>
                         <span>{program.episodes[0]?.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <button className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center transition-all" id="ctrl-play">
                        <Play size={24} fill="currentColor" />
                      </button>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-accent uppercase tracking-widest">Now Playing</span>
                        <span className="text-sm font-black text-white">Ep. 1 — {program.episodes[0]?.title}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-10 bg-surface rounded-[2.5rem] border border-white/5 shadow-card relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px]" />
                  <div className="relative z-10">
                    <h1 className="font-heading text-4xl font-black mb-4 group-hover:text-accent transition-colors">{program.episodes[0]?.title}</h1>
                    <div className="flex items-center gap-3 mb-8">
                       <span className="text-xs font-bold text-muted">From</span>
                       <span className="text-xs font-black text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">{program.title}</span>
                       <span className="text-xs font-bold text-muted">by</span>
                       <span className="text-xs font-black text-white hover:text-accent cursor-pointer transition-colors underline decoration-accent/30 underline-offset-4">{program.coach}</span>
                    </div>
                    <p className="text-soft leading-relaxed text-lg max-w-[800px]">{program.description}</p>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  )
}
