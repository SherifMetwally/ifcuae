import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: string;
}

export default function FeatureCard({ icon, title, description, delay = '0.1s' }: FeatureCardProps) {
  return (
    <div 
      className="group bg-white rounded-2xl p-8 h-full card-hover shadow-lg border border-gray-100 hover:border-primary/20"
      style={{ animationDelay: delay }}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-dark group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-500"></div>
      </div>
    </div>
  );
}
