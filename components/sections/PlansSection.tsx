"use client";

import { TOOL_CATEGORIES } from "@/lib/constants/categories";
import { CategoryCard } from "@/components/plans/CategoryCard";

interface PlansSectionProps {
  onGetStarted: (category: string, tools: string[]) => void;
}

export function PlansSection({ onGetStarted }: PlansSectionProps) {
  return (
    <section className="py-24 bg-black/30">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Choose Your <span className="text-yellow-400">Empire Tools</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Select the tools you need from each category. Get up to 60% off regular prices
          when bundling multiple tools together.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(TOOL_CATEGORIES).map(([category, data]) => (
            <CategoryCard
              key={category}
              name={data.name}
              description={data.description}
              tools={data.tools}
              onGetStarted={(tools) => onGetStarted(category, tools)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}