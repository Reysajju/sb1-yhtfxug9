export const SUBSCRIPTION_PLANS = [
  {
    id: "basic",
    name: "Basic",
    price: 49.99,
    description: "Perfect for individuals starting their journey",
    features: [
      "Up to 10 premium tools",
      "Basic support",
      "Monthly billing",
      "Cancel anytime",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 89.99,
    description: "Ideal for growing businesses",
    features: [
      "Up to 20 premium tools",
      "Priority support",
      "Monthly/Annual billing",
      "Team management",
    ],
  },
  {
    id: "ultimate",
    name: "Ultimate",
    price: 149.99,
    description: "For enterprises requiring maximum flexibility",
    features: [
      "Up to 30 premium tools",
      "24/7 dedicated support",
      "Custom billing options",
      "API access",
    ],
  },
] as const;

export type PlanId = typeof SUBSCRIPTION_PLANS[number]["id"];