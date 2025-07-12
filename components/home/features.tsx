import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaneLanding, Hotel, CalendarRange, MapPin, Clock, CreditCard, Globe, Shield } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <PlaneLanding className="h-10 w-10 text-primary" />,
      title: "Flight Search",
      description: "Find the best flights with our powerful search engine. Compare prices across hundreds of airlines."
    },
    {
      icon: <Hotel className="h-10 w-10 text-primary" />,
      title: "Hotel Booking",
      description: "Discover and book accommodations worldwide, from luxury resorts to cozy boutique hotels."
    },
    {
      icon: <CalendarRange className="h-10 w-10 text-primary" />,
      title: "Itinerary Planning",
      description: "Create detailed travel itineraries with our intuitive tools. Add flights, hotels, and activities."
    },
    {
      icon: <MapPin className="h-10 w-10 text-primary" />,
      title: "Destination Guides",
      description: "Explore comprehensive guides for popular destinations with insider tips and recommendations."
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Real-time Updates",
      description: "Get instant notifications about flight changes, hotel confirmations, and travel alerts."
    },
    {
      icon: <CreditCard className="h-10 w-10 text-primary" />,
      title: "Secure Payments",
      description: "Book with confidence using our secure payment processing and price guarantee policy."
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "24/7 Support",
      description: "Access our global support team anytime, anywhere. We're here to help with any travel needs."
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Travel Insurance",
      description: "Protect your journey with comprehensive travel insurance options for peace of mind."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Journey With Ease</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create the perfect travel experience, all in one place.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover border-border/40 h-full">
              <CardHeader className="pb-2">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-sm">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}