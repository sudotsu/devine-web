import { Heart, MapPin, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg-warm">
      <div className="container mx-auto px-4 py-20">
        <Link href="/" className="text-primary font-bold mb-8 inline-block hover:underline">← Home</Link>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-accent-sage font-bold uppercase tracking-widest text-sm">The Story</span>
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-[#2d1e1a]">Personal, Local, <br />and Owner-Operated.</h1>
            </div>

            <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
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

            <div className="grid sm:grid-cols-2 gap-6 pt-8">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-primary/5">
                <Heart className="text-primary mb-4" size={24} />
                <h3 className="font-bold text-lg mb-2">Personal Care</h3>
                <p className="text-sm text-gray-600">No scripts. No templates. Just a clean home by people who care.</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-primary/5">
                <ShieldCheck className="text-primary mb-4" size={24} />
                <h3 className="font-bold text-lg mb-2">Direct Accountability</h3>
                <p className="text-sm text-gray-600">I am your point of contact. If it's not perfect, I make it right.</p>
              </div>
            </div>
          </div>

          <div className="relative">
             {/* Placeholder for Tanya photo */}
            <div className="aspect-4/5 bg-gray-200 rounded-[3rem] shadow-2xl overflow-hidden flex items-center justify-center text-gray-400 italic font-serif">
              [Tanya at work in Omaha]
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl max-w-xs border border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-primary" size={20} />
                <span className="font-bold">Born & Raised in Omaha</span>
              </div>
              <p className="text-sm text-gray-600 italic">"I know these neighborhoods because I live in them. Serving my community is the best part of the job."</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
