
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Clock, Droplet, Leaf, Sun, Thermometer, Tractor, Zap, Cpu, Database, Layout } from "lucide-react";

export const LandingPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();
  
  // Animated background elements
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [animationOffset, setAnimationOffset] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setMousePosition({ x, y });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Continuous animation for floating elements
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setAnimationOffset(prev => (prev + 1) % 100);
    }, 50);
    
    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Animated Background Elements with parallax effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-green-200 opacity-20 animate-pulse"
          style={{ 
            transform: `translate(${Math.sin(animationOffset * 0.01) * 20 + mousePosition.x * 20}px, ${Math.cos(animationOffset * 0.02) * 20 + mousePosition.y * 20}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div 
          className="absolute left-1/4 top-96 w-32 h-32 rounded-full bg-blue-200 opacity-20 animate-pulse"
          style={{ 
            animationDelay: '0.5s',
            transform: `translate(${Math.cos(animationOffset * 0.02) * 15 + mousePosition.x * -15}px, ${Math.sin(animationOffset * 0.01) * 15 + mousePosition.y * -15}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div 
          className="absolute right-1/3 bottom-1/4 w-48 h-48 rounded-full bg-green-300 opacity-10 animate-pulse"
          style={{ 
            animationDelay: '0.8s',
            transform: `translate(${Math.sin(animationOffset * 0.03) * 10 + mousePosition.x * 10}px, ${Math.cos(animationOffset * 0.02) * 10 + mousePosition.y * 10}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div 
          className="absolute left-1/5 bottom-1/3 w-40 h-40 rounded-full bg-yellow-200 opacity-10 animate-pulse"
          style={{ 
            animationDelay: '1.2s',
            transform: `translate(${Math.cos(animationOffset * 0.025) * 12 + mousePosition.x * -20}px, ${Math.sin(animationOffset * 0.015) * 12 + mousePosition.y * -20}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      </div>
      
      {/* Hero Section with parallax effect */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white z-0"></div>
        <div className="container relative z-10 pt-16 pb-20 md:pt-20 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-sasya-green-dark tracking-tight">
                Smart Agriculture Solutions for Indian Farmers
              </h1>
              <p className="text-lg text-gray-700">
                Aedaa empowers farmers with precision agriculture technology through the Sasya Mitra platform, enhancing yield and sustainability.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <Button 
                  size="lg" 
                  className="space-x-2 hover-scale"
                  onClick={() => navigate('/login')}
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="hover-scale">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div 
                className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-xl hover-scale transition-all duration-500"
                style={{ 
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * -5}deg)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <div className="absolute inset-0 bg-green-600/20 mix-blend-multiply"></div>
                <img 
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop" 
                  alt="Indian Farm with modern irrigation" 
                  className="h-full w-full object-cover"
                  style={{ 
                    transform: `scale(1.05) translateX(${mousePosition.x * -10}px) translateY(${mousePosition.y * -10}px)`,
                    transition: 'transform 0.1s ease-out'
                  }}
                />
              </div>
              <div 
                className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg animate-fade-in" 
                style={{ 
                  animationDelay: '0.6s',
                  transform: `translateX(${mousePosition.x * -15}px) translateY(${mousePosition.y * -15}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <div className="flex items-center space-x-3 text-sasya-green font-medium">
                  <Leaf className="h-5 w-5" />
                  <span>Smart Farming Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-sasya-green-dark mb-4">Transforming Agriculture With Technology</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sasya Mitra provides cutting-edge tools to optimize water usage, monitor crop health, and increase yield.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Droplet className="h-10 w-10 text-sasya-blue" />,
                title: "Smart Irrigation",
                description: "Precision water management systems that optimize usage based on soil moisture and weather forecasts."
              },
              {
                icon: <Thermometer className="h-10 w-10 text-sasya-green" />,
                title: "Crop Monitoring",
                description: "Real-time monitoring of crop health, soil conditions, and growth patterns for timely intervention."
              },
              {
                icon: <Zap className="h-10 w-10 text-sasya-brown" />,
                title: "Energy Efficient",
                description: "Sustainable solutions that reduce energy consumption and operational costs for farmers."
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="border-none shadow-md hover:shadow-lg transition-shadow hover-scale" 
                style={{ 
                  animationDelay: `${0.1 * index}s`,
                  transform: `translateY(${Math.sin((animationOffset + index * 30) * 0.03) * 5}px)`,
                  transition: 'transform 0.5s ease-out'
                }}
              >
                <CardHeader>
                  <div className="mb-2">{feature.icon}</div>
                  <CardTitle className="text-xl text-sasya-green-dark">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase with new images */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute right-10 top-10 w-40 h-40 rounded-full bg-sasya-green opacity-5"
            style={{ 
              transform: `translateY(${Math.sin(animationOffset * 0.02) * 15}px)`,
              transition: 'transform 0.5s ease-out'
            }}
          />
          <div 
            className="absolute left-10 bottom-10 w-56 h-56 rounded-full bg-sasya-blue opacity-5"
            style={{ 
              transform: `translateY(${Math.cos(animationOffset * 0.02) * 15}px)`,
              transition: 'transform 0.5s ease-out'
            }}
          />
        </div>
        
        <div className="container relative z-10">
          <h2 className="text-3xl font-bold text-sasya-green-dark mb-8 text-center animate-fade-in">Our Solutions</h2>
          
          <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="overview" className="flex items-center gap-2">
                  <Layout className="h-4 w-4" />
                  <span>Overview</span>
                </TabsTrigger>
                <TabsTrigger value="hardware" className="flex items-center gap-2">
                  <Cpu className="h-4 w-4" />
                  <span>Hardware</span>
                </TabsTrigger>
                <TabsTrigger value="software" className="flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  <span>Software</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="overview" className="space-y-4 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-sasya-green-dark">Sasya Mitra Ecosystem</h3>
                  <p className="text-gray-700 mb-4">
                    Our complete agricultural solution combines IoT hardware with intuitive software to give farmers complete control over their fields.
                  </p>
                  <ul className="space-y-2">
                    {["Soil moisture sensors", "Automated irrigation valves", "Weather monitoring", "Cloud analytics"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Leaf className="h-3 w-3 text-sasya-green" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg hover-scale">
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop" 
                    alt="Farming Technology Control Center" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="hardware" className="space-y-4 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="rounded-xl overflow-hidden shadow-lg order-2 md:order-1 hover-scale">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
                    alt="Smart Agricultural Sensors Circuit Board" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-semibold mb-4 text-sasya-green-dark">Smart Field Devices</h3>
                  <p className="text-gray-700 mb-4">
                    Our hardware components are built to withstand harsh field conditions while providing reliable data and control.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Solar-powered sensors with long battery life",
                      "Water-resistant control units",
                      "Easy installation with minimal maintenance",
                      "Mesh network connectivity for remote fields"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-1">
                          <Leaf className="h-3 w-3 text-sasya-green" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="software" className="space-y-4 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-sasya-green-dark">Intuitive Management Platform</h3>
                  <p className="text-gray-700 mb-4">
                    Our software dashboard provides farmers with actionable insights and easy control of their irrigation systems.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Mobile app for on-the-go management",
                      "Automated scheduling based on weather forecasts",
                      "Crop-specific irrigation recommendations",
                      "Historical data analysis for optimization"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-1">
                          <Leaf className="h-3 w-3 text-sasya-green" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg hover-scale">
                  <img 
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format&fit=crop" 
                    alt="Farm Management Dashboard Software" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-sasya-green-dark mb-12 text-center">What Farmers Say</h2>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {[
                {
                  quote: "Sasya Mitra has transformed how I manage irrigation. My water usage is down 30% while crop yields have increased.",
                  name: "Rajesh Patel",
                  role: "Wheat Farmer, Gujarat",
                  image: "https://images.unsplash.com/photo-1595246332766-115a231d354f?q=80&w=2070&auto=format&fit=crop"
                },
                {
                  quote: "The system is so easy to use, even for someone like me who isn't tech-savvy. The mobile alerts have saved my crops multiple times.",
                  name: "Sunita Devi",
                  role: "Rice Farmer, Bihar",
                  image: "https://images.unsplash.com/photo-1593526411462-6fad0fc83637?q=80&w=2070&auto=format&fit=crop"
                },
                {
                  quote: "The customer support from Aedaa is outstanding. They helped me set up the entire system and are always available when I need help.",
                  name: "Venkatesh Rao",
                  role: "Sugarcane Grower, Karnataka",
                  image: "https://images.unsplash.com/photo-1590402494587-44b71d7772f6?q=80&w=2070&auto=format&fit=crop"
                }
              ].map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-6">
                    <Card className="border-none shadow-lg">
                      <CardContent className="pt-6">
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                          <div className="w-24 h-24 rounded-full overflow-hidden shrink-0">
                            <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                            <div>
                              <h4 className="font-semibold text-sasya-green-dark">{testimonial.name}</h4>
                              <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative static translate-y-0 left-0 mr-2" />
              <CarouselNext className="relative static translate-y-0 right-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-sasya-green bg-opacity-10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold text-sasya-green-dark mb-4">Ready to Transform Your Farm?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Join thousands of Indian farmers who are already benefiting from Sasya Mitra's smart agriculture solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="space-x-2 hover-scale"
                onClick={() => navigate('/login')}
              >
                <span>Get Started Today</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="hover-scale">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-sasya-green/90">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="rgba(255,255,255,0.2)" />
                    <path d="M15 8.5C15 10.433 13.433 12 11.5 12C9.567 12 8 10.433 8 8.5C8 6.567 9.567 5 11.5 5C13.433 5 15 6.567 15 8.5Z" stroke="currentColor" fill="rgba(255,255,255,0.2)" strokeWidth="2" />
                    <path d="M12 12V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-sasya-green">Aedaa</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Smart agriculture solutions for the modern Indian farmer.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-sasya-green transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-sasya-green transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-sasya-green transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-sasya-green">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-sasya-green">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-sasya-green">Case Studies</a></li>
                <li><a href="#" className="text-gray-600 hover:text-sasya-green">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-sasya-green">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-sasya-green">Team</a></li>
                <li><a href="#" className="text-gray-600 hover:text-sasya-green">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-sasya-green">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sasya-green mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">Bengaluru, Karnataka, India</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sasya-green mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600">info@aedaa.in</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sasya-green mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-600">+91 9876543210</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} Aedaa. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
