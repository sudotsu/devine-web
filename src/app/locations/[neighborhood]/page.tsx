import { locations } from '@/lib/locations';
import { ArrowLeft, CheckCircle2, MapPin, MessageSquare } from 'lucide-react';
import { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ neighborhood: string }>;
}

export async function generateStaticParams() {
  return locations.map((loc) => ({
    neighborhood: loc.slug,
  }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { neighborhood } = await params;
  const location = locations.find((l) => l.slug === neighborhood);

  if (!location) return {};

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://devinesparkle.com';

  return {
    title: `Cleaning Services in ${location.name}, Omaha | Devine Sparkle & Shine`,
    description: `Professional, trust-first cleaning services in ${location.name}. ${location.localProof}`,
    alternates: {
      canonical: `/locations/${location.slug}`,
    },
    openGraph: {
      title: `Cleaning Services in ${location.name}, Omaha`,
      description: `Tanya's personal cleaning service for ${location.name} residents.`,
      url: `${baseUrl}/locations/${location.slug}`,
    }
  };
}

export default async function LocationPage({ params }: Props) {
  const { neighborhood } = await params;
  const location = locations.find((l) => l.slug === neighborhood);

  if (!location) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bg-dark text-text-soft selection:bg-primary/30">
      <header className="py-10 px-6 max-w-5xl mx-auto flex items-center justify-between">
        <Link href="/locations" className="group flex items-center gap-2 text-primary font-bold hover:opacity-70 transition-opacity uppercase tracking-widest text-[10px]">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>All Neighborhoods</span>
        </Link>
        <Link href="/" className="text-xl font-serif text-primary font-bold">Devine Sparkle</Link>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-20 lg:py-32">
        <div className="flex flex-col gap-16 lg:gap-24">
          {/* Hero Section for Location */}
          <section className="relative group">
            <div className="absolute inset-0 bg-primary/5 rounded-[4rem] blur-3xl -z-10 animate-pulse"></div>
            <div className="bg-bg-card rounded-[3.5rem] p-10 lg:p-20 border border-white/5 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-12 opacity-5 -rotate-12 select-none pointer-events-none">
                  <MapPin size={200} />
               </div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 rounded-full border border-white/10 text-accent-sage text-[10px] font-black uppercase tracking-[0.3em] mb-10">
                <MapPin size={14} />
                <span>Serving {location.name}</span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-serif font-bold text-text-soft mb-10 leading-[1.1]">
                Personal Excellence in <span className="text-primary italic">{location.name}</span>
              </h1>

              <p className="text-xl text-text-soft/40 leading-relaxed mb-12 max-w-3xl font-medium">
                {location.localPain} {location.localProof} We specialize in <span className="text-text-soft font-bold italic underline decoration-primary/30 underline-offset-8">{location.serviceEmphasis}</span> tailored for this historic neighborhood near {location.landmark}.
              </p>

              <div className="flex flex-wrap gap-6 pt-5">
                <Link href="/tool" className="bg-primary text-bg-dark px-10 py-5 rounded-full font-black text-xl hover:scale-[1.03] transition-all shadow-2xl shadow-primary/30 active:scale-95">
                  Get Your {location.name} Quote
                </Link>
                <Link href="/services" className="px-10 py-5 rounded-full border border-white/10 text-text-soft font-bold hover:bg-white/5 transition-all text-xl">
                  Our Services
                </Link>
              </div>
            </div>
          </section>

          {/* Unique Local Section */}
          <section className="grid md:grid-cols-2 gap-10 lg:gap-16">
            <div className="bg-bg-card rounded-[3rem] p-12 lg:p-16 border border-white/5 shadow-xl hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 border border-primary/20">
                <CheckCircle2 size={32} />
              </div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-text-soft">The {location.name} Trust</h2>
              <p className="text-lg text-text-soft/50 mb-10 leading-relaxed font-medium">
                {location.name} isn't just another service area for us—it's part of our home. We understand the specific needs of {location.name} residents, from handling the unique dust patterns near {location.landmark} to the specific scheduling needs of local professionals.
              </p>
              <ul className="space-y-5">
                <li className="flex items-center gap-4 text-text-soft/60 font-bold tracking-tight">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Locally operated (No franchise scripts)</span>
                </li>
                <li className="flex items-center gap-4 text-text-soft/60 font-bold tracking-tight">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Vetted by your {location.name} neighbors</span>
                </li>
                <li className="flex items-center gap-4 text-text-soft/60 font-bold tracking-tight">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Custom plans for {location.name} estates</span>
                </li>
              </ul>
            </div>

            <div className="bg-bg-card rounded-[3rem] p-12 lg:p-16 border border-white/5 shadow-xl hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 bg-accent-sage/20 rounded-2xl flex items-center justify-center text-accent-sage mb-8 border border-accent-sage/20">
                <MessageSquare size={32} />
              </div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-text-soft">{location.name} FAQ</h2>
              <div className="space-y-10">
                <div className="group">
                  <h3 className="font-bold text-primary mb-3 uppercase tracking-widest text-xs group-hover:tracking-widest transition-all">Q: {location.faqPair.q}</h3>
                  <p className="text-text-soft/40 text-lg leading-relaxed font-medium">{location.faqPair.a}</p>
                </div>
                <div className="group">
                  <h3 className="font-bold text-primary mb-3 uppercase tracking-widest text-xs group-hover:tracking-widest transition-all">Q: How soon can Tanya visit my {location.name} home?</h3>
                  <p className="text-text-soft/40 text-lg leading-relaxed font-medium">We usually have availability within 3-5 business days for initial deep resets in the area.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="py-20 px-6 border-t border-white/5 mt-32 text-center">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-text-soft/20 text-xs font-black uppercase tracking-[0.4em]">© 2026 Devine Sparkle • {location.name}</div>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-text-soft/40">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
