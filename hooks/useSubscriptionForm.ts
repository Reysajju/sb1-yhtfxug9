"use client";

import { useState } from "react";

type PlanType = "basic" | "pro" | "ultimate";

const PLAN_LIMITS: Record<PlanType, number> = {
  basic: 10,
  pro: 20,
  ultimate: 30,
};

export function useSubscriptionForm(plan: PlanType) {
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const maxTools = PLAN_LIMITS[plan];

  const handleToolSelect = (tool: string) => {
    setSelectedTools(prev => {
      if (prev.includes(tool)) {
        return prev.filter(t => t !== tool);
      }
      if (prev.length >= maxTools) {
        return prev;
      }
      return [...prev, tool];
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Here you would integrate with your backend API
      await new Promise(resolve => setTimeout(resolve, 1500));
      return true;
    } catch (error) {
      console.error('Subscription error:', error);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    selectedTools,
    maxTools,
    isSubmitting,
    handleToolSelect,
    handleSubmit,
  };
}