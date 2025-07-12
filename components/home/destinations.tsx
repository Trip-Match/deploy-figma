import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const destinations = [
  {
    name: "Paris",
    country: "France",
    image: "https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Experience the romance of the Eiffel Tower and charming streets.",
    price: "499",
    tag: "Popular"
  },
  {
    name: "Bali",
    country: "Indonesia",
    image: "https://images.pexels.com/photos/1694621/pexels-photo-1694621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Discover lush landscapes, beautiful beaches, and rich culture.",
    price: "789",
    tag: "Trending"
  },
  {
    name: "New York",
    country: "USA",
    image: "https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "The city that never sleeps, with iconic landmarks and energy.",
    price: "599",
    tag: "Popular"
  },
  {
    name: "Tokyo",
    country: "Japan",
    image: "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Futuristic cityscape with ancient temples and unique culture.",
    price: "899",
    tag: "Featured"
  }
];

export default function Destinations() {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our curated selection of top destinations around the world.
            </p>
          </div>
          <Link href="/destinations">
            <Button variant="ghost" className="mt-4 md:mt-0 group">
              View all destinations
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <Link key={index} href={`/destinations/${destination.name.toLowerCase()}`}>
              <Card className="overflow-hidden card-hover group border-border/40 h-full">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                    {destination.tag}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-serif text-xl font-bold">{destination.name}</h3>
                      <p className="text-sm text-muted-foreground">{destination.country}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">From</p>
                      <p className="text-lg font-bold text-primary">${destination.price}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{destination.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}