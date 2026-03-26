import { useState } from 'react'
import { Check, Zap, Crown, Star, ArrowRight, X } from 'lucide-react'
import { Link } from 'react-router-dom' // Assuming Link is from react-router-dom

const plans = [
  {
    id: 'monthly',
    name: 'Monthly',
    price: 149000,
    priceLabel: 'Rp 149.000',
    period: '/month',
    description: 'Perfect for players testing the waters.',
    badge: null,
    color: 'var(--clr-text)',
    dimColor: 'var(--clr-border-hover)',
    features: [
      'Access to all 300+ videos',
      'New content every week',
      'All skill categories',
      'HD video quality',
      'Progress tracking',
      'Cancel anytime',
    ],
    notIncluded: [
      'Offline downloads',
      'Live coaching sessions',
    ],
  },
  {
    id: 'yearly',
    name: 'Annual',
    price: 999000,
    priceLabel: 'Rp 999.000',
    period: '/year',
    perMonth: 'Rp 83.250/mo',
    description: 'Best value — save 44% compared to monthly.',
    badge: '🏆 Most Popular',
    color: 'var(--clr-gold)',
    dimColor: 'rgba(245, 158, 11, 0.1)',
    features: [
      'Access to all 300+ videos',
      'New content every week',
      'All skill categories',
      'HD video quality',
      'Progress tracking',
      'Cancel anytime',
      'Offline downloads',
      'Priority customer support',
    ],
    notIncluded: [
      'Live coaching sessions',
    ],
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 2999000,
    priceLabel: 'Rp 2.999.000',
    period: '/year',
    perMonth: 'Rp 249.916/mo',
    description: 'For serious players who want the complete experience.',
    badge: '⚡ Elite',
    color: 'var(--clr-accent)',
    dimColor: 'var(--clr-accent-dim)',
    features: [
      'Access to all 300+ videos',
      'New content every week',
      'All skill categories',
      '4K video quality',
      'Progress tracking',
      'Cancel anytime',
      'Offline downloads',
      'Priority customer support',
      'Monthly live coaching sessions (2x/month)',
      'Personalized training plan',
    ],
    notIncluded: [],
  },
]

const faqs = [
  {
    q: 'Can I cancel anytime?',
    a: 'Yes! You can cancel your subscription at any time. You will still have access until the end of your billing period.'
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes, we offer a 7-day free trial for the Monthly and Annual plans. No credit card required to start.'
  },
  {
    q: 'What payment methods are accepted?',
    a: 'We accept all major credit/debit cards, PayPal, OVO, GoPay, DANA, and bank transfer (BCA, Mandiri, BNI).'
  },
  {
    q: 'Can I download videos offline?',
    a: 'Yes — offline downloads are available on the Annual and Elite plans. Perfect for training without internet.'
  },
]

