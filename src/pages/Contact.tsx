
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Store",
      content: "123 Sports Street, Fitness District, Mumbai, Maharashtra 400001",
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 98765 43210",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@sportzone.com",
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Store Hours",
      content: "Mon-Sat: 9:00 AM - 8:00 PM\nSun: 10:00 AM - 6:00 PM",
      action: ""
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@sportzone_official",
      color: "bg-pink-500 hover:bg-pink-600"
    },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      handle: "+91 98765 43210",
      color: "bg-green-500 hover:bg-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for any questions, service bookings, or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start p-6">
                  <info.icon className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line mb-3">{info.content}</p>
                    {info.action && (
                      <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                        {info.action}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    className={`${social.color} text-white flex items-center space-x-2`}
                  >
                    <social.icon className="w-5 h-5" />
                    <span>{social.handle}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+91 98765 43210" />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <select id="subject" className="w-full p-2 border border-gray-300 rounded-md">
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="service">Service Booking</option>
                      <option value="product">Product Question</option>
                      <option value="complaint">Complaint</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you..."
                      rows={5}
                    />
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Find Our Store</h2>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Interactive Map Coming Soon</p>
                <p className="text-sm text-gray-500 mt-2">
                  123 Sports Street, Fitness District, Mumbai, Maharashtra 400001
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-red-800 mb-2">Need Urgent Service?</h3>
          <p className="text-red-700 mb-4">
            For urgent racket stringing or equipment repairs, call us directly for same-day service availability.
          </p>
          <Button className="bg-red-600 hover:bg-red-700">
            <Phone className="w-4 h-4 mr-2" />
            Call for Urgent Service
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
