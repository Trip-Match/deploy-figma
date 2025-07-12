"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, PlaneLanding, Hotel, User, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-200",
      isScrolled 
        ? "bg-background/95 backdrop-blur-md shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="container-custom py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <PlaneLanding className="h-6 w-6 text-primary" />
          <span className="font-serif text-xl font-bold">Voyagr</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/flights" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    <PlaneLanding className="mr-2 h-4 w-4" />
                    <span>Flights</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/hotels" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    <Hotel className="mr-2 h-4 w-4" />
                    <span>Hotels</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/destinations" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>Destinations</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <div className="hidden md:block">
            <Link href="/signin">
              <Button variant="outline" size="sm" className="mr-2">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="accent" size="sm">
                Sign Up
              </Button>
            </Link>
          </div>
          
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/flights" className="flex items-center py-2 px-3 rounded-md hover:bg-accent">
                  <PlaneLanding className="mr-2 h-5 w-5" />
                  <span>Flights</span>
                </Link>
                <Link href="/hotels" className="flex items-center py-2 px-3 rounded-md hover:bg-accent">
                  <Hotel className="mr-2 h-5 w-5" />
                  <span>Hotels</span>
                </Link>
                <Link href="/destinations" className="flex items-center py-2 px-3 rounded-md hover:bg-accent">
                  <MapPin className="mr-2 h-5 w-5" />
                  <span>Destinations</span>
                </Link>
                <Link href="/signin" className="flex items-center py-2 px-3 rounded-md hover:bg-accent">
                  <User className="mr-2 h-5 w-5" />
                  <span>Sign In</span>
                </Link>
                <Link href="/signup">
                  <Button variant="accent" className="w-full mt-2">
                    Sign Up
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}