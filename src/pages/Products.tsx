
import { ShoppingCart, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "gym", name: "Gym Equipment" },
    { id: "badminton", name: "Badminton" },
    { id: "cricket", name: "Cricket" },
    { id: "football", name: "Football" },
    { id: "accessories", name: "Accessories" }
  ];

  const products = [
    {
      id: 1,
      name: "Professional Dumbbell Set",
      category: "gym",
      price: "₹2,999",
      image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=400&h=300&fit=crop",
      description: "Complete set of adjustable dumbbells for home gym"
    },
    {
      id: 2,
      name: "Yonex Badminton Racket",
      category: "badminton",
      price: "₹4,500",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400&h=300&fit=crop",
      description: "Professional grade carbon fiber badminton racket"
    },
    {
      id: 3,
      name: "Resistance Bands Set",
      category: "gym",
      price: "₹899",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      description: "Multi-resistance exercise bands with door anchor"
    },
    {
      id: 4,
      name: "Cricket Bat - English Willow",
      category: "cricket",
      price: "₹3,200",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=300&fit=crop",
      description: "Premium English willow cricket bat for professionals"
    },
    {
      id: 5,
      name: "Football - FIFA Approved",
      category: "football",
      price: "₹1,299",
      image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&h=300&fit=crop",
      description: "Official size FIFA approved football"
    },
    {
      id: 6,
      name: "Yoga Mat Premium",
      category: "accessories",
      price: "₹799",
      image: "https://images.unsplash.com/photo-1506629905607-df8dc7efbde4?w=400&h=300&fit=crop",
      description: "Non-slip premium yoga mat with carrying strap"
    },
    {
      id: 7,
      name: "Badminton Shuttlecocks",
      category: "badminton",
      price: "₹450",
      image: "https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?w=400&h=300&fit=crop",
      description: "Pack of 12 professional feather shuttlecocks"
    },
    {
      id: 8,
      name: "Water Bottle - Insulated",
      category: "accessories",
      price: "₹399",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop",
      description: "24-hour insulated stainless steel water bottle"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-xl text-gray-600">Discover our complete range of sports and fitness equipment</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="text-sm"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg font-semibold text-gray-900">{product.name}</CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {categories.find(cat => cat.id === product.category)?.name}
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <p className="text-2xl font-bold text-blue-600">{product.price}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Products;
