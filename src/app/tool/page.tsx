"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, ArrowRight, Check, Home, MessageSquare, Scissors, SprayCan, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const steps = [
  {
    id: "type",
    title: "What are we cleaning?",
    options: [
      { id: "residential", label: "Residential Home", icon: <Home size={24} /> },
      { id: "commercial", label: "Office / Commercial", icon: <SprayCan size={24} /> },
      { id: "moveout", label: "Move-Out / Deep Clean", icon: <Trash2 size={24} /> },
      { id: "other", label: "Specific Project (Garage, Windows, etc.)", icon: <Scissors size={24} /> },
    ]
  },
  {
    id: "size",
    title: "About how big is the space?",
    options: [
      { id: "small", label: "Studio / 1-2 Bedroom", icon: null },
      { id: "medium", label: "3-4 Bedroom / Standard House", icon: null },
      { id: "large", label: "Large Estate / 5+ Bedroom", icon: null },
      { id: "commercial", label: "Commercial Square Footage", icon: null },
    ]
  },
  {
    id: "priority",
    title: "What's the main focus?",
    options: [
      { id: "kitchen", label: "Kitchen & Bathrooms", icon: null },
      { id: "floors", label: "Floors & Dusting", icon: null },
      { id: "declutter", label: "Decluttering / Junk removal", icon: null },
      { id: "whole", label: "Whole Home Shine", icon: null },
    ]
  }
];

export default function RealityCheckTool() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);

  const handleSelect = (optionId: string) => {
    const newAnswers = { ...answers, [steps[currentStep].id]: optionId };
    setAnswers(newAnswers);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const generatePayload = () => {
    const type = steps[0].options.find(o => o.id === answers.type)?.label;
    const size = steps[1].options.find(o => o.id === answers.size)?.label;
    const priority = steps[2].options.find(o => o.id === answers.priority)?.label;

    return `Hi Tanya! I just used your Reality Check tool. I have a ${type} (${size}). My main focus is ${priority}. Could I get a quote for a Saturday visit?`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatePayload());
    alert("Message copied! You can now paste it into your text app.");
  };

  return (
    <main className="min-h-screen bg-bg-warm flex flex-col items-center justify-center p-4">
      <Link href="/" className="absolute top-8 left-8 text-primary font-bold flex items-center gap-2">
        ← Back to Home
      </Link>

      <div className="w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 overflow-hidden relative">
        <AnimatePresence mode="wait">
          {!isFinished ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <p className="text-accent-sage font-bold uppercase tracking-widest text-xs">
                  Step {currentStep + 1} of {steps.length}
                </p>
                <h1 className="text-3xl font-serif font-bold text-[#2d1e1a]">
                  {steps[currentStep].title}
                </h1>
              </div>

              <div className="grid gap-4">
                {steps[currentStep].options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleSelect(option.id)}
                    className="flex items-center gap-4 p-6 rounded-2xl border-2 border-gray-100 hover:border-primary/30 hover:bg-primary/5 transition-all text-left group"
                  >
                    {option.icon && (
                      <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        {option.icon}
                      </div>
                    )}
                    <span className="text-lg font-bold text-gray-700">{option.label}</span>
                    <ArrowRight className="ml-auto text-gray-300 group-hover:text-primary transition-colors" size={20} />
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-8"
            >
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={40} />
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl font-serif font-bold text-[#2d1e1a]">Reality Check Complete</h1>
                <p className="text-gray-600 text-lg">
                  Tanya is ready for you. Based on your answers, we've prepared a message for her.
                </p>
              </div>

              <div className="bg-bg-warm p-6 rounded-2xl text-left border border-primary/10 relative group">
                <p className="text-sm font-sans italic text-gray-700 leading-relaxed pr-8">
                  "{generatePayload()}"
                </p>
                <button
                  onClick={copyToClipboard}
                  className="absolute top-4 right-4 text-primary hover:scale-110 transition-transform"
                  title="Copy to clipboard"
                >
                  <MessageSquare size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href={`sms:+14020000000?body=${encodeURIComponent(generatePayload())}`}
                  className="bg-primary text-white p-6 rounded-2xl text-xl font-bold hover:scale-[1.02] transition-transform shadow-xl shadow-primary/20 flex items-center justify-center gap-3"
                >
                  <MessageSquare size={24} />
                  Send Text to Tanya Now
                </a>
                <button
                  onClick={() => { setCurrentStep(0); setIsFinished(false); setAnswers({}); }}
                  className="text-gray-400 font-bold text-sm hover:text-primary transition-colors"
                >
                  Start over
                </button>
              </div>

              <div className="bg-accent-sage/5 p-4 rounded-xl flex gap-3 text-left">
                <AlertCircle className="text-accent-sage shrink-0" size={20} />
                <p className="text-xs text-accent-sage/80 leading-tight">
                  <strong>Pro Tip:</strong> Tanya usually responds within an hour. Sending 2-3 photos right after this text helps her give you a firm quote even faster!
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
