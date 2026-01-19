import React from 'react'

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 transition-all duration-300 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-black rounded-[1px]" />
          </div>
          <span className="text-sm font-medium tracking-tight text-white/90">
            OneMinute Support
          </span>
        </Link>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-light text-zinc-400">
          <Link href="#features" className="hover:text-white transition-colors">
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="hover:text-white transition-colors"
          >
            Integration
          </Link>
          <Link href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/api/auth"
            className="text-xs font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/api/auth"
            className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors"
          >
            Get started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
