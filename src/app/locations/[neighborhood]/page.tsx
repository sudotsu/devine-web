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
    <div className="min-h-screen bg-bg-warm font-sans text-gray-900">
      <header className="py-8 px-6 max-w-4xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity font-medium">
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </Link>
        <div className="text-xl font-serif text-primary italic">Devine Sparkle</div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col gap-8">
          {/* Hero Section for Location */}
          <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-50 rounded-full text-stone-600 text-sm font-medium mb-6">
              <MapPin size={16} />
              <span>Serving {location.name}, Omaha, NE</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
              Personal Cleaning Excellence in <span className="text-primary italic">{location.name}</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
              {location.localPain} {location.localProof} We specialize in <span className="font-semibold text-gray-900">{location.serviceEmphasis}</span> tailored for this historic neighborhood near {location.landmark}.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/quote" className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                Get Your {location.name} Quote
              </Link>
              <Link href="/services" className="px-8 py-4 rounded-full border border-stone-200 font-semibold hover:bg-stone-50 transition-colors">
                View Services
              </Link>
            </div>
          </section>

          {/* Unique Local Section */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-stone-50 rounded-3xl p-8 border border-stone-100">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6">
                <CheckCircle2 size={24} />
              </div>
              <h2 className="text-2xl font-serif mb-4">Why {location.name} Trusts Tanya</h2>
              <p className="text-gray-600 mb-6">
                {location.name} isn't just another service area for us—it's part of our home. We understand the specific needs of {location.name} residents, from handling the unique dust patterns near {location.landmark} to the specific scheduling needs of local professionals.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-stone-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Locally operated (No franchise scripts)</span>
                </li>
                <li className="flex items-center gap-3 text-stone-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Vetted by your {location.name} neighbors</span>
                </li>
                <li className="flex items-center gap-3 text-stone-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Custom plans for {location.name} homes</span>
                </li>
              </ul>
            </div>

            <div className="bg-stone-900 rounded-3xl p-8 text-white">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6">
                <MessageSquare size={24} />
              </div>
              <h2 className="text-2xl font-serif mb-4">{location.name} Neighborhood FAQ</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-primary mb-2">Q: {location.faqPair.q}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{location.faqPair.a}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Q: How soon can Tanya visit my {location.name} home?</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">We usually have availability within 3-5 business days for initial deep climbs in the area.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="py-12 px-6 border-t border-stone-100 mt-12 bg-white/50">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-stone-400 text-sm">© 2026 Devine Sparkle & Shine. All Omaha neighborhoods served.</div>
          <div className="flex gap-6 text-sm font-medium text-stone-600">
            <Link href="/" className="hover:text-primary">Home</Link>
            <Link href="/services" className="hover:text-primary">Services</Link>
            <Link href="/about" className="hover:text-primary">About</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
