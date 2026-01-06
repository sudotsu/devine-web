import { CheckCircle, Clock, MapPin, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-bg-dark selection:bg-primary/30">
      {/* Persistent Sticky Header */}
      <header className="sticky top-0 z-50 bg-bg-dark/80 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-colors">
              <span className="text-primary font-serif font-bold text-xl">D</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold text-primary leading-tight">Devine</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent-grey font-sans font-bold">Sparkle & Shine</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-sm font-semibold tracking-wide text-text-soft/60">
            <Link href="/services" className="hover:text-primary transition-all hover:tracking-widest">Services</Link>
            <Link href="/about" className="hover:text-primary transition-all hover:tracking-widest">About Tanya</Link>
            <Link href="/tool" className="hover:text-primary transition-all hover:tracking-widest">Reality Check</Link>
          </nav>

          <a
            href="sms:+14020000000"
            className="group bg-primary text-bg-dark px-7 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-xl shadow-primary/20 active:scale-95"
          >
            <MessageSquare size={18} className="group-hover:rotate-12 transition-transform" />
            Text Tanya
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-0 w-125 h-125 bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-accent-pink/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
          <div className="z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-accent-grey text-xs font-bold uppercase tracking-widest mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-pink animate-pulse"></span>
              Omaha's Premium Personal Choice
            </div>
            <h1 className="text-6xl lg:text-8xl font-serif font-bold leading-[1.1] text-text-soft animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
              Tanya Cleans, <br />
              <span className="text-primary italic">You Relax.</span>
            </h1>
            <p className="mt-8 text-xl text-text-soft/60 max-w-xl leading-relaxed animate-in fade-in slide-in-from-left-8 duration-1000 delay-300">
              Omaha's most trusted personal touch. Stop sacrificing your weekends to scrubbing.
              Get your Saturday back with reliable cleaning that treats your home like family.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
              <a
                href="sms:+14020000000"
                className="bg-primary text-bg-dark px-10 py-5 rounded-full text-lg font-black flex items-center justify-center gap-2 shadow-2xl shadow-primary/40 hover:brightness-110 transition-all hover:scale-[1.02]"
              >
                Text Tanya for a Quote
              </a>
              <Link
                href="/tool"
                className="bg-white/5 backdrop-blur-sm border border-white/10 text-text-soft px-10 py-5 rounded-full text-lg font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
              >
                <Clock size={20} className="text-primary" />
                Reality Check Tool
              </Link>
            </div>
          </div>

          <div className="relative group animate-in fade-in zoom-in duration-1000">
            <div className="absolute inset-0 bg-primary/20 rounded-[4rem] rotate-6 blur-2xl group-hover:rotate-12 transition-transform duration-700"></div>
            <div className="relative aspect-square w-full max-w-lg mx-auto overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl bg-bg-card flex items-center justify-center text-text-soft/20 italic">
              <div className="absolute inset-0 bg-linear-to-tr from-bg-dark/80 via-transparent to-transparent z-10"></div>
              [Photo of Tanya in a sunlit Omaha home]
            </div>
            {/* Trust Badge Floating */}
            <div className="absolute -bottom-6 -right-6 bg-bg-card p-6 rounded-3xl border border-accent-pink/5 shadow-2xl animate-float hover:scale-105 transition-transform duration-500">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <CheckCircle size={28} />
                </div>
                <div>
                  <div className="text-xs text-text-soft/40 font-bold uppercase tracking-wider">Trust Score</div>
                  <div className="text-xl font-serif font-bold text-text-soft">100% Personal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Relief */}
      <section className="py-32 bg-bg-card/30 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-5xl lg:text-6xl font-serif font-bold mb-6 text-text-soft">The 3-Step Relief Path</h2>
            <p className="text-text-soft/50 text-xl font-medium">We don't do checklists; we do results. Here is how we make it simple for you.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Text Tanya",
                desc: "Send a quick hello and a few photos of your space. No long forms or phone tag.",
                icon: <MessageSquare className="text-primary" size={32} />
              },
              {
                step: "02",
                title: "Personal Quote",
                desc: "Get a human price for your specific home. Honest, transparent, and fair.",
                icon: <CheckCircle className="text-primary" size={32} />
              },
              {
                step: "03",
                title: "Relaxed Weekend",
                desc: "We handle the grime while you handle the relaxing. Saturday is yours again.",
                icon: <Clock className="text-primary" size={32} />
              }
            ].map((item, i) => (
              <div key={i} className="group relative p-10 rounded-[2.5rem] bg-bg-card/50 border border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute top-6 right-8 text-6xl font-serif font-black text-white/5 group-hover:text-primary/10 transition-colors uppercase">{item.step}</div>
                <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-primary/10">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-serif font-bold mb-4 text-text-soft">{item.title}</h3>
                <p className="text-text-soft/50 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood Proof & Footer */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-16">
            <div className="flex flex-wrap justify-center gap-6">
              {['dundee', 'blackstone', 'millard'].map((loc) => (
                <Link
                  key={loc}
                  href={`/locations/${loc}`}
                  className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full text-sm font-bold uppercase tracking-[0.2em] text-text-soft/40 hover:text-primary hover:bg-white/10 transition-all border border-white/5 active:scale-95"
                >
                  <MapPin size={16} /> {loc}
                </Link>
              ))}
            </div>

            <div className="max-w-3xl text-center relative">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-9xl font-serif text-primary/10 select-none">“</div>
              <p className="text-3xl lg:text-4xl font-serif italic text-text-soft leading-snug relative z-10">
                "Tanya transformed our Dundee bungalow while we were at the park. Coming home to that scent and sparkle was the highlight of our week!"
              </p>
              <div className="mt-10 font-bold tracking-widest text-primary uppercase text-sm">— Sarah M., 48th St.</div>
            </div>

            <div className="mt-12 text-center group">
              <Link href="/locations" className="text-xs font-bold text-accent-grey/60 uppercase tracking-[0.3em] hover:text-primary transition-all border-b border-white/5 pb-2 group-hover:border-primary">
                Explore all served Omaha neighborhoods
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Bottom Dock (Mobile) */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
        <div className="bg-bg-card/80 backdrop-blur-2xl border border-accent-pink/5 rounded-full p-2 flex items-center justify-between shadow-2xl">
          <Link href="/tool" className="px-6 text-sm font-bold text-text-soft/60">Reality tool</Link>
          <a href="sms:+14020000000" className="bg-primary text-bg-dark px-6 py-3 rounded-full font-black text-sm">Text Tanya Now</a>
        </div>
      </div>
    </main>
  );
}
