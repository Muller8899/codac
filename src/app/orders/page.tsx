"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OrdersPage() {
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
            <h1 className="text-3xl font-bold text-white">My Orders</h1>
            <Button variant="outline" onClick={() => router.push("/profile")}>
              Back to Profile
            </Button>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Order History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md bg-secondary/20 p-8 text-center">
                <h2 className="text-xl font-medium text-white mb-2">No Orders Yet</h2>
                <p className="text-gray-300 mb-4">You haven't made any purchases yet.</p>
                <Button onClick={() => router.push("/")}>Browse Games</Button>
              </div>
            </CardContent>
          </Card>

          <div className="text-center text-sm text-gray-400 mt-8">
            <p>Need help with an order? Contact our customer support team at support@codashop.tw</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
