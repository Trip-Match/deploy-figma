import Link from 'next/link';
import { PlaneLanding, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted py-12 mt-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 lg:col-span-3">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <PlaneLanding className="h-6 w-6 text-primary" />
              <span className="font-serif text-xl font-bold">Voyagr</span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Discover the world with our expertly crafted travel experiences. From flights to hotels to complete itineraries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="font-serif font-bold text-lg mb-4">Discover</h3>
            <ul className="space-y-3">
              <li><Link href="/flights" className="text-muted-foreground hover:text-primary transition-colors">Flights</Link></li>
              <li><Link href="/hotels" className="text-muted-foreground hover:text-primary transition-colors">Hotels</Link></li>
              <li><Link href="/destinations" className="text-muted-foreground hover:text-primary transition-colors">Destinations</Link></li>
              <li><Link href="/itineraries" className="text-muted-foreground hover:text-primary transition-colors">Itineraries</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="font-serif font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/press" className="text-muted-foreground hover:text-primary transition-colors">Press</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="font-serif font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link href="/help" className="text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="font-serif font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">hello@voyagr.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary mt-1" />
                <span className="text-muted-foreground">123 Travel Avenue<br />Suite 456<br />San Francisco, CA 94158</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Voyagr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}