
import { SiteHeader } from "@/components/SiteHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <main className="container py-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center text-sasya-green">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-sasya-green/5">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-sasya-green/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-sasya-green" />
                </div>
                <CardTitle className="text-lg mb-2">Visit Us</CardTitle>
                <p className="text-sm text-slate-600">
                  Tech Park, 3rd Floor<br />
                  Whitefield, Bangalore<br />
                  Karnataka, 560066
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-sasya-green/5">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-sasya-green/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-sasya-green" />
                </div>
                <CardTitle className="text-lg mb-2">Call Us</CardTitle>
                <p className="text-sm text-slate-600">
                  +91 80 4567 8901<br />
                  Mon-Fri, 9:00 AM - 6:00 PM
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-sasya-green/5">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-sasya-green/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-sasya-green" />
                </div>
                <CardTitle className="text-lg mb-2">Email Us</CardTitle>
                <p className="text-sm text-slate-600">
                  info@aedaa.com<br />
                  support@aedaa.com
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader className="bg-sasya-green/10 pb-4">
              <CardTitle className="text-xl">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" placeholder="Write your message here..." rows={6} />
                </div>
                
                <Button type="submit" className="bg-sasya-green hover:bg-sasya-green-dark">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="mt-10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.1167254849!2d77.4884981640625!3d12.954294600000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1713188246915!5m2!1sen!2sin"
              width="100%" 
              height="400" 
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aedaa Location"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
