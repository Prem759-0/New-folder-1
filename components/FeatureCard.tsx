import { LucideIcon } from "lucide-react";

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="w-full max-w-sm p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
      {/* Icon container */}
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 mx-auto mb-4">
        <Icon className="w-6 h-6 text-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-black mb-2">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

export default FeatureCard;
