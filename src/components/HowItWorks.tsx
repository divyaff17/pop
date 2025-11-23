import { Shirt, Clock, RotateCcw } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Shirt,
      title: "1. Pick Your Look",
      description: "Browse endless styles for any occasion.",
    },
    {
      icon: Clock,
      title: "2. Delivered in 60 Mins",
      description: "Your outfit arrives, ready to wear.",
    },
    {
      icon: RotateCcw,
      title: "3. Wear & Return",
      description: "Enjoy the moment. We handle the rest.",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-3 flex-1"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <Icon className="w-12 h-12 text-[#16a34a]" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-[#3D3D3D]">{step.title}</h3>
            <p className="text-sm text-[#707070]">{step.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HowItWorks;
