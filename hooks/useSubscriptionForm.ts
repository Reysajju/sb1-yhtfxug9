"use client";

import { useState } from "react";

interface SubscriptionFormData {
  cardName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  billingCountry: string;
}

export function useSubscriptionForm(plan: "basic" | "pro" | "ultimate") {
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [formData, setFormData] = useState<SubscriptionFormData>({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    billingCountry: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const maxTools = plan === "basic" ? 10 : plan === "pro" ? 20 : 30;

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

  const validatePayment = (data: SubscriptionFormData) => {
    const newErrors: Record<string, string> = {};
    
    if (!data.cardName) newErrors.cardName = "Name on card is required";
    if (!data.cardNumber) newErrors.cardNumber = "Card number is required";
    if (!data.expiryDate) newErrors.expiryDate = "Expiry date is required";
    if (!data.cvv) newErrors.cvv = "CVV is required";
    if (!data.billingCountry) newErrors.billingCountry = "Billing country is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePaymentSubmit = (data: SubscriptionFormData) => {
    if (!validatePayment(data)) return;
    setFormData(data);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Here you would integrate with your payment processing API
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    // Handle success/error states
  };

  return {
    formData,
    errors,
    isSubmitting,
    selectedTools,
    maxTools,
    handleToolSelect,
    handlePaymentSubmit,
    handleSubmit,
  };
}