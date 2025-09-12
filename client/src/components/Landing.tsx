import React from 'react';

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const SectionContainer: React.FC<SectionContainerProps> = ({ children, className, id }) => (
  <section id={id} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className || ''}`}>
    {children}
  </section>
);

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#0b0a10] text-white">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-700/30 via-indigo-600/10 to-transparent pointer-events-none" />
        <SectionContainer className="min-h-[80vh] flex items-center justify-center pt-24 pb-20">
          <div className="text-center">
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              <span className="text-white">Your StreamLabs Just Got a </span>
              <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Crypto Upgrade</span>
              <span className="text-white">. Get Paid Instantly.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-white/80">
              Get tips instantly from your fans—no delays, no extra rules. Tipsy makes it easy to accept digital donations with StreamLabs.
            </p>
            <form
              id="waitlist-header"
              className="mt-10 flex items-center justify-center gap-3 launchlist-form"
              action="https://getlaunchlist.com/s/ZvLMi7"
              method="post"
            >
              <input
                name="email"
                type="email"
                placeholder="your@email.com"
                required
                className="w-full max-w-xs sm:max-w-sm rounded-xl bg-white/10 border border-white/20 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
              />
              <button type="submit" className="inline-flex items-center rounded-xl bg-fuchsia-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-fuchsia-500/30 hover:bg-fuchsia-400 transition-colors">
                Join the Waitlist
              </button>
            </form>
            <div className="mt-12 md:mt-16 flex items-center justify-center">
              <a
                href="/Nino8291"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 px-7 py-3 text-base md:text-lg font-extrabold text-white shadow-lg shadow-fuchsia-500/30 transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_28px_rgba(168,85,247,0.65)] active:scale-95"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative z-10 inline-flex items-center">
                  Try the Demo
                  <svg aria-hidden="true" className="ml-2 h-4 w-4 md:h-5 md:w-5 text-white/90 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </SectionContainer>
      </div>

      {/* Pain section */}
      <SectionContainer className="py-12">
        <div className="rounded-3xl bg-gradient-to-r from-fuchsia-600/10 via-purple-600/5 to-indigo-600/10 p-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              Let's Be Real, Traditional Tipping <span className="text-fuchsia-400">Kinda Sucks.</span>
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <div className="h-10 w-10 rounded-full bg-fuchsia-500/20 text-fuchsia-300 flex items-center justify-center text-lg">📉</div>
              <h3 className="mt-4 text-lg font-semibold">High Platform Fees</h3>
              <p className="mt-2 text-white/70">Middlemen take a cut of your earnings. Keep more of what you make.</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <div className="h-10 w-10 rounded-full bg-fuchsia-500/20 text-fuchsia-300 flex items-center justify-center text-lg">⏳</div>
              <h3 className="mt-4 text-lg font-semibold">Delayed Payouts</h3>
              <p className="mt-2 text-white/70">Payouts drag for days or weeks—earnings sit in limbo and momentum stalls.</p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Value prop */}
      <SectionContainer className="py-16">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">Get Tipsy. Get Paid Your Way.</h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            Tipsy plugs directly into your StreamLabs scenes and unlocks the power of digital currency for your
            stream. Take a slice of the modern internet for yourself and your fans.
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center max-w-4xl">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/easy-to-add.webp" 
                alt="Easy to add Tipsy to your stream" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Steps */}
      <SectionContainer id="how" className="py-16">
        <h3 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold">
          Go Live with Crypto Tips in <span className="text-fuchsia-400">3 Simple Steps</span>
        </h3>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: 'Get Your Link', desc: 'Claim a Tipsy link to share anywhere.' },
            { title: 'Route & Play', desc: 'Embed alerts into your StreamLabs scenes.' },
            { title: 'Get Paid Instantly', desc: 'Funds land directly in your wallet.' },
          ].map((item, idx) => (
            <div key={idx} className="rounded-2xl p-[1px] bg-gradient-to-r from-fuchsia-600/20 via-purple-600/20 to-indigo-600/20">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 h-full">
                <div className="h-10 w-10 rounded-full bg-fuchsia-500/20 text-fuchsia-300 flex items-center justify-center font-bold">{idx + 1}</div>
                <h4 className="mt-4 text-lg font-semibold">{item.title}</h4>
                <p className="mt-2 text-white/70">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Features quick hits */}
      <SectionContainer className="py-16">
        <div className="rounded-3xl bg-gradient-to-r from-fuchsia-600/10 via-purple-600/5 to-indigo-600/10 p-8">
          <h3 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold">All the Good Stuff, <span className="text-fuchsia-400">None of the Headaches.</span></h3>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: 'Instant Payouts', d: 'No holds. No monthly delays.', icon: '⚡' },
              { t: 'Global Support', d: 'Fans tip from anywhere.', icon: '🌍' },
              { t: 'Keep More', d: 'Creator-first, low fees.', icon: '💸' },
              { t: 'One Link, All Chains', d: 'Simple for fans and creators.', icon: '🔗' },
            ].map((f, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="h-10 w-10 rounded-full bg-fuchsia-500/20 text-fuchsia-300 flex items-center justify-center text-lg">{f.icon}</div>
                <h4 className="mt-4 text-lg font-semibold">{f.t}</h4>
                <p className="mt-2 text-white/70">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Comparison (styled) */}
      <SectionContainer className="py-16">
        <h3 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold">See How We Stack Up</h3>
        <div className="mt-8 rounded-3xl bg-gradient-to-r from-fuchsia-600/10 via-purple-600/5 to-indigo-600/10 p-[1px]">
          <div className="rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead className="bg-white/10">
                  <tr className="text-white/70">
                    <th className="px-6 py-4 text-xs uppercase tracking-wider">Feature</th>
                    <th className="px-6 py-4 text-xs uppercase tracking-wider">Tipsy</th>
                    <th className="px-6 py-4 text-xs uppercase tracking-wider">Traditional</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Payout Speed', 'Instant', 'Days to Weeks'],
                    ['Platform Fees', 'Low', 'High'],
                    ['Global Access', 'Yes', 'Limited'],
                    ['Ownership', 'Creator-first', 'Platform-first'],
                  ].map((row, i) => (
                    <tr key={i} className="odd:bg-white/0 even:bg-white/5 hover:bg-white/10 transition-colors">
                      <td className="px-6 py-4">{row[0]}</td>
                      <td className="px-6 py-4 text-emerald-300 font-medium">{row[1]}</td>
                      <td className="px-6 py-4 text-white/70">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Final CTA */}
      <SectionContainer className="py-20">
        <div className="text-center rounded-3xl bg-gradient-to-r from-fuchsia-600/20 via-purple-600/20 to-indigo-600/20 p-10 border border-white/10">
          <h3 className="text-3xl font-extrabold">The Future of <span className="text-emerald-300">Streaming Monetization</span> is Calling.</h3>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            Skip delays, keep more, and delight your fans. Crypto tips for modern creators.
          </p>
          <form 
            id="waitlist-footer" 
            action="https://getlaunchlist.com/s/ZvLMi7" 
            method="post"
            className="mt-8 flex items-center justify-center gap-3 launchlist-form"
          >
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="w-full max-w-xs sm:max-w-sm rounded-xl bg-white/10 border border-white/20 px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            />
            <button type="submit" className="inline-flex items-center rounded-xl bg-fuchsia-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-fuchsia-500/30 hover:bg-fuchsia-400 transition-colors">
              I Want In
            </button>
          </form>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Landing;


