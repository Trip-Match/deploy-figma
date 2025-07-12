"use client";

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaneLanding, Hotel, MapPin, Calendar, Share2, Download, Heart, Edit, Trash2 } from 'lucide-react';
import ItineraryTimeline from '@/components/itinerary/timeline';
import ItineraryMap from '@/components/itinerary/map';

export default function ItineraryPage({ params }: { params: { id: string } }) {
  const [liked, setLiked] = useState(false);
  
  const toggleLike = () => setLiked(!liked);
  
  return (
    <div className="container-custom py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
              Trip Itinerary
            </Badge>
            <Badge variant="outline" className="bg-accent/10 text-accent-foreground border-accent/30">
              7 Days
            </Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">California Coastal Adventure</h1>
          <p className="text-muted-foreground mt-1">Oct 15 - Oct 22, 2023</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className={`flex items-center gap-2 ${liked ? 'text-red-500 hover:text-red-600' : ''}`}
            onClick={toggleLike}
          >
            <Heart className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
            {liked ? 'Saved' : 'Save'}
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Edit className="h-4 w-4" />
            Edit
          </Button>
        </div>
      </div>
      
      <div className="flex items-center gap-3 mb-8">
        <Avatar>
          <AvatarImage src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">Created by John Doe</p>
          <p className="text-sm text-muted-foreground">Last updated 2 days ago</p>
        </div>
      </div>
      
      <Card className="border-border/40 mb-8">
        <CardContent className="p-6">
          <p className="text-lg mb-4">
            Explore the stunning California coast from San Francisco to Los Angeles, with stops at iconic beaches, vineyards, and coastal towns. This 7-day itinerary includes accommodations, transportation, and suggested activities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Destinations</p>
                <p className="font-medium">San Francisco, Monterey, Big Sur, Santa Barbara, Los Angeles</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-medium">7 Days, 6 Nights</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <PlaneLanding className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Transportation</p>
                <p className="font-medium">Flights, Rental Car</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="timeline" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
          <TabsTrigger value="timeline" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Timeline</span>
          </TabsTrigger>
          <TabsTrigger value="map" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Map</span>
          </TabsTrigger>
          <TabsTrigger value="details" className="flex items-center gap-2">
            <Hotel className="h-4 w-4" />
            <span>Details</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="timeline" className="mt-0">
          <ItineraryTimeline />
        </TabsContent>
        
        <TabsContent value="map" className="mt-0">
          <ItineraryMap />
        </TabsContent>
        
        <TabsContent value="details" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Flights</h2>
              <Card className="border-border/40 mb-4">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 relative rounded-full overflow-hidden bg-muted">
                      <PlaneLanding className="h-5 w-5 absolute inset-0 m-auto" />
                    </div>
                    <div>
                      <p className="font-medium">Outbound Flight</p>
                      <p className="text-sm text-muted-foreground">Delta Air Lines • DL1234</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Departure</p>
                      <p className="font-medium">JFK, New York</p>
                      <p className="text-sm">Oct 15, 2023 • 8:30 AM</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Arrival</p>
                      <p className="font-medium">SFO, San Francisco</p>
                      <p className="text-sm">Oct 15, 2023 • 11:45 AM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-border/40">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 relative rounded-full overflow-hidden bg-muted">
                      <PlaneLanding className="h-5 w-5 absolute inset-0 m-auto" />
                    </div>
                    <div>
                      <p className="font-medium">Return Flight</p>
                      <p className="text-sm text-muted-foreground">Delta Air Lines • DL5678</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Departure</p>
                      <p className="font-medium">LAX, Los Angeles</p>
                      <p className="text-sm">Oct 22, 2023 • 3:15 PM</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Arrival</p>
                      <p className="font-medium">JFK, New York</p>
                      <p className="text-sm">Oct 22, 2023 • 11:45 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Accommodations</h2>
              <Card className="border-border/40 mb-4">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 relative rounded-full overflow-hidden bg-muted">
                      <Hotel className="h-5 w-5 absolute inset-0 m-auto" />
                    </div>
                    <div>
                      <p className="font-medium">Fairmont San Francisco</p>
                      <p className="text-sm text-muted-foreground">Oct 15-17 • 2 nights</p>
                    </div>
                  </div>
                  
                  <p className="text-sm mb-2">950 Mason St, San Francisco, CA 94108</p>
                  <p className="text-sm text-muted-foreground mb-3">Deluxe King Room • Breakfast included</p>
                  <p className="font-medium">$459 per night</p>
                </CardContent>
              </Card>
              
              <Card className="border-border/40 mb-4">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 relative rounded-full overflow-hidden bg-muted">
                      <Hotel className="h-5 w-5 absolute inset-0 m-auto" />
                    </div>
                    <div>
                      <p className="font-medium">Post Ranch Inn</p>
                      <p className="text-sm text-muted-foreground">Oct 17-19 • 2 nights</p>
                    </div>
                  </div>
                  
                  <p className="text-sm mb-2">47900 CA-1, Big Sur, CA 93920</p>
                  <p className="text-sm text-muted-foreground mb-3">Ocean View Suite • Breakfast included</p>
                  <p className="font-medium">$1,200 per night</p>
                </CardContent>
              </Card>
              
              <Card className="border-border/40">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 relative rounded-full overflow-hidden bg-muted">
                      <Hotel className="h-5 w-5 absolute inset-0 m-auto" />
                    </div>
                    <div>
                      <p className="font-medium">The Beverly Hills Hotel</p>
                      <p className="text-sm text-muted-foreground">Oct 19-22 • 3 nights</p>
                    </div>
                  </div>
                  
                  <p className="text-sm mb-2">9641 Sunset Blvd, Beverly Hills, CA 90210</p>
                  <p className="text-sm text-muted-foreground mb-3">Superior Room • Breakfast included</p>
                  <p className="font-medium">$895 per night</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}