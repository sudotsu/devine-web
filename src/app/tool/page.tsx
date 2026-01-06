"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, ArrowRight, Check, Home, MessageSquare, SprayCan, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


export default function RealityCheckTool() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);

  // Define steps dynamically based on previous answers
  const getSteps = () => {
    const baseSteps = [
      {
        id: "type",
        title: "Clean type?",
        options: [
          { id: "residential", label: "Residential Home", icon: <Home size={24} /> },
          { id: "commercial", label: "Office / Business", icon: <SprayCan size={24} /> },
          { id: "moveout", label: "Move-Out / Deep", icon: <Trash2 size={24} /> },
        ]
      }
    ];

    if (answers.type === "commercial") {
      return [
        ...baseSteps,
        {
          id: "businessType",
          title: "Facility Type?",
          options: [
            { id: "office", label: "Professional Office", icon: null },
            { id: "retail", label: "Retail / Boutique", icon: null },
            { id: "medical", label: "Medical / Wellness", icon: null },
            { id: "other", label: "Other Workspace", icon: null },
          ]
        },
        {
          id: "frequency",
          title: "Visit Frequency?",
          options: [
            { id: "daily", label: "Daily Maintenance", icon: null },
            { id: "weekly", label: "Once a Week", icon: null },
            { id: "periodic", label: "Monthly Deep Clean", icon: null },
          ]
        }
      ];
    }

    return [
      ...baseSteps,
      {
        id: "size",
        title: "Home Size?",
        options: [
          { id: "small", label: "Studio / 1-2 Bed", icon: null },
          { id: "medium", label: "3-4 Bed House", icon: null },
          { id: "large", label: "Large Estate", icon: null },
        ]
      },
      {
        id: "priority",
        title: "Main Focus?",
        options: [
          { id: "kitchen", label: "Kitchen & Bathrooms", icon: null },
          { id: "floors", label: "Floors & Surfaces", icon: null },
          { id: "whole", label: "Whole Home Shine", icon: null },
        ]
      }
    ];
  };

  const currentSteps = getSteps();

  const handleSelect = (optionId: string) => {
    const newAnswers = { ...answers, [currentSteps[currentStep].id]: optionId };
    setAnswers(newAnswers);

    if (currentStep < currentSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const generatePayload = () => {
    const typeLabel = currentSteps[0].options.find(o => o.id === answers.type)?.label;

    if (answers.type === "commercial") {
      const bType = currentSteps[1].options.find(o => o.id === answers.businessType)?.label;
      const freq = currentSteps[2].options.find(o => o.id === answers.frequency)?.label;
      return `Hi Tanya! I have a ${bType} in Omaha. Looking for ${freq} commercial cleaning. Could we set up a walkthrough?`;
    }

    const size = currentSteps[1].options.find(o => o.id === answers.size)?.label;
    const priority = currentSteps[2].options.find(o => o.id === answers.priority)?.label;
    return `Hi Tanya! I'd love a quote for my ${size} home. I'm especially interested in ${priority}. When are you free for a Saturday visit?`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatePayload());
  };

  return (
    <main className="min-h-screen bg-bg-dark flex flex-col items-center justify-center p-6 selection:bg-primary/30">
      <Link href="/" className="absolute top-8 left-8 text-primary font-bold flex items-center gap-2 hover:-translate-x-1 transition-transform">
        <ArrowRight className="rotate-180" size={18} />
        Back to Home
      </Link>

      <div className="w-full max-w-xl bg-bg-card rounded-[3rem] border border-white/5 shadow-2xl p-10 md:p-16 overflow-hidden relative">
        <AnimatePresence mode="wait">
          {!isFinished ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 1.05 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="space-y-10"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="h-0.5 flex-1 bg-white/5 overflow-hidden rounded-full">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentStep + 1) / currentSteps.length) * 100}%` }}
                      transition={{ duration: 0.8, ease: "circOut" }}
                    />
                  </div>
                  <span className="text-accent-pink font-black uppercase tracking-[0.3em] text-[10px]">
                    Step {currentStep + 1}/{currentSteps.length}
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-text-soft leading-tight">
                  {currentSteps[currentStep].title}
                </h1>
              </div>

              <div className="grid gap-4">
                {currentSteps[currentStep].options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleSelect(option.id)}
                    className="flex items-center gap-6 p-7 rounded-4xl border border-white/5 bg-white/2 hover:border-primary/40 hover:bg-primary/5 transition-all text-left group active:scale-[0.98]"
                  >
                    {option.icon ? (
                      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-bg-dark transition-all duration-500">
                        {option.icon}
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full border-2 border-primary/20 flex items-center justify-center group-hover:border-primary transition-colors">
                        <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    )}
                    <span className="text-xl font-bold text-text-soft/80 group-hover:text-text-soft transition-colors">{option.label}</span>
                    <ArrowRight className="ml-auto text-white/10 group-hover:text-primary group-hover:translate-x-2 transition-all" size={24} />
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", bounce: 0.4 }}
              className="text-center space-y-10"
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full scale-150"></div>
                <div className="w-24 h-24 bg-primary text-bg-dark rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 relative z-10 shadow-2xl">
                  <Check size={48} strokeWidth={3} />
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl font-serif font-bold text-text-soft leading-tight">Ready to Sparkle</h1>
                <p className="text-text-soft/40 text-lg font-medium">
                  We've built your perfect request. One tap to relief.
                </p>
              </div>

              <div className="bg-bg-dark/50 p-8 rounded-[2.5rem] text-left border border-white/5 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                   <MessageSquare size={40} className="text-primary" />
                </div>
                <p className="text-lg font-serif italic text-text-soft/80 leading-relaxed relative z-10 pr-12">
                  "{generatePayload()}"
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest">
                  <Check size={14} /> Text payload generated
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <a
                  href={`sms:+14020000000?body=${encodeURIComponent(generatePayload())}`}
                  onClick={copyToClipboard}
                  className="bg-primary text-bg-dark p-7 rounded-4xl text-2xl font-black hover:scale-[1.02] transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-4 active:scale-95"
                >
                  <MessageSquare size={28} />
                  Send to Tanya Now
                </a>
                <button
                  onClick={() => { setCurrentStep(0); setIsFinished(false); setAnswers({}); }}
                  className="text-text-soft/20 font-bold text-sm hover:text-primary transition-colors tracking-widest uppercase"
                >
                  Start over
                </button>
              </div>

              <div className="bg-primary/5 p-6 rounded-4xl flex gap-4 text-left border border-accent-pink/5">
                <AlertCircle className="text-primary shrink-0" size={24} />
                <p className="text-sm text-text-soft/40 font-bold leading-relaxed">
                  <strong className="text-text-soft">Tanya's Pro Tip:</strong> Most quotes are finished in under 60 minutes. Feel free to snap 2-3 photos of your space right after sending this text!
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
