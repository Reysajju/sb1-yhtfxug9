"use client";

import { useState } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { SubscriptionPlans } from "@/components/subscription/SubscriptionPlans";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { Footer } from "@/components/sections/Footer";
import { RegistrationDialog } from "@/components/registration/RegistrationDialog";

export default function Home() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [selectedTools, setSelectedTools] = useState<string[]>([]);

  const handleGetStarted = () => {
    setSelectedCategory(undefined);
    setSelectedTools([]);
    setShowRegistration(true);
  };

  const handleCategorySelection = (category: string, tools: string[]) => {
    setSelectedCategory(category);
    setSelectedTools(tools);
    setShowRegistration(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onGetStarted={handleGetStarted} />
      <FeaturesSection />
      <SubscriptionPlans />
      <NewsletterSection />
      <Footer />
      <RegistrationDialog 
        open={showRegistration} 
        onOpenChange={setShowRegistration}
        selectedCategory={selectedCategory}
        selectedTools={selectedTools}
      />
    </div>
  );
}