import Image from 'next/image';

interface BrandCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
  delay?: string;
}

export default function BrandCard({ title, description, image, imageAlt, link, delay = '0.1s' }: BrandCardProps) {
  return (
    <div 
      className="group bg-white rounded-2xl p-8 lg:p-10 h-full card-hover shadow-lg border border-gray-100 hover:border-primary/20 overflow-hidden relative"
      style={{ animationDelay: delay }}
    >
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <h3 className="text-3xl font-bold mb-6 text-dark group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="mb-6 bg-light rounded-xl p-6 flex items-center justify-center">
          <Image
            src={image}
            alt={imageAlt}
            width={200}
            height={100}
            className="object-contain transition-transform duration-500 group-hover:scale-110"
            style={{ maxHeight: '100px' }}
          />
        </div>
        <p className="text-gray-600 mb-8 leading-relaxed">
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-primary text-white rounded-full py-3 px-8 hover:bg-primary-dark transition-all duration-300 font-semibold group-hover:shadow-lg"
        >
          Learn More
          <i className="fa fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
        </a>
      </div>
    </div>
  );
}
