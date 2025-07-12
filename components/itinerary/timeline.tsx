import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  MapPin, 
  ArrowDown, 
  Hotel, 
  Car, 
  Utensils, 
  Landmark, 
  Sun, 
  Wine, 
  Waves, 
  PlaneLanding, 
  TrendingUp, 
  Coffee
} from 'lucide-react';

const days = [
  {
    day: 1,
    date: "Oct 15, 2023",
    location: "San Francisco",
    activities: [
      {
        time: "11:45 AM",
        title: "Arrival at SFO",
        description: "Flight DL1234 arrives at San Francisco International Airport",
        type: "transport",
        icon: <PlaneLanding className="h-4 w-4" />
      },
      {
        time: "1:30 PM",
        title: "Check-in at Fairmont San Francisco",
        description: "Deluxe King Room with city views",
        type: "accommodation",
        icon: <Hotel className="h-4 w-4" />
      },
      {
        time: "3:00 PM",
        title: "Golden Gate Bridge Visit",
        description: "Walk or bike across the iconic bridge",
        type: "activity",
        icon: <Landmark className="h-4 w-4" />
      },
      {
        time: "7:00 PM",
        title: "Dinner at Acquerello",
        description: "Fine dining Italian restaurant with Michelin stars",
        type: "food",
        icon: <Utensils className="h-4 w-4" />
      }
    ]
  },
  {
    day: 2,
    date: "Oct 16, 2023",
    location: "San Francisco",
    activities: [
      {
        time: "9:00 AM",
        title: "Breakfast at hotel",
        description: "Buffet breakfast included with stay",
        type: "food",
        icon: <Coffee className="h-4 w-4" />
      },
      {
        time: "10:30 AM",
        title: "Alcatraz Island Tour",
        description: "Ferry to Alcatraz and audio tour of the prison",
        type: "activity",
        icon: <Landmark className="h-4 w-4" />
      },
      {
        time: "2:00 PM",
        title: "Explore Fisherman's Wharf",
        description: "Visit Pier 39, see the sea lions, and enjoy seafood",
        type: "activity",
        icon: <Waves className="h-4 w-4" />
      },
      {
        time: "8:00 PM",
        title: "Dinner at Kokkari Estiatorio",
        description: "Upscale Greek restaurant in the Financial District",
        type: "food",
        icon: <Utensils className="h-4 w-4" />
      }
    ]
  },
  {
    day: 3,
    date: "Oct 17, 2023",
    location: "San Francisco to Big Sur",
    activities: [
      {
        time: "9:00 AM",
        title: "Check-out from Fairmont",
        description: "Luggage will be stored at front desk",
        type: "accommodation",
        icon: <Hotel className="h-4 w-4" />
      },
      {
        time: "10:00 AM",
        title: "Pick up rental car",
        description: "Avis Car Rental - SUV for coastal drive",
        type: "transport",
        icon: <Car className="h-4 w-4" />
      },
      {
        time: "11:00 AM",
        title: "Drive to Monterey",
        description: "Scenic coastal drive along Highway 1 (2 hours)",
        type: "transport",
        icon: <Car className="h-4 w-4" />
      },
      {
        time: "1:30 PM",
        title: "Lunch in Monterey",
        description: "Seafood lunch at Monterey's Fish House",
        type: "food",
        icon: <Utensils className="h-4 w-4" />
      },
      {
        time: "3:00 PM",
        title: "Monterey Bay Aquarium",
        description: "Visit one of the world's best aquariums",
        type: "activity",
        icon: <Waves className="h-4 w-4" />
      },
      {
        time: "5:00 PM",
        title: "Drive to Big Sur",
        description: "Continue along Highway 1 to Big Sur (1 hour)",
        type: "transport",
        icon: <Car className="h-4 w-4" />
      },
      {
        time: "6:30 PM",
        title: "Check-in at Post Ranch Inn",
        description: "Ocean View Suite with panoramic views",
        type: "accommodation",
        icon: <Hotel className="h-4 w-4" />
      },
      {
        time: "8:00 PM",
        title: "Dinner at Sierra Mar",
        description: "Fine dining with ocean views at the hotel restaurant",
        type: "food",
        icon: <Utensils className="h-4 w-4" />
      }
    ]
  },
  {
    day: 4,
    date: "Oct 18, 2023",
    location: "Big Sur",
    activities: [
      {
        time: "8:00 AM",
        title: "Breakfast at hotel",
        description: "Gourmet breakfast included with stay",
        type: "food",
        icon: <Coffee className="h-4 w-4" />
      },
      {
        time: "10:00 AM",
        title: "Pfeiffer Beach",
        description: "Visit the purple sand beach and sea stacks",
        type: "activity",
        icon: <Sun className="h-4 w-4" />
      },
      {
        time: "2:00 PM",
        title: "Hiking in Julia Pfeiffer Burns State Park",
        description: "See McWay Falls and coastal redwoods",
        type: "activity",
        icon: <TrendingUp className="h-4 w-4" />
      },
      {
        time: "7:00 PM",
        title: "Dinner at Nepenthe",
        description: "Casual dining with spectacular coastal views",
        type: "food",
        icon: <Utensils className="h-4 w-4" />
      }
    ]
  },
  {
    day: 5,
    date: "Oct 19, 2023",
    location: "Big Sur to Los Angeles",
    activities: [
      {
        time: "9:00 AM",
        title: "Check-out from Post Ranch Inn",
        description: "Early check-out for long drive",
        type: "accommodation",
        icon: <Hotel className="h-4 w-4" />
      },
      {
        time: "10:00 AM",
        title: "Drive to Santa Barbara",
        description: "Scenic coastal drive (4 hours)",
        type: "transport",
        icon: <Car className="h-4 w-4" />
      },
      {
        time: "2:00 PM",
        title: "Lunch in Santa Barbara",
        description: "Lunch at Brophy Bros. on the harbor",
        type: "food",
        icon: <Utensils className="h-4 w-4" />
      },
      {
        time: "3:30 PM",
        title: "Wine tasting in Santa Ynez Valley",
        description: "Visit two boutique wineries in the region",
        type: "activity",
        icon: <Wine className="h-4 w-4" />
      },
      {
        time: "6:00 PM",
        title: "Drive to Los Angeles",
        description: "Continue to Beverly Hills (2 hours)",
        type: "transport",
        icon: <Car className="h-4 w-4" />
      },
      {
        time: "8:00 PM",
        title: "Check-in at The Beverly Hills Hotel",
        description: "Superior Room with garden view",
        type: "accommodation",
        icon: <Hotel className="h-4 w-4" />
      },
      {
        time: "9:00 PM",
        title: "Late dinner at Spago",
        description: "Wolfgang Puck's flagship restaurant",
        type: "food",
        icon: <Utensils className="h-4 w-4" />
      }
    ]
  }
];

