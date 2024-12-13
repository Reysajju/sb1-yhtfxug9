"use client";

import { Check } from "lucide-react";

interface PlanFeatureListProps {
  features: string[];
}

export function PlanFeatureList({ features }: PlanFeatureListProps) {
  return (
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3">
          <Check className="h-5 w-5 text-yellow-400 flex-shrink-0" aria-hidden="true" />
          <span className="text-gray-300">{feature}</span>
        </li>
      ))}
    </ul>
  );
}