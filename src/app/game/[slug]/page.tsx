import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageWithFallback from "@/components/ImageWithFallback";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { popularGames, newGames, mobileGames, pcGames } from "@/data/games";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  const allGames = [...popularGames, ...newGames, ...mobileGames, ...pcGames];
  return allGames.map((game) => ({
    slug: game.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const slug = params.slug;
  const allGames = [...popularGames, ...newGames, ...mobileGames, ...pcGames];
  const game = allGames.find(g => g.slug === slug);

  if (!game) {
    return {
      title: "Game Not Found - Codashop Taiwan",
      description: "The game you are looking for could not be found on Codashop Taiwan.",
    };
  }

  return {
    title: `${game.title} - Codashop Taiwan`,
    description: `Top up your ${game.title} account with Codashop. Fast, safe, and secure way to buy game credits.`,
  };
}

export default function GameDetailPage({ params }: Props) {
  const slug = params.slug;

  // Find game data from all game categories
  const allGames = [...popularGames, ...newGames, ...mobileGames, ...pcGames];
  const game = allGames.find(g => g.slug === slug);

  if (!game) {
    return (
      <>
        <Header />
        <main className="flex-1 bg-codaPurple pt-16 py-12 min-h-screen">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6 text-3xl font-bold text-white">Game Not Found</h1>
            <p className="mb-8 text-white">We couldn't find the game you're looking for.</p>
            <Link href="/">
              <Button>
                Back to Home
              </Button>
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
      <main className="flex-1 bg-codaPurple pt-16 py-12 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col items-center md:flex-row md:items-start md:space-x-8">
            <div className="mb-6 w-full max-w-xs md:mb-0">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <ImageWithFallback
                  src={game.imageUrl}
                  alt={game.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="mb-4 text-3xl font-bold text-white">{game.title}</h1>
              <p className="mb-6 text-gray-300">
                Use Codashop to buy diamonds, coins, or game credits for {game.title}. We offer the fastest and easiest way to make in-app purchases without a credit card or Play Store / App Store. Choose from a variety of secure payment options.
              </p>

              <Card className="bg-secondary/20 text-white">
                <CardHeader>
                  <CardTitle>Select Amount</CardTitle>
                  <CardDescription className="text-gray-300">Choose the amount you want to top up</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-md border border-primary/30 bg-secondary/30 p-4 text-center hover:border-primary">
                      <div className="text-lg font-bold">60 Coins</div>
                      <div className="text-gray-300">NT$ 60</div>
                    </div>
                    <div className="rounded-md border border-primary/30 bg-secondary/30 p-4 text-center hover:border-primary">
                      <div className="text-lg font-bold">300 Coins</div>
                      <div className="text-gray-300">NT$ 300</div>
                    </div>
                    <div className="rounded-md border border-primary/30 bg-secondary/30 p-4 text-center hover:border-primary">
                      <div className="text-lg font-bold">600 Coins</div>
                      <div className="text-gray-300">NT$ 600</div>
                    </div>
                    <div className="rounded-md border border-primary/30 bg-secondary/30 p-4 text-center hover:border-primary">
                      <div className="text-lg font-bold">1500 Coins</div>
                      <div className="text-gray-300">NT$ 1500</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Continue</Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <h2 className="mb-6 text-2xl font-bold text-white">How to Top Up {game.title}</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">1</div>
                <h3 className="mb-2 text-lg font-bold text-white">Enter Game Account</h3>
                <p className="text-gray-300">Enter your user ID and select the server if applicable</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">2</div>
                <h3 className="mb-2 text-lg font-bold text-white">Select Amount</h3>
                <p className="text-gray-300">Choose from various denominations to fit your budget</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">3</div>
                <h3 className="mb-2 text-lg font-bold text-white">Complete Payment</h3>
                <p className="text-gray-300">Choose your payment method and receive your credits instantly</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