export default function ItineraryTimeline() {
  return (
    <ScrollArea className="h-[800px] pr-4">
      <div className="space-y-8 relative">
        <div className="absolute left-[27px] top-6 bottom-0 w-px bg-border" />
        
        {days.map((day, index) => (
          <div key={index} className="relative">
            <div className="flex items-center mb-4 relative z-10">
              <div className="bg-primary text-primary-foreground h-14 w-14 rounded-full flex flex-col items-center justify-center mr-4">
                <span className="font-bold text-xs">DAY</span>
                <span className="font-bold text-xl">{day.day}</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">{day.date}</h3>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-muted-foreground mr-1" />
                  <span className="text-muted-foreground">{day.location}</span>
                </div>
              </div>
            </div>
            
            <div className="ml-7 pl-12 space-y-4">
              {day.activities.map((activity, actIdx) => (
                <Card key={actIdx} className="border-border/40">
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row md:items-start gap-3">
                      <div className="min-w-20 text-center md:text-left">
                        <Badge variant="outline" className="bg-muted">
                          {activity.time}
                        </Badge>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center 
                            ${activity.type === 'transport' ? 'bg-accent/10 text-accent-foreground' : ''}
                            ${activity.type === 'accommodation' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300' : ''}
                            ${activity.type === 'activity' ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300' : ''}
                            ${activity.type === 'food' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300' : ''}
                          `}>
                            {activity.icon}
                          </div>
                          <h4 className="font-medium">{activity.title}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground pl-8">{activity.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {index < days.length - 1 && (
                <div className="flex justify-center">
                  <div className="bg-muted w-8 h-8 rounded-full flex items-center justify-center">
                    <ArrowDown className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}