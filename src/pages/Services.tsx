
import { Clock, CheckCircle, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      title: "Badminton Stringing",
      description: "Professional racket stringing with premium strings",
      features: [
        "Various string types available",
        "Custom tension adjustment",
        "24-hour turnaround",
        "Expert craftsmanship"
      ],
      pricing: "Starting from ₹300",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400&h=300&fit=crop"
    },
    {
      title: "Equipment Repair",
      description: "Comprehensive repair services for all sports equipment",
      features: [
        "Cricket bat repair",
        "Racket frame restoration",
        "Shoe sole replacement",
        "Equipment restoration"
      ],
      pricing: "Starting from ₹150",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      title: "Custom Grip Wrapping",
      description: "Professional grip installation and customization",
      features: [
        "Premium grip materials",
        "Color customization",
        "Perfect thickness adjustment",
        "Sweat-resistant options"
      ],
      pricing: "Starting from ₹200",
      image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=400&h=300&fit=crop"
    },
    {
      title: "Personal Training Consultation",
      description: "Expert guidance for your fitness journey",
      features: [
        "Customized workout plans",
        "Equipment recommendations",
        "Technique coaching",
        "Progress tracking"
      ],
      pricing: "Starting from ₹500/session",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    }
  ];

  const stringTypes = [
    { name: "Yonex BG65", tension: "20-24 lbs", price: "₹300" },
    { name: "Victor VBS-66", tension: "22-26 lbs", price: "₹350" },
    { name: "Li-Ning No.1", tension: "18-24 lbs", price: "₹400" },
    { name: "Ashaway Zymax", tension: "20-28 lbs", price: "₹450" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional sports equipment services with expert craftsmanship and quick turnaround times
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </CardTitle>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-blue-600">{service.pricing}</span>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Book Service
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Badminton Stringing Details */}
        <div className="bg-white rounded-lg p-8 mb-12 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Badminton String Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stringTypes.map((string, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">{string.name}</h3>
                <p className="text-sm text-gray-600 mb-1">Tension: {string.tension}</p>
                <p className="text-lg font-bold text-blue-600">{string.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Booking Form */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Book a Service
          </h2>
          
          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Your full name" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Your phone number" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" />
            </div>
            
            <div>
              <Label htmlFor="service">Service Required</Label>
              <select id="service" className="w-full p-2 border border-gray-300 rounded-md">
                <option value="">Select a service</option>
                <option value="stringing">Badminton Stringing</option>
                <option value="repair">Equipment Repair</option>
                <option value="grip">Custom Grip Wrapping</option>
                <option value="training">Personal Training</option>
              </select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="date">Preferred Date</Label>
                <Input id="date" type="date" />
              </div>
              <div>
                <Label htmlFor="time">Preferred Time</Label>
                <Input id="time" type="time" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="details">Additional Details</Label>
              <Textarea 
                id="details" 
                placeholder="Please provide specific details about your service requirements..."
                rows={4}
              />
            </div>
            
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
              <Calendar className="w-5 h-5 mr-2" />
              Book Service
            </Button>
          </form>
        </div>

        {/* Service Info */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Service Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center">
              <Clock className="w-6 h-6 text-blue-600 mr-2" />
              <span className="text-gray-700">24-48 hour turnaround</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
              <span className="text-gray-700">Quality guarantee</span>
            </div>
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 text-blue-600 mr-2" />
              <span className="text-gray-700">Call for urgent services</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