export default function Pricing({ isSubscribed, onSubscribe }) {
  const [openFaq, setOpenFaq] = useState(null)
  const [subscribing, setSubscribing] = useState(null)

  const handleSubscribe = (plan) => {
    setSubscribing(plan.id)
    setTimeout(() => {
      onSubscribe(plan.name)
      setSubscribing(null)
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-bg pt-32 pb-20 animate-fadeIn">
      {/* Header */}
      <section className="relative overflow-hidden mb-16">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 mb-4 mx-auto">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-accent">Pricing</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-black mb-6">
            Simple, <span className="text-accent">Transparent</span> Pricing
          </h1>
          <p className="text-lg text-soft leading-relaxed max-w-[600px] mx-auto">
            Start your 7-day free trial today. No credit card required to start your journey to becoming a pro.
          </p>
        </div>
      </section>

      {/* Plans */}
      <div className="container mx-auto px-6">
        {isSubscribed ? (
          <div className="bg-surface-2 border border-accent/20 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-accent/5 opacity-50 backdrop-blur-3xl" />
            <div className="relative z-10 max-w-[600px] mx-auto">
              <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center text-5xl mx-auto mb-8 shadow-glow transition-transform duration-500 group-hover:scale-110">🎉</div>
              <h2 className="font-heading text-3xl md:text-5xl font-black mb-6">You're already a PRO!</h2>
              <p className="text-soft text-lg mb-10 leading-relaxed">You have full access to all programs, coaches, and features. Keep training and dominate the pitch!</p>
              <Link to="/programs" className="inline-flex items-center gap-4 bg-accent text-black px-10 py-5 rounded-2xl font-heading font-black text-xl shadow-glow hover:bg-white hover:-translate-y-1 transition-all">
                <Zap size={22} fill="currentColor" />
                Go to Programs
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`group relative bg-surface border border-white/5 rounded-[2.5rem] p-10 flex flex-col transition-all duration-500 hover:border-white/15 h-full ${plan.badge?.includes('Popular') ? 'ring-2 ring-gold/40 shadow-[0_0_50px_rgba(245,200,66,0.1)] scale-105 z-10 md:translate-y-[-10px]' : ''}`}
              >
                {plan.badge && (
                  <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 bg-gold text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-glow">
                    {plan.badge}
                  </div>
                )}
                
                <div className="mb-10 text-center md:text-left">
                  <h3 className="font-heading text-3xl font-black mb-4 transition-colors group-hover:text-accent" style={{ color: plan.badge?.includes('Popular') ? 'var(--clr-gold)' : '' }}>{plan.name}</h3>
                  <p className="text-sm text-soft leading-relaxed min-h-[40px] mb-8">{plan.description}</p>
                  <div className="flex items-baseline justify-center md:justify-start gap-1">
                    <span className="text-4xl font-black tracking-tight">{plan.priceLabel}</span>
                    <span className="text-sm text-muted font-bold uppercase tracking-widest">{plan.period}</span>
                  </div>
                  {plan.perMonth && (
                    <div className="text-[10px] text-muted font-black uppercase tracking-widest mt-2">{plan.perMonth} average</div>
                  )}
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map(f => (
                    <div key={f} className="flex items-center gap-3 text-sm">
                      <div className="w-5 h-5 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-accent" />
                      </div>
                      <span className="text-soft font-medium">{f}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map(f => (
                    <div key={f} className="flex items-center gap-3 text-sm opacity-40">
                      <div className="w-5 h-5 bg-white/5 border border-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <X size={10} className="text-muted" />
                      </div>
                      <span className="text-muted font-medium line-through decoration-muted/50">{f}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleSubscribe(plan)}
                  className={`w-full py-5 rounded-2xl flex items-center justify-center gap-3 font-heading font-black text-lg transition-all ${subscribing === plan.id ? 'opacity-50 cursor-wait' : 'hover:-translate-y-1'} ${plan.badge?.includes('Popular') ? 'bg-gold text-black shadow-gold hover:bg-white' : 'bg-accent text-black shadow-glow hover:bg-white'}`}
                  id={`subscribe-${plan.id}`}
                  disabled={subscribing === plan.id}
                >
                  {subscribing === plan.id ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                      Processing...
                    </div>
                  ) : (
                    <>
                      <Zap size={22} fill="currentColor" />
                      Start Free Trial
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Trust markers */}
        {!isSubscribed && (
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 py-12 border-y border-white/5 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest">
              <Star size={16} fill="#f5c842" className="text-gold" />
              4.9/5 Rating
            </div>
            <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest">
              <Crown size={16} className="text-accent" />
              12k+ Active Players
            </div>
            <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest">
              <Check size={16} className="text-accent" />
              Cancel Anytime
            </div>
            <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest">
              <Zap size={16} className="text-gold" />
              7-Day Trial
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {!isSubscribed && (
          <section className="py-24">
            <div className="max-w-[800px] mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-6 h-[1.5px] bg-accent" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">FAQ</span>
                </div>
                <h2 className="font-heading text-4xl font-black mb-6">Common <span className="text-accent">Questions</span></h2>
              </div>

              <div className="space-y-4">
                {faqs.map(({ q, a }, i) => (
                  <div
                    key={i}
                    className={`bg-surface border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-500 ${openFaq === i ? 'border-white/10 ring-1 ring-white/10' : 'hover:border-white/10'}`}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    id={`faq-${i}`}
                  >
                    <button className="w-full px-8 py-7 flex items-center justify-between group cursor-pointer">
                      <span className={`text-lg font-bold text-left transition-colors ${openFaq === i ? 'text-accent' : 'text-white/80 group-hover:text-white'}`}>{q}</span>
                      <div className={`w-10 h-10 rounded-2xl bg-surface-2 border border-white/5 flex items-center justify-center transition-all duration-500 ${openFaq === i ? 'rotate-180 bg-accent border-accent text-black' : 'text-muted group-hover:text-white'}`}>
                        {openFaq === i ? <X size={18} /> : <div className="text-2xl font-light">+</div>}
                      </div>
                    </button>
                    <div className={`transition-all duration-500 ease-in-out ${openFaq === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                      <div className="px-8 pb-8 text-soft leading-relaxed border-t border-white/5 pt-6">{a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
