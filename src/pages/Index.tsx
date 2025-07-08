
import { ArrowRight, Star, ShoppingBag, Users, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Professional Dumbbell Set",
      price: "₹2,999",
      image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=300&h=200&fit=crop",
      rating: 4.8
    },
    {
      id: 2,
      name: "Yonex Badminton Racket",
      price: "₹4,500",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=300&h=200&fit=crop",
      rating: 4.9
    },
    {
      id: 3,
      name: "Premium Yoga Mat",
      price: "₹799",
      image: "https://images.unsplash.com/photo-1506629905607-df8dc7efbde4?w=300&h=200&fit=crop",
      rating: 4.7
    }
  ];

  const features = [
    {
      icon: ShoppingBag,
      title: "Quality Products",
      description: "Premium sports equipment from trusted brands"
    },
    {
      icon: Users,
      title: "Expert Service",
      description: "Professional badminton stringing and equipment repair"
    },
    {
      icon: Award,
      title: "Trusted Brand",
      description: "5+ years of serving the sports community"
    },
    {
      icon: Clock,
      title: "Quick Service",
      description: "24-48 hour turnaround on all services"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Badminton Player",
      content: "Amazing stringing service! My racket feels brand new every time.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b577?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Arjun Patel",
      role: "Gym Enthusiast",
      content: "Best place for gym equipment. Great quality and fantastic prices!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Sneha Kumar",
      role: "Cricket Coach",
      content: "Excellent service and wide range of sports equipment. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Your Sports & Fitness 
                <span className="text-yellow-300"> Destination</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Discover premium sports equipment, expert badminton stringing services, 
                and everything you need to excel in your athletic journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  <Link to="/products">
                    Shop Now <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-blue-600">
                  <Link to="/services">
                    Our Services
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
                alt="Sports equipment"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-black p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm font-medium">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose SportZone?</h2>
            <p className="text-xl text-gray-600">We're committed to providing the best sports experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Check out our most popular items</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/products">
                View All Products <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Professional Badminton Stringing</h2>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                Get your racket professionally strung with premium strings. 
                We offer various string types and tensions to match your playing style.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Multiple string options available</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Custom tension adjustment</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>24-hour turnaround time</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Expert craftsmanship</span>
                </li>
              </ul>
              <Button asChild variant="secondary" size="lg">
                <Link to="/services">
                  Book Service Now
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=500&h=400&fit=crop"
                alt="Badminton racket stringing"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -top-4 -right-4 bg-yellow-500 text-black p-3 rounded-lg shadow-lg">
                <div className="text-lg font-bold">From ₹300</div>
                <div className="text-xs">Starting Price</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real experiences from our satisfied customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Sports Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Visit our store today and discover the perfect equipment for your fitness goals. 
            Our expert team is ready to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/contact">
                Visit Our Store
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-gray-900">
              <Link to="/products">
                Shop Online
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
