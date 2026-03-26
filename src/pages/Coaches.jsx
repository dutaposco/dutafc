import { Medal, Star, Users } from 'lucide-react'

const coaches = [
  {
    id: 1,
    name: 'Marco Barca',
    title: 'Head of Finishing & Attack',
    emoji: '⚽',
    country: '🇪🇸',
    bio: 'Former La Liga player with 10+ years of coaching experience. UEFA Pro License holder.',
    specialties: ['Finishing', 'Shooting', 'Attacking Play'],
    programs: 4,
    students: 4800,
    rating: 4.9,
    color: '#ff6b6b',
    dimColor: 'rgba(255, 107, 107, 0.1)'
  },
  {
    id: 2,
    name: 'Diego Torres',
    title: 'Dribbling & Ball Control Expert',
    emoji: '🦵',
    country: '🇧🇷',
    bio: 'Brazilian academy graduate turned top-level coach. Specializes in 1v1 technique and street football flair.',
    specialties: ['Dribbling', 'Close Control', '1v1'],
    programs: 3,
    students: 3200,
    rating: 4.8,
    color: '#00e676',
    dimColor: 'rgba(0, 230, 118, 0.1)'
  },
  {
    id: 3,
    name: 'Paulo Silva',
    title: 'Passing & Vision Coach',
    emoji: '🎯',
    country: '🇵🇹',
    bio: 'Former Primeira Liga midfielder. Master of reading the game and unlocking defenses with precise passing.',
    specialties: ['Passing', 'Vision', 'Midfield Play'],
    programs: 2,
    students: 2600,
    rating: 4.7,
    color: '#7c6ef7',
    dimColor: 'rgba(124, 110, 247, 0.1)'
  },
  {
    id: 4,
    name: 'Karl Kante',
    title: 'Defensive Specialist',
    emoji: '🛡️',
    country: '🇫🇷',
    bio: 'France youth team coach. Built a reputation for transforming average defenders into elite stoppers.',
    specialties: ['Defending', 'Positioning', 'Aerial Duels'],
    programs: 2,
    students: 1900,
    rating: 4.9,
    color: '#f5c842',
    dimColor: 'rgba(245, 200, 66, 0.1)'
  },
  {
    id: 5,
    name: 'Hans Klopp',
    title: 'Physical Performance Coach',
    emoji: '💪',
    country: '🇩🇪',
    bio: 'Sports science specialist with a focus on explosive football fitness. Works with top Bundesliga clubs.',
    specialties: ['Fitness', 'Speed', 'Agility'],
    programs: 3,
    students: 4100,
    rating: 4.6,
    color: '#00e5ff',
    dimColor: 'rgba(0, 229, 255, 0.1)'
  },
  {
    id: 6,
    name: 'Pep Tiki',
    title: 'Tactical Mastermind',
    emoji: '🧠',
    country: '🇳🇱',
    bio: 'Dutch football philosopher. Helped shape the tactical understanding of thousands of players worldwide.',
    specialties: ['Tactics', 'Pressing', 'Positioning'],
    programs: 4,
    students: 6700,
    rating: 5.0,
    color: '#ff9800',
    dimColor: 'rgba(255, 152, 0, 0.1)'
  },
]

export default function Coaches() {
  return (
    <main className="min-h-screen bg-bg pt-32 pb-20 animate-fadeIn">
      {/* Header */}
      <section className="relative overflow-hidden mb-16">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 mb-4 mx-auto">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-accent">The Team</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-black mb-6">
            World-Class <span className="text-accent">Coaches</span>
          </h1>
          <p className="text-lg text-soft leading-relaxed max-w-[600px] mx-auto">
            Learn from UEFA-licensed coaches with decades of professional experience at the highest level.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map(coach => (
            <div key={coach.id} className="group bg-surface rounded-[2.5rem] border border-white/5 p-8 transition-all duration-500 hover:border-white/15 hover:shadow-card flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-10 transition-opacity group-hover:opacity-20" style={{ backgroundColor: coach.color }} />
              
              <div className="w-24 h-24 rounded-3xl mb-6 relative flex items-center justify-center text-5xl shadow-card transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: coach.dimColor }}>
                <span className="select-none">{coach.emoji}</span>
                <span className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-surface-2 border-2 border-surface flex items-center justify-center text-sm shadow-sm">{coach.country}</span>
              </div>

              <div className="flex flex-col items-center flex-grow">
                <h3 className="font-heading text-2xl font-black mb-1 group-hover:text-accent transition-colors">{coach.name}</h3>
                <p className="text-xs font-bold text-accent uppercase tracking-widest mb-3" style={{ color: coach.color }}>{coach.title}</p>

                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full mb-6 border border-white/10">
                  <Star size={12} fill="#f5c842" color="#f5c842" />
                  <span className="text-xs font-black text-white">{coach.rating}</span>
                </div>

                <p className="text-sm text-soft leading-relaxed mb-8">{coach.bio}</p>

                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {coach.specialties.map(s => (
                    <span key={s} className="px-3 py-1 bg-surface-2 rounded-lg text-[10px] font-bold text-muted border border-white/5 uppercase tracking-wider">{s}</span>
                  ))}
                </div>

                <div className="mt-auto w-full pt-6 border-t border-white/5 flex items-center justify-around gap-4 text-xs font-bold text-muted uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <Medal size={16} style={{ color: coach.color }} />
                    <span><strong>{coach.programs}</strong> Programs</span>
                  </div>
                  <div className="flex items-center gap-2 border-l border-white/5 pl-4">
                    <Users size={16} style={{ color: coach.color }} />
                    <span><strong>{coach.students.toLocaleString()}</strong> Students</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
