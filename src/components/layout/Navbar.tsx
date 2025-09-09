"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logoWhite from "../../../public/logo-white.png";
import { useTheme } from "next-themes";
import { ModeToggle } from "../darkModeToggle";

const Navbar = () => {
  const { resolvedTheme } = useTheme();
  const [isThemeReady, setIsThemeReady] = useState(false);

  useEffect(() => {
    if (resolvedTheme) {
      setIsThemeReady(true);
    }
  }, [resolvedTheme]);

  if (!isThemeReady) return null;

  return (
    <>
      <header className="justify-between p-2 sm:p-3 bg-black sticky top-0 z-50">
        <div className="mx-auto flex items-center justify-between relative px-3 sm:px-5 bg-black">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="text-center">
                <Image
                  src={logoWhite}
                  alt="Fate Protocol"
                  width={40}
                  height={40}
                  className="sm:w-[50px] sm:h-[50px] p-2"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Wallet & Theme */}
          <div className=" min-[970px]:flex items-center space-x-3 min-[900px]:space-x-4 flex-shrink-0 min-w-[200px] justify-end">
            <ModeToggle />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
