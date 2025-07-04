import { Truck, Gift, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: <Truck className="h-8 w-8 text-yellow-500" />,
    title: "Free Shipping",
    description: "Free shipping on orders over $75",
  },
  {
    icon: <Gift className="h-8 w-8 text-yellow-500" />,
    title: "Luxury Packaging",
    description: "Beautiful gift packaging included",
  },
  {
    icon: <BadgeCheck className="h-8 w-8 text-yellow-500" />,
    title: "Premium Quality",
    description: "Only the finest ingredients used",
  },
];

const FeatureIcons = () => {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {features.map((item, idx) => (
          <div key={idx} className="space-y-3">
            <div className="flex justify-center">{item.icon}</div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureIcons;
