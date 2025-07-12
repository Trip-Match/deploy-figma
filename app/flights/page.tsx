"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from 'date-fns';
import { CalendarIcon, ArrowRightLeft, ArrowDownUp, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import FlightResults from '@/components/flights/flight-results';
import FlightFilters from '@/components/flights/flight-filters';

export default function FlightsPage() {
  const [departDate, setDepartDate] = useState<Date | undefined>(undefined);
  const [returnDate, setReturnDate] = useState<Date | undefined>(undefined);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    setSearched(true);
  };

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Find Flights</h1>
      
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="space-y-2">
              <label htmlFor="from" className="text-sm font-medium">From</label>
              <Input 
                id="from" 
                placeholder="City or Airport"
                className="h-11"
              />
            </div>
            
            <div className="space-y-2 relative">
              <label htmlFor="to" className="text-sm font-medium">To</label>
              <div className="relative">
                <Input 
                  id="to"
                  placeholder="City or Airport"
                  className="h-11"
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-0 top-0 bottom-0"
                >
                  <ArrowRightLeft className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
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
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
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
            
            <div className="space-y-2">
              <label htmlFor="class" className="text-sm font-medium">Class</label>
              <Select defaultValue="economy">
                <SelectTrigger id="class" className="h-11">
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="economy">Economy</SelectItem>
                  <SelectItem value="premium">Premium Economy</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="first">First Class</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button className="w-full md:w-auto px-8 h-11" size="lg" onClick={handleSearch}>
            <Search className="mr-2 h-4 w-4" />
            Search Flights
          </Button>
        </CardContent>
      </Card>
      
      {searched && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-3">
            <FlightFilters />
          </div>
          <div className="md:col-span-9">
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-muted-foreground">14 flights found</p>
              <div className="flex items-center gap-2">
                <span className="text-sm">Sort by:</span>
                <Select defaultValue="price">
                  <SelectTrigger className="h-8 w-[150px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="duration">Duration: Shortest first</SelectItem>
                    <SelectItem value="departure">Departure: Earliest first</SelectItem>
                    <SelectItem value="arrival">Arrival: Earliest first</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="ghost" size="icon">
                  <ArrowDownUp className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <FlightResults />
          </div>
        </div>
      )}
    </div>
  );
}