"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Check } from "lucide-react";

interface SubscriptionSummaryProps {
  plan: string;
  tools: string[];
  formData: any;
  onBack: () => void;
  onConfirm: () => void;
  isSubmitting: boolean;
}

export function SubscriptionSummary({
  plan,
  tools,
  formData,
  onBack,
  onConfirm,
  isSubmitting
}: SubscriptionSummaryProps) {
  const getPlanPrice = () => {
    switch (plan) {
      case "basic": return "29.99";
      case "pro": return "49.99";
      case "ultimate": return "99.99";
      default: return "0";
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-lg bg-secondary/50 p-4">
        <h3 className="text-lg font-semibold mb-2">Plan Details</h3>
        <div className="flex justify-between items-center">
          <span className="capitalize">{plan} Plan</span>
          <span>${getPlanPrice()}/month</span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Selected Tools</h3>
        <ScrollArea className="h-[200px] rounded-md border p-4">
          {tools.map((tool, index) => (
            <div key={index} className="flex items-center space-x-2 py-1">
              <Check className="h-4 w-4 text-yellow-400" />
              <span>{tool}</span>
            </div>
          ))}
        </ScrollArea>
      </div>

      <div className="rounded-lg bg-secondary/50 p-4">
        <h3 className="text-lg font-semibold mb-2">Payment Details</h3>
        <p>Card ending in {formData.cardNumber?.slice(-4)}</p>
        <p>Billing Country: {formData.billingCountry}</p>
      </div>

      <div className="flex justify-between items-center pt-4 border-t">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button
          onClick={onConfirm}
          disabled={isSubmitting}
          className="bg-yellow-400 text-black hover:bg-yellow-500"
        >
          {isSubmitting ? "Processing..." : "Confirm Subscription"}
        </Button>
      </div>
    </div>
  );
}