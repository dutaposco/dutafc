import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Lock, Play, Clock, Star, ChevronRight, Filter, Search, Zap } from 'lucide-react'

const categories = ['All', 'Dribbling', 'Finishing', 'Passing', 'Defending', 'Fitness', 'Tactics']

const programs = [
  {
    id: 'dribbling-masterclass',
    title: 'Elite Dribbling Masterclass',
    coach: 'Coach Torres',
    category: 'Dribbling',
    level: 'Intermediate',
    duration: '4h 20min',
    videos: 8,
    rating: 4.9,
    reviews: 312,
    emoji: '🦵',
    description: 'Master close control, feints, and 1v1 skills used by world-class players.',
    isPro: true,
    color: 'var(--clr-accent)',
    dimColor: 'var(--clr-accent-dim)'
  },
  {
    id: 'finishing-school',
    title: 'Finishing School: Clinical in Front of Goal',
    coach: 'Coach Barca',
    category: 'Finishing',
    level: 'Advanced',
    duration: '5h 45min',
    videos: 12,
    rating: 4.8,
    reviews: 489,
    emoji: '🎯',
    description: 'Become a clinical finisher with volleys, one-touch shots, and composure drills.',
    isPro: true,
    color: '#3b82f6',
    dimColor: 'rgba(59, 130, 246, 0.1)'
  },
  {
    id: 'passing-vision',
    title: 'Passing & Vision Training',
    coach: 'Coach Silva',
    category: 'Passing',
    level: 'Beginner',
    duration: '3h 10min',
    videos: 10,
    rating: 4.7,
    reviews: 265,
    emoji: '🎯',
    description: 'Develop laser-accurate passing and learn to read the game like a midfielder.',
    isPro: false,
    color: '#3b82f6',
    dimColor: 'rgba(59, 130, 246, 0.1)'
  },
  {
    id: 'defending-bible',
    title: 'The Defending Bible',
    coach: 'Coach Kante',
    category: 'Defending',
    level: 'Intermediate',
    duration: '4h 00min',
    videos: 9,
    rating: 4.9,
    reviews: 198,
    emoji: '🛡️',
    description: 'Perfect your positioning, tackling timing, and aerial duel dominance.',
    isPro: true,
    color: 'var(--clr-gold)',
    dimColor: 'rgba(245, 158, 11, 0.1)'
  },
  {
    id: 'football-fitness',
    title: 'Football Fitness Blueprint',
    coach: 'Coach Klopp',
    category: 'Fitness',
    level: 'All Levels',
    duration: '6h 30min',
    videos: 15,
    rating: 4.6,
    reviews: 411,
    emoji: '💪',
    description: 'Build explosive speed, endurance, and agility specifically for football.',
    isPro: true,
    color: 'var(--clr-red)',
    dimColor: 'var(--clr-accent-dim)'
  },
  {
    id: 'tactical-awareness',
    title: 'Tactical Awareness & Positioning',
    coach: 'Coach Pep',
    category: 'Tactics',
    level: 'Advanced',
    duration: '7h 15min',
    videos: 18,
    rating: 5.0,
    reviews: 673,
    emoji: '🧠',
    description: 'Understand formations, pressing traps, and how to always be in the right position.',
    isPro: true,
    color: '#ff9800',
    dimColor: 'rgba(255, 152, 0, 0.1)'
  },
  {
    id: 'set-pieces',
    title: 'Set Pieces & Dead Ball Mastery',
    coach: 'Coach Tiki',
    category: 'Tactics',
    level: 'Intermediate',
    duration: '2h 50min',
    videos: 7,
    rating: 4.8,
    reviews: 134,
    emoji: '🅰️',
    description: 'Corners, free kicks, and penalties — master dead ball situations.',
    isPro: true,
    color: '#e91e96',
    dimColor: 'rgba(233, 30, 150, 0.1)'
  },
  {
    id: 'youth-basics',
    title: 'Youth Player Fundamentals',
    coach: 'Coach Torres',
    category: 'Dribbling',
    level: 'Beginner',
    duration: '2h 20min',
    videos: 6,
    rating: 4.7,
    reviews: 89,
    emoji: '⭐',
    description: 'Perfect intro for young players — touch, control, and first-step basics.',
    isPro: false,
    color: '#00e676',
    dimColor: 'rgba(0, 230, 118, 0.1)'
  },
]

