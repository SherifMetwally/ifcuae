import Image from 'next/image';
import { withBasePath } from '@/lib/utils';

interface BaseImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  style?: React.CSSProperties;
  [key: string]: any;
}

export default function BaseImage({ src, ...props }: BaseImageProps) {
  // If src starts with http or /, use it as is (external or absolute)
  // Otherwise, prepend basePath for relative paths
  const imageSrc = src.startsWith('http') || src.startsWith('//') 
    ? src 
    : src.startsWith('/') 
      ? withBasePath(src.slice(1)) // Remove leading slash, add basePath
      : withBasePath(src);
  
  return <Image src={imageSrc} {...props} />;
}

