"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from 'date-fns';
import { CalendarIcon, PlaneLanding, Hotel, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Hero() {
  const [departDate, setDepartDate] = useState<Date | undefined>(undefined);
  const [returnDate, setReturnDate] = useState<Date | undefined>(undefined);

  return (
    <section className="hero-gradient w-full">
      <div className="container-custom min-h-[600px] py-12 md:min-h-[700px] flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 animate-in slide-in-from-bottom duration-500">
            Explore The World<br />
            <span className="text-primary">Your Way</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-in fade-in delay-150 duration-500">
            Plan your perfect trip with our intuitive tools, exclusive deals, and personalized itineraries.
          </p>
          
          <div className="bg-card rounded-xl shadow-lg p-4 md:p-6 animate-in fade-in zoom-in delay-300 duration-500">
            <Tabs defaultValue="flights" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="flights" className="flex items-center">
                  <PlaneLanding className="mr-2 h-4 w-4" />
                  <span>Flights</span>
                </TabsTrigger>
                <TabsTrigger value="hotels" className="flex items-center">
                  <Hotel className="mr-2 h-4 w-4" />
                  <span>Hotels</span>
                </TabsTrigger>
                <TabsTrigger value="packages" className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>Packages</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="flights" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="space-y-2">
                    <label htmlFor="from" className="text-sm font-medium">From</label>
                    <Input 
                      id="from" 
                      placeholder="City or Airport"
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="to" className="text-sm font-medium">To</label>
                    <Input 
                      id="to"
                      placeholder="City or Airport"
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="flight-type" className="text-sm font-medium">Trip Type</label>
                    <Select defaultValue="roundtrip">
                      <SelectTrigger id="flight-type" className="h-11">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="roundtrip">Round Trip</SelectItem>
                        <SelectItem value="oneway">One Way</SelectItem>
                        <SelectItem value="multicity">Multi-City</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Depart</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal h-11",
                            !departDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {departDate ? format(departDate, "PPP") : <span>Select date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={departDate}
                          onSelect={setDepartDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Return</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal h-11",
                            !returnDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {returnDate ? format(returnDate, "PPP") : <span>Select date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={returnDate}
                          onSelect={setReturnDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="travelers" className="text-sm font-medium">Travelers</label>
                    <Select defaultValue="1">
                      <SelectTrigger id="travelers" className="h-11">
                        <SelectValue placeholder="Travelers" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Adult</SelectItem>
                        <SelectItem value="2">2 Adults</SelectItem>
                        <SelectItem value="3">3 Adults</SelectItem>
                        <SelectItem value="4">4 Adults</SelectItem>
                        <SelectItem value="family">2 Adults, 2 Children</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Button className="w-full md:w-auto px-8 h-11" size="lg">Search Flights</Button>
              </TabsContent>
              
              <TabsContent value="hotels" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="space-y-2 md:col-span-3">
                    <label htmlFor="destination" className="text-sm font-medium">Destination</label>
                    <Input 
                      id="destination" 
                      placeholder="City, Region or Specific Hotel"
                      className="h-11"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Check-in</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal h-11",
                            !departDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {departDate ? format(departDate, "PPP") : <span>Select date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={departDate}
                          onSelect={setDepartDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Check-out</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal h-11",
                            !returnDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {returnDate ? format(returnDate, "PPP") : <span>Select date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={returnDate}
                          onSelect={setReturnDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="rooms" className="text-sm font-medium">Rooms & Guests</label>
                    <Select defaultValue="1">
                      <SelectTrigger id="rooms" className="h-11">
                        <SelectValue placeholder="Rooms & Guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Room, 1 Guest</SelectItem>
                        <SelectItem value="2">1 Room, 2 Guests</SelectItem>
                        <SelectItem value="3">1 Room, 3 Guests</SelectItem>
                        <SelectItem value="family">2 Rooms, 4 Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Button className="w-full md:w-auto px-8 h-11" size="lg">Search Hotels</Button>
              </TabsContent>
              
              <TabsContent value="packages" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <label htmlFor="package-from" className="text-sm font-medium">From</label>
                    <Input 
                      id="package-from" 
                      placeholder="City or Airport"
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="package-to" className="text-sm font-medium">To</label>
                    <Input 
                      id="package-to"
                      placeholder="City or Airport"
                      className="h-11"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Depart</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal h-11",
                            !departDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {departDate ? format(departDate, "PPP") : <span>Select date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={departDate}
                          onSelect={setDepartDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Return</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal h-11",
                            !returnDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {returnDate ? format(returnDate, "PPP") : <span>Select date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={returnDate}
                          onSelect={setReturnDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="package-travelers" className="text-sm font-medium">Travelers</label>
                    <Select defaultValue="2">
                      <SelectTrigger id="package-travelers" className="h-11">
                        <SelectValue placeholder="Travelers" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Adult</SelectItem>
                        <SelectItem value="2">2 Adults</SelectItem>
                        <SelectItem value="3">3 Adults</SelectItem>
                        <SelectItem value="4">4 Adults</SelectItem>
                        <SelectItem value="family">2 Adults, 2 Children</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Button className="w-full md:w-auto px-8 h-11" size="lg">Search Packages</Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}