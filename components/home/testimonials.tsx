import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Maria Thompson",
    avatar: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    location: "London, UK",
    rating: 5,
    text: "Voyagr made planning our honeymoon so easy! The interface is intuitive, and we found amazing deals on flights and luxury accommodation. Will definitely use again for our next adventure."
  },
  {
    name: "David Chen",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    location: "Toronto, Canada",
    rating: 5,
    text: "As a frequent business traveler, I need reliable service. Voyagr has consistently delivered excellent options, and their itinerary management tools keep me organized. Outstanding service!"
  },
  {
    name: "Sophie Martinez",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    location: "Barcelona, Spain",
    rating: 4,
    text: "I took my family on a European vacation planned entirely through Voyagr. The destination guides were incredibly helpful, and we discovered places we would have missed otherwise."
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Travelers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from people who've explored the world with Voyagr.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover border-border/40 h-full">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-accent fill-accent" : "text-muted"}`} 
                    />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6">"{testimonial.text}"</p>
                
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}