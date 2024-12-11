"use client";

import { 
  Briefcase, 
  Palette, 
  LineChart, 
  Clock, 
  ShoppingCart, 
  Music 
} from "lucide-react";

const features = [
  {
    title: "Professional Growth Tools",
    description: "Access LinkedIn Premium, Grammarly, ChatGPT Plus and more for career advancement.",
    icon: Briefcase,
  },
  {
    title: "Design Mastery",
    description: "Create stunning visuals with Canva Pro, Adobe Creative Cloud, and Final Cut Pro.",
    icon: Palette,
  },
  {
    title: "Marketing & SEO",
    description: "Dominate search rankings with SEMrush, Ahrefs, and BuzzSumo.",
    icon: LineChart,
  },
  {
    title: "Productivity & Management",
    description: "Stay organized with Google Workspace, Trello, and Notion Premium.",
    icon: Clock,
  },
  {
    title: "E-Commerce",
    description: "Build your online store with Shopify Plus, Wix Premium, and BigCommerce.",
    icon: ShoppingCart,
  },
  {
    title: "Music & Video Streaming",
    description: "Enjoy unlimited entertainment with Spotify Premium and YouTube Premium.",
    icon: Music,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-black/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          All the Tools You Need to Build Your Empire, 
          <span className="text-yellow-400"> All in One Place</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-secondary/50 backdrop-blur-sm
                         hover:bg-secondary/70 transition-colors duration-300"
            >
              <feature.icon className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}