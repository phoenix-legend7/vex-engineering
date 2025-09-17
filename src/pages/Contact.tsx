import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Office",
      details: ["123 Engineering Plaza", "Suite 400", "Tech City, TC 12345"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@vexengineering.com", "projects@vexengineering.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Ready to start your engineering project? We're here to help bring your vision to life. 
            Contact us today for a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" required className="mt-1" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" className="mt-1" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input id="company" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="projectType">Project Type</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="structural">Structural Design</SelectItem>
                            <SelectItem value="commercial">Commercial Building</SelectItem>
                            <SelectItem value="residential">Residential Project</SelectItem>
                            <SelectItem value="infrastructure">Infrastructure</SelectItem>
                            <SelectItem value="consultation">Consultation</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="budget">Project Budget Range</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-50k">Under $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                          <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                          <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                          <SelectItem value="over-1m">Over $1,000,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="timeline">Project Timeline</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate (Within 1 month)</SelectItem>
                          <SelectItem value="short">Short-term (1-3 months)</SelectItem>
                          <SelectItem value="medium">Medium-term (3-6 months)</SelectItem>
                          <SelectItem value="long">Long-term (6+ months)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Project Description *</Label>
                      <Textarea 
                        id="message" 
                        required 
                        className="mt-1 min-h-[100px]"
                        placeholder="Please describe your project requirements, goals, and any specific challenges you're facing..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="animate-fade-in">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Quick Response Promise */}
              <Card className="bg-gradient-hero text-white animate-scale-in">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">
                    Quick Response Guarantee
                  </h3>
                  <p className="text-white/90 text-sm">
                    We respond to all inquiries within 24 hours. For urgent matters, 
                    please call us directly during business hours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-muted-foreground">
              Located in the heart of Tech City's engineering district
            </p>
          </div>
          
          <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">
                Interactive map would be embedded here
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                123 Engineering Plaza, Suite 400, Tech City, TC 12345
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;