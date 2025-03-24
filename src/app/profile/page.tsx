"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { toast } from "sonner";

export default function ProfilePage() {
  const { currentUser, updateUserProfile } = useAuth();
  const [displayName, setDisplayName] = useState(currentUser?.displayName || "");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // If not logged in, redirect to home
  if (!currentUser) {
    router.push("/");
    return null;
  }

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!displayName.trim()) {
      toast.error("Please enter a display name");
      return;
    }

    setIsLoading(true);
    try {
      await updateUserProfile(displayName);
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="flex-1 bg-codaPurple pt-16 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-white mb-8">My Profile</h1>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your account information</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleUpdateProfile} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="displayName">Display Name</Label>
                    <Input
                      id="displayName"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      value={currentUser.email || ""}
                      disabled
                      className="bg-muted/50"
                    />
                    <p className="text-xs text-muted-foreground">Email cannot be changed</p>
                  </div>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Updating..." : "Update Profile"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Your account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm font-medium">Account ID</Label>
                  <p className="text-sm text-muted-foreground mt-1">{currentUser.uid}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Account Created</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    {currentUser.metadata.creationTime ? new Date(currentUser.metadata.creationTime).toLocaleDateString() : "Unknown"}
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Last Sign In</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    {currentUser.metadata.lastSignInTime ? new Date(currentUser.metadata.lastSignInTime).toLocaleDateString() : "Unknown"}
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Email Verified</Label>
                  <p className="text-sm mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs ${currentUser.emailVerified ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                      {currentUser.emailVerified ? "Verified" : "Not Verified"}
                    </span>
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => router.push("/orders")}>
                  View Orders
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
