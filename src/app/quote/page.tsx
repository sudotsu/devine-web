import { ArrowRight, MessageSquare, Phone } from "lucide-react";
import Link from "next/link";

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-bg-warm flex flex-col items-center justify-center p-4">
      <Link href="/" className="absolute top-8 left-8 text-primary font-bold flex items-center gap-2">
        ← Home
      </Link>

      <div className="w-full max-w-2xl text-center space-y-12">
        <div className="space-y-4">
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-[#2d1e1a]">Frictionless Contact.</h1>
          <p className="text-xl text-gray-600 max-w-xl mx-auto italic">
            "I don't like long forms and phone tag, and I bet you don't either." — Tanya
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="sms:+14020000000"
            className="group bg-primary text-white p-10 rounded-[2.5rem] shadow-2xl flex flex-col items-center gap-6 hover:scale-[1.02] transition-transform"
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageSquare size={32} />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Text Tanya</h2>
              <p className="text-white/80 text-sm">Best for quick quotes and sharing photos.</p>
            </div>
            <ArrowRight className="mt-4" />
          </a>

          <a
            href="tel:+14020000000"
            className="group bg-white text-[#2d1e1a] p-10 rounded-[2.5rem] shadow-xl flex flex-col items-center gap-6 border-2 border-primary/10 hover:border-primary/30 transition-all"
          >
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform text-primary">
              <Phone size={32} />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Call Directly</h2>
              <p className="text-gray-500 text-sm">Best for discussing complex commercial jobs.</p>
            </div>
            <ArrowRight className="mt-4 text-primary" />
          </a>
        </div>

        <div className="bg-white/50 p-8 rounded-3xl border border-primary/5">
          <h3 className="font-bold text-lg mb-2">Want to save time?</h3>
          <p className="text-gray-600 mb-6">Use our Reality Check tool to generate a pre-filled quote request in 60 seconds.</p>
          <Link href="/tool" className="text-primary font-bold hover:underline flex items-center justify-center gap-2">
            Try the Reality Check Tool <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </main>
  );
}
