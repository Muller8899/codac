"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function WalletPage() {
  const { currentUser } = useAuth();
  const router = useRouter();

  // If not logged in, redirect to home
  if (!currentUser) {
    router.push("/");
    return null;
  }

  return (
    <>
      <Header />
      <main className="flex-1 bg-codaPurple pt-16 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-3xl font-bold text-white">My Wallet</h1>
            <Button variant="outline" onClick={() => router.push("/profile")}>
              Back to Profile
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-gradient-to-r from-primary/80 to-primary">
              <CardHeader>
                <CardTitle className="text-white">Codashop Balance</CardTitle>
                <CardDescription className="text-white/80">Available balance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mt-4 text-center">
                  <span className="text-4xl font-bold text-white">NT$ 0.00</span>
                </div>
                <div className="mt-6 flex justify-center">
                  <Button variant="secondary" className="mr-2">Add Funds</Button>
                  <Button variant="outline" className="bg-white/10 text-white">
                    Redeem Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Manage your payment options</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md bg-secondary/20 p-6 text-center">
                  <p className="text-gray-300 mb-4">No payment methods added yet</p>
                  <Button variant="outline">Add Payment Method</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md bg-secondary/20 p-6 text-center">
                <p className="text-gray-300">No transaction history available</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
