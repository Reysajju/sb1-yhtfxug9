"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RegistrationDialog } from "@/components/registration/RegistrationDialog";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PlansSection } from "@/components/sections/PlansSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const [showRegistration, setShowRegistration] = useState(false);

  const handleGetStarted = () => {
    setShowRegistration(true);
  };

  return (
    <main className="min-h-screen bg-background">
      <HeroSection onGetStarted={handleGetStarted} />
      <FeaturesSection />
      <PlansSection onGetStarted={handleGetStarted} />
      <NewsletterSection />
      <Footer />
      <RegistrationDialog 
        open={showRegistration} 
        onOpenChange={setShowRegistration} 
      />
    </main>
  );
}