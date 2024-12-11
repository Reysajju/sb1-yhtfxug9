"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { PREMIUM_TOOLS } from "@/lib/constants/tools";
import { generateCaptcha, validateCaptcha } from "@/lib/utils/captcha";

interface RegistrationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RegistrationDialog({ open, onOpenChange }: RegistrationDialogProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    stateProvince: "",
    country: "",
    selectedTool: "",
    otherTool: "",
    captchaInput: "",
    agreeToTerms: false,
  });

  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [showOtherTool, setShowOtherTool] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.stateProvince) newErrors.stateProvince = "State/Province is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.selectedTool) newErrors.selectedTool = "Please select a tool";
    if (showOtherTool && !formData.otherTool) newErrors.otherTool = "Please specify the tool";
    if (!validateCaptcha(formData.captchaInput, captcha)) newErrors.captcha = "Invalid captcha";
    if (!formData.agreeToTerms) newErrors.terms = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Here you would integrate with Beehiiv API
    // For now, we'll simulate the API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSuccess(true);
    setIsSubmitting(false);
  };

  const handleToolChange = (value: string) => {
    setShowOtherTool(value === "Other (Please Specify)");
    setFormData(prev => ({ ...prev, selectedTool: value }));
  };

  if (isSuccess) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">Thank You!</DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-4 py-4">
            <p className="text-lg text-gray-300">
              Please be patient. One of our agents will contact you soon to provide premium service details.
            </p>
            <Button onClick={() => onOpenChange(false)} className="bg-yellow-400 text-black hover:bg-yellow-500">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">Join MagnatesEmpire</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
              className={errors.fullName ? "border-red-500" : ""}
            />
            {errors.fullName && <p className="text-sm text-red-500">{errors.fullName}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="stateProvince">State/Province</Label>
              <Input
                id="stateProvince"
                value={formData.stateProvince}
                onChange={(e) => setFormData(prev => ({ ...prev, stateProvince: e.target.value }))}
                className={errors.stateProvince ? "border-red-500" : ""}
              />
              {errors.stateProvince && <p className="text-sm text-red-500">{errors.stateProvince}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                value={formData.country}
                onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                className={errors.country ? "border-red-500" : ""}
              />
              {errors.country && <p className="text-sm text-red-500">{errors.country}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tool">Select Tool</Label>
            <Select onValueChange={handleToolChange}>
              <SelectTrigger className={errors.selectedTool ? "border-red-500" : ""}>
                <SelectValue placeholder="Select a tool" />
              </SelectTrigger>
              <SelectContent>
                {PREMIUM_TOOLS.map((tool) => (
                  <SelectItem key={tool} value={tool}>
                    {tool}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.selectedTool && <p className="text-sm text-red-500">{errors.selectedTool}</p>}
          </div>

          {showOtherTool && (
            <div className="space-y-2">
              <Label htmlFor="otherTool">Specify Tool</Label>
              <Input
                id="otherTool"
                value={formData.otherTool}
                onChange={(e) => setFormData(prev => ({ ...prev, otherTool: e.target.value }))}
                className={errors.otherTool ? "border-red-500" : ""}
              />
              {errors.otherTool && <p className="text-sm text-red-500">{errors.otherTool}</p>}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="captcha">Captcha: {captcha}</Label>
            <Input
              id="captcha"
              value={formData.captchaInput}
              onChange={(e) => setFormData(prev => ({ ...prev, captchaInput: e.target.value }))}
              className={errors.captcha ? "border-red-500" : ""}
              placeholder="Enter the code above"
            />
            {errors.captcha && <p className="text-sm text-red-500">{errors.captcha}</p>}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setCaptcha(generateCaptcha())}
              className="text-xs"
            >
              Refresh Captcha
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={formData.agreeToTerms}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))
              }
            />
            <label
              htmlFor="terms"
              className={`text-sm ${errors.terms ? "text-red-500" : "text-gray-400"}`}
            >
              I agree to the Terms & Conditions and Privacy Policy
            </label>
          </div>
          {errors.terms && <p className="text-sm text-red-500">{errors.terms}</p>}

          <Button
            type="submit"
            className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Submit"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}