"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import LoginModal from "@/components/LoginModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

export default function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Get auth state from context
  const { currentUser, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Successfully logged out!");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to log out. Please try again.");
    }
  };

  const menuItems = [
    { label: "首頁", href: "/" },
    { label: "熱門遊戲", href: "/category/popular" },
    { label: "新遊戲", href: "/category/new" },
    { label: "手機遊戲", href: "/category/mobile-games" },
    { label: "電腦遊戲", href: "/category/pc-games" },
    { label: "支援", href: "/support" },
  ];

  return (
    <header className={`fixed top-0 z-50 w-full bg-codaPurple transition-all ${scrolled ? "shadow-md" : ""}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center">
            <Image
              src="https://ext.same-assets.com/9712562/2466100788.png"
              alt="Codashop Logo"
              width={120}
              height={30}
              className="h-8 w-auto"
            />
          </Link>
          <span className="hidden text-sm font-light italic text-white md:block">
            購買遊戲代幣最簡單快捷的方式
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-6 md:flex">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-gray-200 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="搜尋..."
              className="h-8 w-32 rounded-full bg-secondary/50 px-3 text-sm text-white placeholder-white/70 focus:outline-none md:w-40"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </span>
          </div>

          {/* Authentication UI */}
          {currentUser ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-8 rounded-full border-primary/70 text-white hover:bg-primary/20">
                  {currentUser.displayName?.split(' ')[0] || 'User'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/profile" className="w-full">My Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/orders" className="w-full">My Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/wallet" className="w-full">My Wallet</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              variant="outline"
              className="h-8 rounded-full border-primary/70 text-white hover:bg-primary/20 md:block hidden"
              onClick={() => setIsLoginModalOpen(true)}
            >
              登入
            </Button>
          )}

          {/* Mobile Menu Button */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`bg-codaPurple px-4 py-4 shadow-lg md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 invisible overflow-hidden"
        }`}
      >
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="搜尋..."
            className="h-10 w-full rounded-full bg-secondary/50 px-4 text-sm text-white placeholder-white/70 focus:outline-none"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </span>
        </div>

        <nav className="flex flex-col space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-medium text-white transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {currentUser ? (
            <>
              <Link
                href="/profile"
                className="text-lg font-medium text-white transition-colors hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                My Profile
              </Link>
              <Button
                className="mt-2 w-full"
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              className="mt-2 w-full"
              onClick={() => {
                setIsLoginModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
            >
              登入
            </Button>
          )}
        </nav>
      </div>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </header>
  );
}
