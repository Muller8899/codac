import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import GameSection from "@/components/GameSection";
import { popularGames, newGames, mobileGames, pcGames } from "@/data/games";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16 min-h-screen">
        <HeroSection />

        <div className="bg-codaPurple py-4">
          <div className="container mx-auto px-4">
            <h1 className="section-title mb-6 text-center text-3xl uppercase text-white">
              WEB STORE
            </h1>
          </div>
        </div>

        <GameSection
          title="POPULAR"
          games={popularGames}
          viewAllLink="/category/popular"
        />

        <GameSection
          title="NEW"
          games={newGames}
          viewAllLink="/category/new"
        />

        <GameSection
          title="MOBILE GAMES (DIRECT TOP-UP)"
          games={mobileGames}
          viewAllLink="/category/mobile-games"
        />

        <GameSection
          title="PC GAMES AND VOUCHERS"
          games={pcGames}
          viewAllLink="/category/pc-games"
        />
      </main>
      <Footer />
    </>
  );
}
