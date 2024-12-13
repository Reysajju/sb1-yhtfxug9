"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1626785774625-0b1c09197357?auto=format&fit=crop&q=80&w=2071",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=2074",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072",
];

const HERO_CONTENT = [
  {
    title: "Premium Tools for Success",
    subtitle: "Build your empire with professional tools at a fraction of the cost",
  },
  {
    title: "Design & Creative Suite",
    subtitle: "Create stunning visuals with industry-leading tools",
  },
  {
    title: "Business Essentials",
    subtitle: "Everything you need to grow your business",
  },
  // Add more variations as needed
];

interface HeroSectionProps {
  onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentContent, setCurrentContent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
      setCurrentContent((prev) => (prev + 1) % HERO_CONTENT.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {HERO_IMAGES.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {HERO_CONTENT[currentContent].title}
        </h1>
        <p className="text-xl md:text-2xl text-yellow-400 mb-8">
          {HERO_CONTENT[currentContent].subtitle}
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