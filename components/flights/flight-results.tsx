import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Clock, ArrowRight, PlaneTakeoff, PlaneLanding, Luggage, Wifi, Utensils } from 'lucide-react';

const flights = [
  {
    id: 1,
    airline: "Delta Air Lines",
    logo: "https://images.pexels.com/photos/11507601/pexels-photo-11507601.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=2",
    flight: "DL1234",
    departure: {
      airport: "JFK",
      city: "New York",
      time: "8:30 AM",
      date: "Mon, Oct 15"
    },
    arrival: {
      airport: "LAX",
      city: "Los Angeles",
      time: "11:45 AM",
      date: "Mon, Oct 15"
    },
    duration: "6h 15m",
    stops: 0,
    price: 349,
    amenities: ["wifi", "meal", "usb"],
    class: "Economy",
    bestDeal: true
  },
  {
    id: 2,
    airline: "United Airlines",
    logo: "https://images.pexels.com/photos/11507601/pexels-photo-11507601.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=2",
    flight: "UA589",
    departure: {
      airport: "JFK",
      city: "New York",
      time: "10:15 AM",
      date: "Mon, Oct 15"
    },
    arrival: {
      airport: "LAX",
      city: "Los Angeles",
      time: "1:50 PM",
      date: "Mon, Oct 15"
    },
    duration: "6h 35m",
    stops: 1,
    stopDetails: "ORD Chicago (1h 15m)",
    price: 298,
    amenities: ["wifi", "usb"],
    class: "Economy"
  },
  {
    id: 3,
    airline: "American Airlines",
    logo: "https://images.pexels.com/photos/11507601/pexels-photo-11507601.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=2",
    flight: "AA2088",
    departure: {
      airport: "JFK",
      city: "New York",
      time: "7:00 AM",
      date: "Mon, Oct 15"
    },
    arrival: {
      airport: "LAX",
      city: "Los Angeles",
      time: "10:30 AM",
      date: "Mon, Oct 15"
    },
    duration: "6h 30m",
    stops: 0,
    price: 375,
    amenities: ["wifi", "meal", "usb", "entertainment"],
    class: "Economy"
  }
];

export default function FlightResults() {
  return (
    <div className="space-y-4">
      {flights.map((flight) => (
        <Card key={flight.id} className={`border-border/40 hover:border-primary/50 transition-all duration-300 ${flight.bestDeal ? 'border-l-4 border-l-accent' : ''}`}>
          <CardContent className="p-0">
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 relative mr-3 rounded-full overflow-hidden bg-muted">
                    <Image
                      src={flight.logo}
                      alt={flight.airline}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{flight.airline}</p>
                    <p className="text-xs text-muted-foreground">{flight.flight} • {flight.class}</p>
                  </div>
                </div>
                {flight.bestDeal && (
                  <Badge variant="outline" className="bg-accent/10 text-accent-foreground border-accent/30">
                    Best Deal
                  </Badge>
                )}
              </div>
              
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-3">
                  <div className="space-y-1">
                    <p className="text-xl font-bold">{flight.departure.time}</p>
                    <p className="text-sm font-medium">{flight.departure.airport}</p>
                    <p className="text-xs text-muted-foreground">{flight.departure.city}</p>
                    <p className="text-xs text-muted-foreground">{flight.departure.date}</p>
                  </div>
                </div>
                
                <div className="col-span-6 flex flex-col items-center">
                  <div className="text-xs text-muted-foreground flex items-center mb-2">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{flight.duration}</span>
                  </div>
                  
                  <div className="relative w-full flex items-center">
                    <div className="h-0.5 bg-border flex-grow"></div>
                    <PlaneTakeoff className="h-4 w-4 text-muted-foreground absolute left-0 -translate-y-1/2" />
                    {flight.stops === 0 ? (
                      <ArrowRight className="h-4 w-4 text-muted-foreground absolute left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    ) : (
                      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-muted-foreground rounded-full"></div>
                    )}
                    <PlaneLanding className="h-4 w-4 text-muted-foreground absolute right-0 -translate-y-1/2" />
                  </div>
                  
                  {flight.stops === 0 ? (
                    <p className="text-xs font-medium mt-2">Direct Flight</p>
                  ) : (
                    <p className="text-xs text-muted-foreground mt-2">{flight.stops} Stop • {flight.stopDetails}</p>
                  )}
                </div>
                
                <div className="col-span-3 text-right">
                  <div className="space-y-1">
                    <p className="text-xl font-bold">{flight.arrival.time}</p>
                    <p className="text-sm font-medium">{flight.arrival.airport}</p>
                    <p className="text-xs text-muted-foreground">{flight.arrival.city}</p>
                    <p className="text-xs text-muted-foreground">{flight.arrival.date}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div className="p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                {flight.amenities.includes("wifi") && (
                  <div className="flex flex-col items-center" title="WiFi Available">
                    <Wifi className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground mt-1">WiFi</span>
                  </div>
                )}
                {flight.amenities.includes("usb") && (
                  <div className="flex flex-col items-center" title="USB Power">
                    <Luggage className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground mt-1">USB</span>
                  </div>
                )}
                {flight.amenities.includes("meal") && (
                  <div className="flex flex-col items-center" title="Meal Service">
                    <Utensils className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground mt-1">Meal</span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm font-medium">Total Price</p>
                  <p className="text-2xl font-bold">${flight.price}</p>
                  <p className="text-xs text-muted-foreground">per person</p>
                </div>
                <Button className="px-6">Select</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}