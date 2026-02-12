"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function HeaderNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navlinks = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "#about" },
  ];

  return (
    <>
      <header className="w-full px-4 md:px-10 py-4 border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-sm">
        <nav
          className="flex items-center justify-between max-w-7xl mx-auto"
          role="navigation"
          aria-label="Navigation principale"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
            aria-label="Campus Master - Accueil"
          >
            <span>Campus Master</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-1">
            {navlinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-4 py-2 rounded-md hover:bg-secondary transition-colors text-foreground font-medium text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              {/* Auth Buttons */}
              <div className="hidden md:flex items-center gap-3">
                <Button variant="outline" asChild>
                  <Link href="/login">Connexion</Link>
                </Button>
                <Button asChild>
                  <Link href="/signup">Inscription</Link>
                </Button>
              </div>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-md transition-colors"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav
          className="md:hidden fixed top-16 left-0 right-0 bg-white dark:bg-slate-900 shadow-lg z-40 animate-in slide-in-from-top-2"
          role="navigation"
          aria-label="Menu mobile"
        >
          <ul className="flex flex-col p-4 space-y-2">
            {navlinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-4 py-3 rounded-md hover:bg-secondary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t">
              <Button
                variant="outline"
                asChild
                className="w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/login">Connexion</Link>
              </Button>
              <Button
                asChild
                className="w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/signup">Inscription</Link>
              </Button>
            </div>
          </ul>
        </nav>
      )}
    </>
  );
}
