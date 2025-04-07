
import { SiteHeader } from "@/components/SiteHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, MapPin, Phone, Mail, Save } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <main className="container py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Card>
              <CardHeader className="bg-sasya-green/10 pb-4">
                <CardTitle className="text-lg">User Profile</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-24 w-24 rounded-full bg-sasya-green/20 flex items-center justify-center mb-4">
                    <User className="h-12 w-12 text-sasya-green" />
                  </div>
                  <h2 className="text-xl font-semibold">Ravi Kumar</h2>
                  <p className="text-sm text-muted-foreground mb-4">Organic Farmer</p>
                  
                  <div className="w-full space-y-2 mt-4">
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>Bangalore Rural, Karnataka</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>+91 9876543210</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>ravi.kumar@example.com</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-2">
            <Card>
              <CardHeader className="bg-sasya-green/10 pb-4">
                <CardTitle className="text-lg">Account Information</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                      <Input id="firstName" defaultValue="Ravi" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                      <Input id="lastName" defaultValue="Kumar" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                    <Input id="email" type="email" defaultValue="ravi.kumar@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                    <Input id="phone" defaultValue="+91 9876543210" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="address" className="text-sm font-medium">Address</label>
                    <Input id="address" defaultValue="Plot 123, Near Village Center" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="city" className="text-sm font-medium">City/Village</label>
                      <Input id="city" defaultValue="Bangalore Rural" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="state" className="text-sm font-medium">State</label>
                      <Input id="state" defaultValue="Karnataka" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="pincode" className="text-sm font-medium">Pincode</label>
                      <Input id="pincode" defaultValue="560001" />
                    </div>
                  </div>
                  
                  <Button type="submit" className="bg-sasya-green hover:bg-sasya-green-dark">
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
