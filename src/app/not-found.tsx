import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-codaPurple pt-16 py-12 min-h-screen">
        <div className="container mx-auto flex flex-col items-center justify-center px-4 text-center">
          <div className="mb-8 text-8xl font-bold text-white">哎呀！</div>
          <h1 className="mb-4 text-2xl font-bold text-white">此頁面可能不存在或我們發生一點技術問題</h1>
          <Link href="/">
            <Button size="lg" className="mt-4">
              回到頁面
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
