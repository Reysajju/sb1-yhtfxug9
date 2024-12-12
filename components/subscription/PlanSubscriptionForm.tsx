"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ToolSelectionForm } from "./ToolSelectionForm";
import { useSubscriptionForm } from "@/hooks/useSubscriptionForm";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PlanSubscriptionFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  plan: "basic" | "pro" | "ultimate";
}

export function PlanSubscriptionForm({ 
  open, 
  onOpenChange, 
  plan 
}: PlanSubscriptionFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const { 
    selectedTools,
    maxTools,
    handleToolSelect,
    handleSubmit,
    isSubmitting 
  } = useSubscriptionForm(plan);

  const handleConfirm = async () => {
    await handleSubmit();
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">Success!</DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-4 py-4">
            <div className="mx-auto w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
              <Check className="w-6 h-6 text-green-500" />
            </div>
            <p className="text-lg text-gray-300">
              Your subscription has been confirmed. You can now access your selected tools.
            </p>
            <Button 
              onClick={() => onOpenChange(false)} 
              className="bg-yellow-400 text-black hover:bg-yellow-500"
            >
              Get Started
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] h-[90vh] overflow-hidden p-0">
        <div className="h-full flex flex-col">
          <DialogHeader className="p-6 flex-shrink-0">
            <DialogTitle className="text-2xl text-center">
              Select Your Tools - {plan.charAt(0).toUpperCase() + plan.slice(1)} Plan
            </DialogTitle>
          </DialogHeader>
          
          <div className="flex-1 overflow-y-auto px-6 pb-6">
            <ToolSelectionForm
              selectedTools={selectedTools}
              onToolSelect={handleToolSelect}
              maxTools={maxTools}
              onSubmit={handleConfirm}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}