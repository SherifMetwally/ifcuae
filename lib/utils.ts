// Utility function to get the base path for GitHub Pages
export function getBasePath(): string {
  // This will be set during build time
  return process.env.NEXT_PUBLIC_BASE_PATH || '/ifcuae';
}

// Helper to prepend base path to image URLs
export function withBasePath(path: string): string {
  const basePath = getBasePath();
  // Remove leading slash from path if present, basePath already has it
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}/${cleanPath}`;
}

