import { ArrowRight, Droplets, Home, Scissors, SprayCan, Trash2, Wind } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Residential Cleaning",
    desc: "Standard weekly or bi-weekly visits to keep your home feeling like a sanctuary.",
    icon: <Home className="text-primary" />,
    features: ["Dusting & Polishing", "Vacuum & Mop", "Kitchen & Bath Detail"]
  },
  {
    title: "Deep Clean / Cleanouts",
    desc: "A total reset for your space. Perfect for seasonal cleaning or heavily lived-in areas.",
    icon: <Trash2 className="text-primary" />,
    features: ["Baseboards & Trim", "Inside Cabinets", "Deep Grime Removal"]
  },
  {
    title: "Move-In / Move-Out",
    desc: "Ensuring you get your deposit back or start fresh in your new home.",
    icon: <Scissors className="text-primary" />,
    features: ["Total Appliance Clean", "Wall Spot Cleaning", "Closet & Shelf Detail"]
  },
  {
    title: "Commercial / Office",
    desc: "Professional cleaning that keeps your business looking sharp and welcoming.",
    icon: <SprayCan className="text-primary" />,
    features: ["Trash Removal", "Common Area Sanitize", "Desk & Surface Polishing"]
  },
  {
    title: "Windows & Glass",
    desc: "Crystal clear views. We handle interiors, low-reach exteriors, and tracks.",
    icon: <Wind className="text-primary" />,
    features: ["Streak-free Finish", "Track & Sill Clean", "Screen Dusting"]
  },
  {
    title: "Exterior / Pressure Wash",
    desc: "Revitalize your driveway, deck, or siding. Removing years of Omaha weather.",
    icon: <Droplets className="text-primary" />,
    features: ["Concrete Power Wash", "Deck Rinse", "Siding Refresh"]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-bg-dark text-text-soft selection:bg-primary/30">
      <header className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-125 h-125 bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Link href="/" className="text-primary font-bold mb-10 inline-flex items-center gap-2 hover:opacity-70 transition-opacity uppercase tracking-widest text-xs">
            ← Back to Home
          </Link>
          <h1 className="text-6xl lg:text-7xl font-serif font-bold text-text-soft leading-tight">Plain Language Services</h1>
          <p className="mt-6 text-xl text-text-soft/40 max-w-2xl mx-auto font-medium">No confusing packages. Just clear, professional results for every corner of your life.</p>
        </div>
      </header>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="group flex flex-col bg-bg-card p-10 rounded-[2.5rem] border border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-bg-dark transition-all duration-500 border border-white/5 group-hover:border-primary/20">
                  {s.icon}
                </div>
                <h2 className="text-3xl font-serif font-bold mb-5 text-text-soft">{s.title}</h2>
                <p className="text-text-soft/50 mb-10 leading-relaxed font-medium">{s.desc}</p>
                <ul className="space-y-4 mb-auto">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-4 text-sm font-bold text-text-soft/60 tracking-tight">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`sms:+14020000000?body=${encodeURIComponent(`Hi Tanya, I'm interested in ${s.title}.`)}`}
                  className="flex items-center justify-between w-full font-black text-xs uppercase tracking-widest text-primary border-t border-white/5 pt-10 mt-12 group-hover:translate-x-1 transition-transform"
                >
                  Contact About This
                  <ArrowRight size={18} />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-32 relative group">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-[3rem] -z-10 animate-pulse"></div>
            <div className="bg-primary text-bg-dark p-16 lg:p-24 rounded-[3.5rem] text-center shadow-2xl shadow-primary/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12">
                <SprayCan size={200} />
              </div>
              <h2 className="text-5xl lg:text-6xl font-serif font-bold mb-6">Need something else?</h2>
              <p className="text-bg-dark/60 mb-12 text-xl font-bold max-w-xl mx-auto">We handle car interiors, specific room deep-cleans, and custom Omaha projects. Just ask.</p>
              <a
                href="sms:+14020000000"
                className="bg-bg-dark text-primary px-12 py-5 rounded-full font-black text-xl inline-flex items-center gap-3 hover:scale-105 transition-all shadow-2xl active:scale-95"
              >
                Text Tanya Now
                <ArrowRight size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
