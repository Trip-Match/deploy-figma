import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="bg-primary/5 rounded-xl p-8 md:p-12 relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Travel Community</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter and be the first to receive exclusive travel deals, insider tips, and inspiration for your next adventure.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                className="h-12 flex-1"
              />
              <Button className="h-12 px-8" size="lg">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            
            <p className="text-sm text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
          
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-primary/20 to-transparent hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}