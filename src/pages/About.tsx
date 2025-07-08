
import { Award, Users, Clock, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Customers", value: "500+" },
    { icon: Clock, label: "Years in Business", value: "5+" },
    { icon: Award, label: "Products Sold", value: "2000+" },
    { icon: Heart, label: "Services Completed", value: "1000+" }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We believe in providing only the highest quality equipment and services to our customers.",
      icon: Award
    },
    {
      title: "Expert Guidance",
      description: "Our team has years of experience in sports and fitness to guide you to the right choices.",
      icon: Users
    },
    {
      title: "Customer Focus",
      description: "Every decision we make is centered around providing the best experience for our customers.",
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About SportZone</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in sports and fitness, dedicated to helping you achieve your athletic goals
          </p>
        </div>

        {/* Main Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              SportZone was born out of a passion for sports and fitness. What started as a small dream 
              has grown into a comprehensive sports equipment destination that serves athletes of all levels, 
              from beginners to professionals.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We understand that the right equipment can make all the difference in your performance. 
              That's why we carefully curate our products, ensuring that every item meets our high 
              standards for quality, durability, and functionality.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Beyond just selling equipment, we've built our reputation on providing expert services 
              like professional badminton stringing, equipment repairs, and personalized consultations. 
              Our goal is to be more than just a store – we want to be your sports partner.
            </p>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
              alt="Sports equipment in store"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <value.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-blue-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            To empower athletes and fitness enthusiasts of all levels by providing top-quality equipment, 
            expert services, and personalized guidance that helps them reach their full potential in sports and fitness.
          </p>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Meet Our Team</h2>
          <div className="text-center max-w-3xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1581891904349-6e44c42644a7?w=300&h=300&fit=crop&crop=face"
              alt="Store owner"
              className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Raj Patel</h3>
            <p className="text-lg text-blue-600 mb-4">Founder & Owner</p>
            <p className="text-gray-700 leading-relaxed">
              With over 10 years of experience in sports retail and a passion for badminton, 
              Raj founded SportZone to share his love for sports and help others excel in their athletic pursuits. 
              He personally oversees all stringing services and ensures every customer gets the best advice.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
