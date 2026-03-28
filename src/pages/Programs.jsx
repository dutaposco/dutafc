import { Link } from 'react-router-dom'
import { Lock, Play, Clock, Star, ChevronRight, Zap } from 'lucide-react'

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

]

export default function Programs({ isSubscribed, onSubscribe }) {

  return (
    <main className="min-h-screen bg-bg pt-32 pb-20 animate-fadeIn">

      <div className="container mx-auto px-6">
        {programs.length > 0 && (
          <div className="mb-20 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map(program => (
                <ProgramCard key={program.id} program={program} isSubscribed={isSubscribed} locked={!isSubscribed} onSubscribe={onSubscribe} />
              ))}
            </div>
          </div>
        )}

        {programs.length === 0 && (
          <div className="py-20 text-center bg-surface/30 rounded-[3rem] border border-dashed border-white/10">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="font-heading text-2xl font-black mb-2">No programs found</h3>
            <p className="text-soft">Try adjusting your search or filters.</p>
          </div>
        )}

        {/* Subscription CTA */}
        {!isSubscribed && (
          <div className="mt-12 p-8 md:p-10 bg-gradient-to-br from-surface-2 to-surface rounded-3xl border border-white/10 text-center relative overflow-hidden group max-w-4xl mx-auto">
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-[60px]" />
            <div className="relative z-10 max-w-[500px] mx-auto">
              <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-sm">🔓</div>
              <h3 className="font-heading text-2xl md:text-3xl font-black mb-3">Unlock All {programs.filter(p => p.isPro).length} Pro Programs</h3>
              <p className="text-soft text-base leading-relaxed mb-6">Get unlimited access to every training video, drill, and coaching session. Join the elite league of successful players today.</p>
              <button onClick={onSubscribe} className="inline-flex items-center gap-3 bg-accent text-black px-6 py-3 rounded-xl font-heading font-black text-base shadow-glow hover:bg-white hover:-translate-y-1 transition-all cursor-pointer" id="programs-unlock-cta">
                <Zap size={18} fill="currentColor" />
                Start Free Trial
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

function ProgramCard({ program, isSubscribed, locked, onSubscribe }) {
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
            <button onClick={onSubscribe} className="w-full py-4 bg-gold/10 border border-gold/20 text-gold rounded-2xl flex items-center justify-center gap-2 font-heading font-black text-sm tracking-wide transition-all hover:bg-gold hover:text-black shadow-gold/20 hover:shadow-gold cursor-pointer" id={`unlock-${id}`}>
              <Lock size={16} />
              UNLOCK PROGRAM
            </button>
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
