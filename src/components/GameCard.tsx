"use client";

import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";

interface GameCardProps {
  title: string;
  imageUrl: string;
  slug: string;
}

export default function GameCard({ title, imageUrl, slug }: GameCardProps) {
  return (
    <Link href={`/game/${slug}`} className="game-card block">
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h3 className="mt-2 text-center text-xs sm:text-sm md:text-sm font-medium text-white line-clamp-2 h-10">
        {title}
      </h3>
    </Link>
  );
}
