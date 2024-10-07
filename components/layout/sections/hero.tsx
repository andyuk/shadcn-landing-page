"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h2 className="text-2xl md:text-4xl font-semibold">
              Software & Technologies for the Construction Industry
            </h2>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            Discover a comprehensive directory of construction technology products for main contractors and architects.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4 flex justify-center">
            <Button asChild>
              <Link href="#explore-software-categories">Browse Software</Link>
            </Button>

            <Button asChild variant="secondary">
              <Link href="#share-software-stack">Share Your Software Stack</Link>
            </Button>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};