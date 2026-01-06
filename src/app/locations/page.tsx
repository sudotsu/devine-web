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
    <div className="min-h-screen bg-bg-warm font-sans text-gray-900">
      <header className="py-8 px-6 max-w-4xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-serif text-primary italic">Devine Sparkle</Link>
        <Link href="/quote" className="text-sm font-semibold text-primary hover:underline">Get a Quote</Link>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
          Neighborhoods We <span className="text-primary italic">Serve</span>
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl">
          Tanya provides personal cleaning services across the Omaha metro area. Select your neighborhood to see local proof and community-specific services.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="group bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <MapPin size={20} />
              </div>
              <h2 className="text-xl font-serif font-bold mb-2">{loc.name}</h2>
              <div className="flex items-center gap-1 text-sm text-stone-500 font-medium group-hover:text-primary">
                <span>View local details</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-20 p-8 md:p-12 bg-stone-900 rounded-[2.5rem] text-white overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl font-serif mb-4">Don't see your neighborhood?</h2>
            <p className="text-stone-400 mb-8 max-w-md">We are constantly expanding our personal cleaning routes. Text Tanya to see if we can fit your home into our schedule.</p>
            <a href="sms:+14020000000" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
              Check Availability
            </a>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-stone-100 mt-12 text-center text-stone-400 text-sm">
        © 2026 Devine Sparkle & Shine. All rights reserved.
      </footer>
    </div>
  );
}
