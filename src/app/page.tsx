import { CheckCircle, Clock, MapPin, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Persistent Sticky Header */}
      <header className="sticky top-0 z-50 bg-bg-warm/80 backdrop-blur-md border-b border-primary/10">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-serif font-bold text-primary">Devine</span>
            <span className="text-xs uppercase tracking-widest text-accent-sage font-sans font-semibold border-l border-accent-sage/30 pl-2">Sparkle & Shine</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About Tanya</Link>
            <Link href="/tool" className="hover:text-primary transition-colors">Reality Check Tool</Link>
          </nav>

          <a
            href="sms:+14020000000"
            className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-primary/20"
          >
            <MessageSquare size={18} />
            Text Tanya
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight text-[#2d1e1a]">
              Tanya Cleans, <br />
              <span className="text-primary italic">You Relax.</span>
            </h1>
            <p className="mt-6 text-xl text-gray-700 max-w-xl leading-relaxed">
              Omaha's most trusted personal touch. Stop sacrificing your weekends to scrubbing.
              Get your Saturday back with reliable cleaning that treats your home like family.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="sms:+14020000000"
                className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 shadow-xl shadow-primary/30"
              >
                Text Tanya for a Quote
              </a>
              <Link
                href="/tool"
                className="bg-white border-2 border-accent-sage text-accent-sage px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 hover:bg-accent-sage/5 transition-colors"
              >
                <Clock size={20} />
                Reality Check Tool
              </Link>
            </div>
          </div>

          <div className="relative aspect-square max-w-md mx-auto lg:max-w-none w-full">
            <div className="absolute inset-0 bg-accent-sage/10 rounded-[3rem] rotate-3 -z-10"></div>
            <div className="absolute inset-0 bg-primary/5 rounded-[3rem] -rotate-3 -z-10"></div>
            {/* Placeholder for Tanya's Photo */}
            <div className="w-full h-full rounded-[3rem] overflow-hidden bg-gray-200 border-4 border-white shadow-2xl flex items-center justify-center text-gray-400 italic">
              [Photo of Tanya in a sunlit Omaha home]
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Relief */}
      <section className="py-24 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">The 3-Step Relief Path</h2>
            <p className="text-gray-600 text-lg">We don't do checklists; we do results. Here is how we make it simple for you.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
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
              <div key={i} className="relative p-8 rounded-3xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="absolute top-4 left-4 text-4xl font-serif font-black text-primary/5">{item.step}</div>
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood Proof & Footer Links */}
      <section className="py-20">
        <div className="container mx-auto px-4 border-t border-primary/10 pt-20">
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-wrap justify-center gap-4 text-sm font-bold uppercase tracking-widest text-[#2d1e1a]/60">
              <Link href="/locations/dundee" className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                <MapPin size={16} /> Dundee
              </Link>
              <span className="px-4 border-l border-primary/20 text-gray-300">•</span>
              <Link href="/locations/blackstone" className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                <MapPin size={16} /> Blackstone
              </Link>
              <span className="px-4 border-l border-primary/20 text-gray-300">•</span>
              <Link href="/locations/millard" className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                <MapPin size={16} /> Millard
              </Link>
            </div>

            <div className="max-w-2xl text-center">
              <p className="text-2xl font-serif italic text-primary leading-relaxed">
                "Tanya transformed our Dundee bungalow while we were at the park. Coming home to that scent and sparkle was the highlight of our week!"
              </p>
              <div className="mt-6 font-bold tracking-tight">— Sarah M., 48th St.</div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/locations" className="text-sm font-medium text-stone-500 hover:text-primary underline underline-offset-4">
                View all Omaha neighborhoods we serve
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
