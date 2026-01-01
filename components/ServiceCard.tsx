import BaseImage from './BaseImage';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

export default function ServiceCard({
  number,
  title,
  description,
  features,
  image,
  imageAlt,
  reverse = false
}: ServiceCardProps) {
  return (
    <div className={`mb-20 last:mb-0 ${reverse ? 'lg:flex-row-reverse' : ''} lg:flex gap-12 items-center`}>
      <div className={`w-full lg:w-1/2 ${reverse ? 'lg:order-2' : ''}`}>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
          <BaseImage
            src={image}
            alt={imageAlt}
            width={600}
            height={400}
            className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
      <div className={`w-full lg:w-1/2 mt-8 lg:mt-0 ${reverse ? 'lg:order-1' : ''}`}>
        <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-100 card-hover">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center text-white text-2xl font-bold mr-4">
              {number}
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-dark mb-2">{title}</h3>
              <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>
          </div>
          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            {description}
          </p>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center group">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary transition-colors">
                  <i className="fa fa-check text-primary text-sm"></i>
                </div>
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
