"use client";

import { useState } from "react";
import { TOOL_CATEGORIES, CategoryId, Tool } from "@/lib/constants/tool-categories";
import { ToolCategoryCard } from "./ToolCategoryCard";
import { Button } from "@/components/ui/button";

const PLANS = {
  basic: { name: "Basic", maxTools: 10, price: 49.99 },
  pro: { name: "Pro", maxTools: 20, price: 89.99 },
  ultimate: { name: "Ultimate", maxTools: 30, price: 149.99 },
} as const;

type PlanId = keyof typeof PLANS;

export function SubscriptionPlans() {
  const [selectedPlan, setSelectedPlan] = useState<PlanId>("basic");
  const [selectedTools, setSelectedTools] = useState<Record<CategoryId, Tool[]>>({} as Record<CategoryId, Tool[]>);

  const totalSelectedTools = Object.values(selectedTools).reduce(
    (sum, tools) => sum + tools.length,
    0
  );

  const handleToolsSelect = (categoryId: CategoryId, tools: Tool[]) => {
    setSelectedTools(prev => ({
      ...prev,
      [categoryId]: tools,
    }));
  };

  return (
    <section className="py-24 bg-black/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Choose Your <span className="text-yellow-400">Tools</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Select tools from each category. Mix and match to create your perfect toolkit.
          </p>

          <div className="flex justify-center gap-4 mb-12">
            {(Object.keys(PLANS) as PlanId[]).map((planId) => (
              <Button
                key={planId}
                variant={selectedPlan === planId ? "secondary" : "outline"}
                onClick={() => setSelectedPlan(planId)}
                className="min-w-[120px]"
              >
                {PLANS[planId].name}
              </Button>
            ))}
          </div>

          <div className="bg-secondary/50 p-4 rounded-lg inline-block mb-12">
            <p className="text-sm">
              Selected: {totalSelectedTools}/{PLANS[selectedPlan].maxTools} tools
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(Object.keys(TOOL_CATEGORIES) as CategoryId[]).map((categoryId) => (
            <ToolCategoryCard
              key={categoryId}
              categoryId={categoryId}
              maxTools={PLANS[selectedPlan].maxTools - totalSelectedTools + (selectedTools[categoryId]?.length || 0)}
              onToolsSelect={handleToolsSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}