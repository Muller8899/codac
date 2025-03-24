"use client";

import { useEffect } from "react";
import { Toaster } from "sonner";
import { AuthProvider } from "@/contexts/AuthContext";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <body className="antialiased" suppressHydrationWarning>
      <AuthProvider>
        {children}
        <Toaster position="top-center" richColors />
      </AuthProvider>
    </body>
  );
}
