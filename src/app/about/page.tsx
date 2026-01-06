import { Heart, MapPin, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg-dark text-text-soft selection:bg-primary/30">
      <div className="container mx-auto px-4 py-24">
        <Link href="/" className="text-primary font-bold mb-12 inline-flex items-center gap-2 hover:opacity-70 transition-opacity uppercase tracking-widest text-xs">
          ← Back to Home
        </Link>

        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div className="space-y-5">
              <span className="text-accent-sage font-black uppercase tracking-[0.3em] text-[10px] animate-pulse">The Story</span>
              <h1 className="text-6xl lg:text-7xl font-serif font-bold text-text-soft leading-tight">Personal, Local, <br />and owner-operated.</h1>
            </div>

            <div className="prose prose-invert prose-lg text-text-soft/60 leading-relaxed space-y-8 font-medium">
              <p>
                Hi, I'm Tanya. I started Devine Sparkle & Shine because I saw a gap in the Omaha market.
                Everything felt corporate, transactional, and lacked the personal touch that a home deserves.
              </p>
              <p>
                When you hire us, you aren't getting a rotating crew of strangers or a franchise script.
                You're getting me, my standards, and my direct accountability. I treat every home like my own
                because I live here, I work here, and my reputation is on every baseboard I clean.
              </p>
              <p>
                Our goal isn't just to "clean house"—it's to give you your weekend back. Whether it's a
                Dundee bungalow or a West Omaha office, we bring the same level of care and "sparkle"
                every single time.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 pt-10">
              <div className="group p-8 bg-bg-card rounded-[2.5rem] border border-white/5 hover:border-primary/30 transition-all duration-500">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Heart size={28} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-text-soft">Personal Care</h3>
                <p className="text-sm text-text-soft/40 italic">No scripts. No templates. Just a clean home by people who care.</p>
              </div>
              <div className="group p-8 bg-bg-card rounded-[2.5rem] border border-white/5 hover:border-primary/30 transition-all duration-500">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-text-soft">Direct Trust</h3>
                <p className="text-sm text-text-soft/40 italic">I am your point of contact. If it's not perfect, I make it right.</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-primary/10 rounded-[4rem] group-hover:rotate-2 transition-transform duration-700 blur-2xl"></div>
             {/* Placeholder for Tanya photo */}
            <div className="relative aspect-4/5 bg-bg-card rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center text-text-soft/20 italic font-serif z-10">
              [Tanya at work in Omaha]
            </div>
            <div className="absolute -bottom-10 -left-10 p-10 rounded-[2.5rem] shadow-2xl max-w-sm border border-white/10 z-20 backdrop-blur-xl bg-bg-card/90">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-10 bg-accent-sage/20 rounded-xl flex items-center justify-center text-accent-sage">
                  <MapPin size={24} />
                </div>
                <span className="font-bold text-text-soft tracking-wider">Omaha Native</span>
              </div>
              <p className="text-sm text-text-soft/50 italic font-medium leading-relaxed">"I know these neighborhoods because I live in them. Serving my community is the best part of the job."</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
