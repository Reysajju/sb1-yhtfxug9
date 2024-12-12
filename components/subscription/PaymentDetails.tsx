"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PaymentDetailsProps {
  formData: any;
  errors: Record<string, string>;
  onBack: () => void;
  onNext: () => void;
  onSubmit: (data: any) => void;
}

export function PaymentDetails({ formData, errors, onBack, onNext, onSubmit }: PaymentDetailsProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="cardName">Name on Card</Label>
        <Input
          id="cardName"
          placeholder="John Doe"
          className={errors.cardName ? "border-red-500" : ""}
        />
        {errors.cardName && <p className="text-sm text-red-500">{errors.cardName}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="cardNumber">Card Number</Label>
        <Input
          id="cardNumber"
          placeholder="1234 5678 9012 3456"
          className={errors.cardNumber ? "border-red-500" : ""}
        />
        {errors.cardNumber && <p className="text-sm text-red-500">{errors.cardNumber}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="expiryDate">Expiry Date</Label>
          <Input
            id="expiryDate"
            placeholder="MM/YY"
            className={errors.expiryDate ? "border-red-500" : ""}
          />
          {errors.expiryDate && <p className="text-sm text-red-500">{errors.expiryDate}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="cvv">CVV</Label>
          <Input
            id="cvv"
            placeholder="123"
            className={errors.cvv ? "border-red-500" : ""}
          />
          {errors.cvv && <p className="text-sm text-red-500">{errors.cvv}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="billingCountry">Billing Country</Label>
        <Select>
          <SelectTrigger className={errors.billingCountry ? "border-red-500" : ""}>
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="ca">Canada</SelectItem>
            {/* Add more countries as needed */}
          </SelectContent>
        </Select>
        {errors.billingCountry && <p className="text-sm text-red-500">{errors.billingCountry}</p>}
      </div>

      <div className="flex justify-between mt-6">
        <Button type="button" variant="outline" onClick={onBack}>
          Back to Tools
        </Button>
        <Button type="submit" className="bg-yellow-400 text-black hover:bg-yellow-500">
          Review Order
        </Button>
      </div>
    </form>
  );
}