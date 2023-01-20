export default interface IPricingPlan {
  plan: string;
  price: number;
  period: string;
  counts: Array<string>;
  allInclude: boolean;
  notInclude: Array<string>;
  isActive: boolean;
}

export const PRICING_PLANS: Array<IPricingPlan> = [
  {
    plan: "Free",
    price: 0,
    period: "Month",
    counts: ["25", "50", "1", "500"],
    allInclude: false,
    notInclude: ["1", "2", "3", "4", "5"],
    isActive: true,
  },
  {
    plan: "Starter",
    price: 49,
    period: "Month",
    counts: ["500", "1,000", "5", "2,500"],
    allInclude: false,
    notInclude: ["2", "5"],
    isActive: false,
  },
  {
    plan: "Growth",
    price: 99,
    period: "Month",
    counts: ["2,500", "5,000", "10", "5,000"],
    allInclude: true,
    notInclude: [],
    isActive: false,
  },
  {
    plan: "Pro",
    price: 199,
    period: "Month",
    counts: ["10,000", "20,000", "20", "7,500"],
    allInclude: true,
    notInclude: [],
    isActive: false,
  },
  {
    plan: "Business",
    price: 399,
    period: "Month",
    counts: ["30,000", "60,000", "40", "10,000"],
    allInclude: true,
    notInclude: [],
    isActive: false,
  },
];
