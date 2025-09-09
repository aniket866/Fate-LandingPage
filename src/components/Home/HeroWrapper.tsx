"use client";
import React from "react";
import { Vortex } from "../ui/vortex";
import { useTheme } from "next-themes";

type HeroWrapperProps = {
  children: React.ReactNode;
};

const HeroWrapper: React.FC<HeroWrapperProps> = ({ children }) => {
  const { resolvedTheme } = useTheme();

  if (!resolvedTheme) return null;

  const commonClasses =
    "flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full";

  return (
    <div
      className={`relative w-full h-screen overflow-hidden flex -mt-10 transition-colors duration-300 ${
        resolvedTheme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      {resolvedTheme === "dark" ? (
        <Vortex
          backgroundColor="#000000"
          rangeY={200}
          className={commonClasses}
          colorPalette="grey-yellow"
        >
          {children}
        </Vortex>
      ) : (
        <div className={commonClasses}>{children}</div>
      )}
    </div>
  );
};

export default HeroWrapper;
