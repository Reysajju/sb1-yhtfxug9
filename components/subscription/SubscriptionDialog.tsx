"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ToolSelector } from "./ToolSelector";
import { PaymentDetails } from "./PaymentDetails";
import { SubscriptionSummary } from "./SubscriptionSummary";
import { Button } from "@/components/ui/button";
import { useSubscriptionForm } from "@/hooks/useSubscriptionForm";

interface SubscriptionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedPlan: "basic" | "pro" | "ultimate";
}

export function SubscriptionDialog({ open, onOpenChange, selectedPlan }: SubscriptionDialogProps) {
  const [step, setStep] = useState<"tools" | "payment" | "summary">("tools");
  const { 
    formData, 
    errors, 
    isSubmitting, 
    handleToolSelect, 
    handlePaymentSubmit,
    handleSubmit,
    maxTools,
    selectedTools 
  } = useSubscriptionForm(selectedPlan);

  const renderStepContent = () => {
    switch (step) {
      case "tools":
        return (
          <ToolSelector
            selectedTools={selectedTools}
            onToolSelect={handleToolSelect}
            maxTools={maxTools}
            onNext={() => setStep("payment")}
          />
        );
      case "payment":
        return (
          <PaymentDetails
            formData={formData}
            errors={errors}
            onBack={() => setStep("tools")}
            onNext={() => setStep("summary")}
            onSubmit={handlePaymentSubmit}
          />
        );
      case "summary":
        return (
          <SubscriptionSummary
            plan={selectedPlan}
            tools={selectedTools}
            formData={formData}
            onBack={() => setStep("payment")}
            onConfirm={handleSubmit}
            isSubmitting={isSubmitting}
          />
        );
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] h-[90vh] sm:h-auto overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            Customize Your {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} Plan
          </DialogTitle>
        </DialogHeader>
        {renderStepContent()}
      </DialogContent>
    </Dialog>
  );
}