"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function HeaderNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navlinks = [
    { label: "Accueil", href: "/" },
    { label: "A propos", href: "#about" },
    { label: "Se connecter", href: "/login" },
  ];
  return (
    <>
      <header className="w-full px-10 py-4 border-b bg-white/80 backdrop-blur-sm fixed top-0 left-0 z-50">
        <nav className="flex items-center justify-between">
          {/* logo */}
          <div className="text-2xl font-bold">Campus Master</div>
          <ul className="flex items-center space-x-4 max-md:hidden">
            {/* Desktop menu */}
            {navlinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
            <Button>
              <Link href={"/signup"}>S&apos;inscrire</Link>
            </Button>
          </ul>
          {/* menu button */}
          <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Button variant={"ghost"}>{isMenuOpen ? <X /> : <Menu />}</Button>
          </div>
        </nav>
      </header>
      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="md:hidden fixed top-16 left-0 w-full bg-white shadow z-40">
          <ul className="flex flex-col items-center space-y-4 p-4">
            {navlinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
            <Button>
              <Link href={"/signup"}>S&apos;inscrire</Link>
            </Button>
          </ul>
        </nav>
      )}
    </>
  );
}
