"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const slides = [
  {
    title: "LinkedIn Premium",
    image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&q=80&w=2070",
  },
  {
    title: "Canva Pro",
    image: "https://images.unsplash.com/photo-1626785774625-0b1c09197357?auto=format&fit=crop&q=80&w=2071",
  },
  {
    title: "ChatGPT Plus",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070",
  },
];

interface HeroSectionProps {
  onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Want to Be a Magnate? Struggling with Expensive Tools?
          <span className="text-yellow-400"> You're in the Right Place!</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          Unlock premium services like LinkedIn, Canva Pro, ChatGPT, Spotify, and 50+ other tools
          at a fraction of the cost. Build your empire today!
        </p>
        <Button
          size="lg"
          onClick={onGetStarted}
          className="bg-yellow-500 hover:bg-yellow-400 text-black text-lg px-8 py-6 rounded-full
                   transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-500/50"
        >
          Get Started Now
          <ChevronRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
}