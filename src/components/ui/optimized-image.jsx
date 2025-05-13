"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  sizes = "(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 50vw",
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={85}
        priority={priority}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        className={`
          duration-700 ease-in-out
          ${
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }
          ${className}
        `}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
}
