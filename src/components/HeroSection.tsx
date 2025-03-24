"use client";

import ImageWithFallback from "@/components/ImageWithFallback";

export default function HeroSection() {
  return (
    <div className="relative w-full bg-codaPurple py-2 sm:py-4">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-lg sm:rounded-xl">
          <ImageWithFallback
            src="https://ext.same-assets.com/9712562/156151726.jpeg"
            alt="Codashop Promo Banner"
            width={730}
            height={280}
            className="w-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
