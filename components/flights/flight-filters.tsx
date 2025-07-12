import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function FlightFilters() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-medium">Price Range</h3>
            <div className="space-y-2">
              <Slider
                defaultValue={[200, 800]}
                max={1500}
                step={10}
                className="py-4"
              />
              <div className="flex justify-between">
                <span className="text-sm">$200</span>
                <span className="text-sm">$800</span>
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div className="space-y-4">
            <h3 className="font-medium">Stops</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="direct" />
                <Label htmlFor="direct">Direct only (4)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="1stop" />
                <Label htmlFor="1stop">1 Stop (6)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="2stops" />
                <Label htmlFor="2stops">2+ Stops (4)</Label>
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div className="space-y-4">
            <h3 className="font-medium">Airlines</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="airline1" />
                <Label htmlFor="airline1">Delta Air Lines (5)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="airline2" />
                <Label htmlFor="airline2">United Airlines (3)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="airline3" />
                <Label htmlFor="airline3">American Airlines (4)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="airline4" />
                <Label htmlFor="airline4">British Airways (2)</Label>
              </div>
            </div>
            <Button variant="link" className="p-0 h-auto text-sm">Show all airlines</Button>
          </div>
          
          <Separator />
          
          <div className="space-y-4">
            <h3 className="font-medium">Departure Time</h3>
            <RadioGroup defaultValue="anytime">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="anytime" id="anytime" />
                <Label htmlFor="anytime">Anytime</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="morning" id="morning" />
                <Label htmlFor="morning">Morning (5am - 12pm)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="afternoon" id="afternoon" />
                <Label htmlFor="afternoon">Afternoon (12pm - 5pm)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="evening" id="evening" />
                <Label htmlFor="evening">Evening (5pm - 11pm)</Label>
              </div>
            </RadioGroup>
          </div>
          
          <Separator />
          
          <div className="space-y-4">
            <h3 className="font-medium">Flight Duration</h3>
            <div className="space-y-2">
              <Slider
                defaultValue={[0, 24]}
                max={30}
                step={1}
                className="py-4"
              />
              <div className="flex justify-between">
                <span className="text-sm">0h</span>
                <span className="text-sm">24h</span>
              </div>
            </div>
          </div>
          
          <Button variant="outline" className="w-full">Reset Filters</Button>
        </CardContent>
      </Card>
    </div>
  );
}