export default function Programs({ isSubscribed }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filtered = programs.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.coach.toLowerCase().includes(searchTerm.toLowerCase())
    return matchCat && matchSearch
  })

  const freePrograms = filtered.filter(p => !p.isPro)
  const proPrograms = filtered.filter(p => p.isPro)

  return (
    <main className="min-h-screen bg-bg pt-32 pb-20 animate-fadeIn">
      {/* Header Section */}
      <section className="relative overflow-hidden mb-12">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 i- h-[2px] bg-accent" />
            <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-accent">Training Library</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-black mb-6">
            All <span className="text-accent">Training Programs</span>
          </h1>
          <p className="text-lg text-soft leading-relaxed max-w-[600px] mb-12">
            {isSubscribed
              ? 'You have full access to all programs. Keep grinding! 💪'
              : 'Subscribe to unlock the full library — 300+ videos across all skill areas.'}
          </p>

          {/* Search & Filter Toolbar */}
          <div className="flex flex-col lg:flex-row items-center gap-6 p-4 bg-surface/50 backdrop-blur-md rounded-3xl border border-white/5">
            <div className="relative w-full lg:w-[400px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
              <input
                type="text"
                placeholder="Search programs or coaches..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-surface-2 border border-white/5 rounded-2xl text-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                id="programs-search-input"
              />
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-accent text-black shadow-glow' : 'bg-surface-2 text-muted hover:text-white hover:bg-white/5'}`}
                  id={`cat-${cat.toLowerCase()}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6">
        {/* Free Programs */}
        {freePrograms.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-[10px] font-black uppercase tracking-widest border border-accent/20">FREE</span>
              <h2 className="font-heading text-2xl font-black uppercase tracking-tight">Free Programs</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {freePrograms.map(program => (
                <ProgramCard key={program.id} program={program} isSubscribed={isSubscribed} locked={false} />
              ))}
            </div>
          </div>
        )}

        {/* Pro Programs */}
        {proPrograms.length > 0 && (
          <div className="mb-20">
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="px-3 py-1 bg-gold/10 text-gold rounded-full text-[10px] font-black uppercase tracking-widest border border-gold/20">⚡ PRO</span>
              <h2 className="font-heading text-2xl font-black uppercase tracking-tight">Pro Programs</h2>
              {!isSubscribed && (
                <span className="flex items-center gap-2 text-xs font-bold text-muted uppercase tracking-wider ml-auto">
                  <Lock size={14} className="text-gold" />
                  Requires subscription
                </span>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {proPrograms.map(program => (
                <ProgramCard key={program.id} program={program} isSubscribed={isSubscribed} locked={!isSubscribed && program.isPro} />
              ))}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="py-20 text-center bg-surface/30 rounded-[3rem] border border-dashed border-white/10">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="font-heading text-2xl font-black mb-2">No programs found</h3>
            <p className="text-soft">Try adjusting your search or filters.</p>
          </div>
        )}

        {/* Subscription CTA */}
        {!isSubscribed && (
          <div className="mt-20 p-12 md:p-16 bg-gradient-to-br from-surface-2 to-surface rounded-[3rem] border border-white/10 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />
            <div className="relative z-10 max-w-[600px] mx-auto">
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-8 shadow-sm">🔓</div>
              <h3 className="font-heading text-3xl md:text-5xl font-black mb-6">Unlock All {programs.filter(p => p.isPro).length} Pro Programs</h3>
              <p className="text-soft text-lg leading-relaxed mb-10">Get unlimited access to every training video, drill, and coaching session. Join the elite elite league of successful players today.</p>
              <Link to="/pricing" className="inline-flex items-center gap-4 bg-accent text-black px-10 py-5 rounded-2xl font-heading font-black text-xl shadow-glow hover:bg-white hover:-translate-y-1 transition-all" id="programs-unlock-cta">
                <Zap size={22} fill="currentColor" />
                Start Free Trial
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

function ProgramCard({ program, isSubscribed, locked }) {
  const { id, title, coach, level, duration, videos, rating, reviews, emoji, description, color, dimColor } = program

  return (
    <div className={`group bg-surface rounded-[2rem] border border-white/5 overflow-hidden transition-all duration-500 hover:border-white/15 hover:shadow-card flex flex-col h-full ${locked ? 'opacity-75 grayscale-[0.5]' : ''}`}>
      <div className="h-44 relative flex items-center justify-center text-6xl overflow-hidden" style={{ backgroundColor: dimColor }}>
        <div className="transition-transform duration-700 group-hover:scale-125 select-none">{emoji}</div>
        
        {locked ? (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex flex-col items-center justify-center p-4">
            <div className="w-12 h-12 bg-gold text-black rounded-full flex items-center justify-center mb-2 shadow-glow">
              <Lock size={20} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gold text-shadow-glow">PRO CONTENT</span>
          </div>
        ) : (
          <Link
            to={`/programs/${id}`}
            className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors flex items-center justify-center"
            id={`play-${id}`}
          >
            <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-black opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-glow">
              <Play size={24} fill="currentColor" stroke="none" className="ml-1" />
            </div>
          </Link>
        )}

        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-white/80 border border-white/10">{level}</span>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-4 mb-4 text-[10px] font-bold text-muted uppercase tracking-widest">
          <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg">
            <Star size={12} fill="#f5c842" color="#f5c842" />
            <span className="text-white font-black">{rating}</span>
            <span className="opacity-60">({reviews})</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Play size={12} fill="currentColor" className="opacity-60" />
            <span className="text-soft">{videos} videos</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={12} className="opacity-60" />
            <span className="text-soft">{duration}</span>
          </div>
        </div>

        <h3 className="font-heading text-xl font-black mb-1 group-hover:text-accent transition-colors line-clamp-2">{title}</h3>
        <p className="text-xs font-bold text-soft mb-4 uppercase tracking-wider flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          {coach}
        </p>
        <p className="text-sm text-muted leading-relaxed mb-8 line-clamp-3">{description}</p>
        
        <div className="mt-auto">
          {locked ? (
            <Link to="/pricing" className="w-full py-4 bg-gold/10 border border-gold/20 text-gold rounded-2xl flex items-center justify-center gap-2 font-heading font-black text-sm tracking-wide transition-all hover:bg-gold hover:text-black shadow-gold/20 hover:shadow-gold" id={`unlock-${id}`}>
              <Lock size={16} />
              UNLOCK PROGRAM
            </Link>
          ) : (
            <Link to={`/programs/${id}`} className="w-full py-4 bg-white/5 hover:bg-accent hover:text-black rounded-2xl flex items-center justify-center gap-2 font-heading font-black text-sm tracking-wide transition-all group/btn" id={`watch-${id}`}>
              <Play size={16} fill="currentColor" className="group-hover/btn:fill-black" />
              WATCH NOW
              <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
