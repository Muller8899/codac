"use client";

import GameCard from "@/components/GameCard";
import Link from "next/link";

interface GameSectionProps {
  title: string;
  games: {
    id: string;
    title: string;
    imageUrl: string;
    slug: string;
  }[];
  hasViewAll?: boolean;
  viewAllLink?: string;
}

export default function GameSection({ title, games, hasViewAll = true, viewAllLink = "#" }: GameSectionProps) {
  return (
    <div className="w-full py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="mb-4 md:mb-6 flex flex-col md:flex-row md:items-center justify-between gap-2">
          <h2 className="section-title text-base md:text-2xl break-words">{title}</h2>
          {hasViewAll && (
            <Link
              href={viewAllLink}
              className="text-sm md:text-base text-primary hover:underline whitespace-nowrap"
            >
              查看更多 &raquo;
            </Link>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {games.map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              imageUrl={game.imageUrl}
              slug={game.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
