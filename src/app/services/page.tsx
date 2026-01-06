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
    <main className="min-h-screen bg-bg-warm">
      <header className="py-20 bg-white/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <Link href="/" className="text-primary font-bold mb-4 inline-block hover:underline">← Home</Link>
          <h1 className="text-5xl font-serif font-bold text-[#2d1e1a]">Plain Language Services</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">No confusing packages. Just clear, professional results for every corner of your life.</p>
        </div>
      </header>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-primary/5 group">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <h2 className="text-2xl font-serif font-bold mb-4">{s.title}</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">{s.desc}</p>
                <ul className="space-y-3 mb-10">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`sms:+14020000000?body=${encodeURIComponent(`Hi Tanya, I'm interested in ${s.title}.`)}`}
                  className="flex items-center justify-between w-full font-bold text-primary border-t border-primary/10 pt-6 group-hover:translate-x-1 transition-transform"
                >
                  Text Tanya about this
                  <ArrowRight size={20} />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-primary text-white p-12 rounded-[3rem] text-center shadow-2xl shadow-primary/20">
            <h2 className="text-3xl font-serif font-bold mb-4">Need something else?</h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">We handle car interiors, specific room deep-cleans, and more. Just ask.</p>
            <a
              href="sms:+14020000000"
              className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg inline-block hover:scale-105 transition-transform"
            >
              Text Tanya Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
