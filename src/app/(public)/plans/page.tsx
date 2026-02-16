import PlanCardWrapper from "@/components/PlanCardWrapper";
import { Plan } from "@/components/PlanCard";

const dummyPlans: Plan[] = [
  {
    id: 1,
    name: "100MBPS",
    tier: null,
    speed: "100",
    price1: "589",
    price3: "1766",
    price6: "3357",
    price12: "6360",
    ottLogos: [
      "https://upload.wikimedia.org/wikipedia/commons/1/13/Ullu_Logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/1/16/FanCode_Logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Zee5_Logo_2018-2025.svg/500px-Zee5_Logo_2018-2025.svg.png"
    ]
  },
  {
    id: 2,
    name: "150MBPS",
    tier: null,
    speed: "150",
    price1: "707",
    price3: "2120",
    price6: "4030",
    price12: "7635",
    ottLogos: [
      "https://upload.wikimedia.org/wikipedia/commons/1/13/Ullu_Logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/1/16/FanCode_Logo.png"
    ]
  },
  {
    id: 3,
    name: "200MBPS",
    tier: null,
    speed: "200",
    price1: "943",
    price3: "2828",
    price6: "5374",
    price12: "10182",
    ottLogos: [
      "https://upload.wikimedia.org/wikipedia/commons/1/16/FanCode_Logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Lionsgate_logo.png"
    ]
  },
  {
    id: 4,
    name: "200MBPS",
    tier: "Silver",
    speed: "200",
    price1: "1061",
    price3: "3182",
    price6: "6082",
    price12: "11598",
    ottLogos: [
      "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/jiohotstar.png",
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Lionsgate_logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/1/16/FanCode_Logo.png"
    ]
  },
  {
    id: 5,
    name: "300MBPS",
    tier: null,
    speed: "300",
    price1: "1179",
    price3: "3536",
    price6: "6719",
    price12: "12732",
    ottLogos: [
      "https://upload.wikimedia.org/wikipedia/commons/f/f7/SonyLIV_2020.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Zee5_Logo_2018-2025.svg/500px-Zee5_Logo_2018-2025.svg.png"
    ]
  },
  {
    id: 6,
    name: "300MBPS",
    tier: "Gold",
    speed: "300",
    price1: "1238",
    price3: "3713",
    price6: "6896",
    price12: "13794",
    ottLogos: [
      "https://upload.wikimedia.org/wikipedia/commons/f/f7/SonyLIV_2020.png",
      "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/jiohotstar.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Zee5_Logo_2018-2025.svg/500px-Zee5_Logo_2018-2025.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/1/16/FanCode_Logo.png"
    ]
  },
  {
    id: 7,
    name: "500MBPS",
    tier: "Platinum",
    speed: "500",
    price1: "1887",
    price3: "5660",
    price6: "10790",
    price12: "19694",
    ottLogos: [
      "https://upload.wikimedia.org/wikipedia/commons/7/72/Amazon_Prime_logo_%282022%29.svg",
      "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/jiohotstar.png",
      "https://upload.wikimedia.org/wikipedia/commons/f/f7/SonyLIV_2020.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Zee5_Logo_2018-2025.svg/500px-Zee5_Logo_2018-2025.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Lionsgate_logo.png",
    ]
  }
];

export default function PlansPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-black uppercase tracking-tighter">
            Choose Your <span className="text-[#ff8c00]">Plan</span>
          </h1>
          <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.3em] mt-2">
            Superfast Fiber with Premium Entertainment Bundles
          </p>
        </div>

        {/* Grid Layout: 3 columns on desktop, 1-2 on mobile/tablet */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 justify-items-center">
          {dummyPlans.map((plan) => (
            <PlanCardWrapper key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-20 text-center">
            <p className="text-gray-400 text-[10px] font-medium uppercase tracking-widest">
                * Prices shown include 18% GST. Installation charges may apply based on location.
            </p>
        </div>
      </div>
    </div>
  );
}