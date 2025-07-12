"use client";

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Hotel, PlaneLanding, Utensils, Landmark, Car } from 'lucide-react';

export default function ItineraryMap() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 relative bg-muted rounded-lg overflow-hidden h-[600px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-muted-foreground">
            Map Component Placeholder
            <br />
            <span className="text-sm">(Would use Leaflet/Google Maps in production)</span>
          </p>
        </div>
        
        {/* Placeholder for map markers */}
        <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-primary rounded-full flex items-center justify-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2">
          <span className="text-primary-foreground text-xs">1</span>
        </div>
        
        <div className="absolute top-1/3 left-1/2 w-6 h-6 bg-primary rounded-full flex items-center justify-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2">
          <span className="text-primary-foreground text-xs">2</span>
        </div>
        
        <div className="absolute top-1/2 left-2/3 w-6 h-6 bg-primary rounded-full flex items-center justify-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2">
          <span className="text-primary-foreground text-xs">3</span>
        </div>
        
        <div className="absolute bottom-1/3 left-3/4 w-6 h-6 bg-primary rounded-full flex items-center justify-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2">
          <span className="text-primary-foreground text-xs">4</span>
        </div>
      </div>
      
      <div>
        <h3 className="font-bold text-xl mb-4">Destinations</h3>
        
        <div className="space-y-3">
          <Card className="border-l-4 border-l-primary card-hover">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Hotel className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">San Francisco</p>
                  <p className="text-xs text-muted-foreground">Oct 15-17 • Days 1-2</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline" className="text-xs">Hotel</Badge>
                <Badge variant="outline" className="text-xs">Landmarks</Badge>
                <Badge variant="outline" className="text-xs">Food</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Landmark className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Monterey</p>
                  <p className="text-xs text-muted-foreground">Oct 17 • Day 3</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline" className="text-xs">Aquarium</Badge>
                <Badge variant="outline" className="text-xs">Food</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Hotel className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Big Sur</p>
                  <p className="text-xs text-muted-foreground">Oct 17-19 • Days 3-5</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline" className="text-xs">Hotel</Badge>
                <Badge variant="outline" className="text-xs">Beaches</Badge>
                <Badge variant="outline" className="text-xs">Hiking</Badge>
                <Badge variant="outline" className="text-xs">Food</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Utensils className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Santa Barbara</p>
                  <p className="text-xs text-muted-foreground">Oct 19 • Day 5</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline" className="text-xs">Food</Badge>
                <Badge variant="outline" className="text-xs">Wine</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Hotel className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Los Angeles</p>
                  <p className="text-xs text-muted-foreground">Oct 19-22 • Days 5-7</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline" className="text-xs">Hotel</Badge>
                <Badge variant="outline" className="text-xs">Sightseeing</Badge>
                <Badge variant="outline" className="text-xs">Food</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-6">
          <Button variant="outline" className="w-full">Show All Activities</Button>
        </div>
      </div>
    </div>
  );
}