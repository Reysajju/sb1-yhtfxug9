"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "29.99",
    features: [
      "Access to 10 Premium Tools",
      "24/7 Support",
      "Monthly Updates",
      "Basic Priority",
    ],
  },
  {
    name: "Pro",
    price: "49.99",
    popular: true,
    features: [
      "Access to 30 Premium Tools",
      "24/7 Priority Support",
      "Weekly Updates",
      "High Priority",
      "Dedicated Account Manager",
    ],
  },
  {
    name: "Ultimate",
    price: "99.99",
    features: [
      "Access to All Premium Tools",
      "24/7 VIP Support",
      "Daily Updates",
      "Highest Priority",
      "Personal Success Manager",
      "Custom Solutions",
    ],
  },
];

interface PlansSectionProps {
  onGetStarted: () => void;
}

export function PlansSection({ onGetStarted }: PlansSectionProps) {
  return (
    <section className="py-24 bg-black/30">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Choose Your <span className="text-yellow-400">Empire Plan</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 ${
                plan.popular
                  ? "bg-yellow-400/10 border-2 border-yellow-400"
                  : "bg-secondary/50"
              }`}
            >
              {plan.popular && (
                <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-yellow-400 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={onGetStarted}
                className={`w-full ${
                  plan.popular
                    ? "bg-yellow-400 text-black hover:bg-yellow-500"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}