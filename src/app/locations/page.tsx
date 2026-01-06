import { locations } from '@/lib/locations';
import { ArrowRight, MapPin } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Omaha Neighborhoods We Serve | Devine Sparkle & Shine',
  description: 'Explore the Omaha communities Tanya serves, from Dundee to Millard. Personal, trust-first cleaning for your neighborhood.',
  alternates: {
    canonical: '/locations',
  }
};

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-bg-dark text-text-soft selection:bg-primary/30">
      <header className="py-10 px-6 max-w-5xl mx-auto flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-colors">
            <span className="text-primary font-serif font-bold text-xl">D</span>
          </div>
          <span className="text-xl font-serif font-bold text-primary group-hover:tracking-wider transition-all">Devine Sparkle</span>
        </Link>
        <Link href="/tool" className="text-xs font-bold uppercase tracking-[0.2em] text-accent-sage hover:text-primary transition-colors">Reality Check tool</Link>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-3xl mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-accent-sage text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            <MapPin size={12} className="animate-pulse" />
            Omaha Coverage
          </div>
          <h1 className="text-6xl lg:text-7xl font-serif font-bold text-text-soft mb-8 leading-[1.1]">
            Neighborhoods We <span className="text-primary italic">Serve</span>
          </h1>
          <p className="text-xl text-text-soft/40 max-w-2xl leading-relaxed font-medium">
            Tanya provides personal cleaning services across the Omaha metro area. Select your neighborhood to see local proof and community-specific services.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="group bg-bg-card rounded-[2.5rem] p-10 border border-white/5 shadow-2xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-bg-dark transition-all duration-500 border border-white/5 group-hover:border-primary/20">
                <MapPin size={24} />
              </div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-text-soft">{loc.name}</h2>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-text-soft/20 group-hover:text-primary pt-8 border-t border-white/5 transition-colors">
                <span>View local details</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-40 p-12 lg:p-24 bg-primary rounded-[3.5rem] text-bg-dark overflow-hidden relative group">
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-5xl lg:text-6xl font-serif font-bold mb-8">Don't see your neighborhood?</h2>
            <p className="text-bg-dark/60 mb-12 max-w-xl text-xl font-bold leading-relaxed">We are constantly expanding our personal cleaning routes within the 402. Text Tanya to see if we can fit your home into our schedule.</p>
            <a href="sms:+14020000000" className="bg-bg-dark text-primary px-12 py-5 rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-all active:scale-95 flex items-center gap-3">
              Check Availability
              <ArrowRight size={24} />
            </a>
          </div>
          <div className="absolute top-0 right-0 w-125 h-125 bg-white/10 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:scale-110 transition-transform duration-3000"></div>
        </section>
      </main>

      <footer className="py-20 px-6 border-t border-white/5 mt-24 text-center">
        <div className="text-text-soft/20 text-xs font-black uppercase tracking-[0.5em]">
          © 2026 Devine Sparkle & Shine • Omaha, Nebraska
        </div>
      </footer>
    </div>
  );
}
