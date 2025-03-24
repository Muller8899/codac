import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GameCard from "@/components/GameCard";
import { popularGames, newGames, mobileGames, pcGames } from "@/data/games";
import { Button } from "@/components/ui/button";

interface Game {
  id: string;
  title: string;
  imageUrl: string;
  slug: string;
}

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return [
    { slug: 'popular' },
    { slug: 'new' },
    { slug: 'mobile-games' },
    { slug: 'pc-games' },
  ];
}

export function generateMetadata({ params }: Props): Metadata {
  const slug = params.slug;
  const categoryNames: Record<string, string> = {
    'popular': 'Popular Games',
    'new': 'New Games',
    'mobile-games': 'Mobile Games',
    'pc-games': 'PC Games and Vouchers',
  };

  return {
    title: `${categoryNames[slug] || 'Category'} - Codashop Taiwan`,
    description: `Browse ${categoryNames[slug] || 'games'} on Codashop Taiwan - the fastest and easiest way to purchase in-game credits.`,
  };
}

export default function CategoryPage({ params }: Props) {
  const slug = params.slug;

  // Map category slugs to their respective game data and titles
  const categoryMap: Record<string, { title: string; games: Game[] }> = {
    'popular': {
      title: 'POPULAR GAMES',
      games: popularGames
    },
    'new': {
      title: 'NEW GAMES',
      games: newGames
    },
    'mobile-games': {
      title: 'MOBILE GAMES (DIRECT TOP-UP)',
      games: mobileGames
    },
    'pc-games': {
      title: 'PC GAMES AND VOUCHERS',
      games: pcGames
    },
  };

  const category = categoryMap[slug];

  if (!category) {
    return (
      <>
        <Header />
        <main className="flex-1 bg-codaPurple pt-16 py-12 min-h-screen">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6 text-3xl font-bold text-white">Category Not Found</h1>
            <p className="mb-8 text-white">We couldn't find the category you're looking for.</p>
            <Link href="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="flex-1 bg-codaPurple pt-16 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="mb-8 text-3xl font-bold text-white">{category.title}</h1>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {category.games.map((game) => (
              <GameCard
                key={game.id}
                title={game.title}
                imageUrl={game.imageUrl}
                slug={game.slug}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
