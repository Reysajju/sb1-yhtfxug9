"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { useSubscriptionForm } from "@/hooks/useSubscriptionForm";
import { categorizedTools } from "@/lib/utils/tool-categories";
import { useState } from "react";

interface PlanSubscriptionFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  plan: "basic" | "pro" | "ultimate";
}

export function PlanSubscriptionForm({ open, onOpenChange, plan }: PlanSubscriptionFormProps) {
  const { selectedTools, maxTools, isSubmitting, handleToolSelect, handleSubmit } = useSubscriptionForm(plan);
  const [currentCategory, setCurrentCategory] = useState<keyof typeof categorizedTools>("professional");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await handleSubmit();
    if (success) {
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center mb-4">
            Select Your Tools ({selectedTools.length}/{maxTools})
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col md:flex-row gap-4 flex-1 min-h-0">
          {/* Category Selection */}
          <div className="md:w-1/3">
            <ScrollArea className="h-[300px] md:h-[400px]">
              <div className="space-y-2 pr-4">
                {(Object.keys(categorizedTools) as Array<keyof typeof categorizedTools>).map((category) => (
                  <Button
                    key={category}
                    variant={currentCategory === category ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setCurrentCategory(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Tool Selection */}
          <div className="md:w-2/3">
            <ScrollArea className="h-[300px] md:h-[400px]">
              <div className="space-y-3 pr-4">
                {categorizedTools[currentCategory].map((tool) => (
                  <div key={tool} className="flex items-center space-x-3">
                    <Checkbox
                      id={tool}
                      checked={selectedTools.includes(tool)}
                      onCheckedChange={() => handleToolSelect(tool)}
                      disabled={!selectedTools.includes(tool) && selectedTools.length >= maxTools}
                    />
                    <label
                      htmlFor={tool}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {tool}
                    </label>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <p className="text-sm text-gray-400 text-center">
            {selectedTools.length < maxTools
              ? `You can select ${maxTools - selectedTools.length} more tools`
              : "You've reached the maximum number of tools for this plan"}
          </p>
          <Button
            className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
            onClick={handleFormSubmit}
            disabled={isSubmitting || selectedTools.length === 0}
          >
            {isSubmitting ? "Processing..." : "Continue with Selected Tools"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}