import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Award, BarChart3, Droplet, Leaf, Cpu } from "lucide-react";

type LandingPageProps = {
  onDashboardClick?: () => void;
  onLoginClick?: () => void;
};

export const LandingPage = ({ onDashboardClick, onLoginClick }: LandingPageProps) => {
  const floatingElements = [
    { id: 1, x: 0.2, y: 0.3, scale: 0.8, rotate: -20, color: 'bg-sasya-green/20' },
    { id: 2, x: 0.8, y: 0.2, scale: 0.6, rotate: 15, color: 'bg-blue-300/30' },
    { id: 3, x: 0.4, y: 0.7, scale: 0.7, rotate: 30, color: 'bg-yellow-400/30' },
    { id: 4, x: 0.7, y: 0.9, scale: 0.5, rotate: -10, color: 'bg-red-400/30' },
    { id: 5, x: 0.1, y: 0.8, scale: 0.9, rotate: 25, color: 'bg-purple-300/30' },
  ];

  const agricultureImages = [
    { id: 'photo-1466721591366-2d5fba72006d', alt: 'Farm landscape with wildlife' },
    { id: 'photo-1493962853295-0fd70327578a', alt: 'Ox on mountain terrain' },
    { id: 'photo-1465379944081-7f47de8d74ac', alt: 'Cattle in forest' },
    { id: 'photo-1469041797191-50ace28483c3', alt: 'Camels on open field' },
    { id: 'photo-1452378174528-3090a4bba7b2', alt: 'Horses behind fence' }
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {floatingElements.map(element => (
          <motion.div
            key={element.id}
            className={`absolute rounded-full ${element.color}`}
            style={{
              left: `${element.x * 100}%`,
              top: `${element.y * 100}%`,
              width: `${element.scale * 100}px`,
              height: `${element.scale * 100}px`,
              rotate: `${element.rotate}deg`,
            }}
            animate={{
              x: [`${element.x * 100 - 10}%`, `${element.x * 100 + 10}%`, `${element.x * 100 - 10}%`],
              y: [`${element.y * 100 + 5}%`, `${element.y * 100 - 5}%`, `${element.y * 100 + 5}%`],
              rotate: [`${element.rotate - 10}deg`, `${element.rotate + 10}deg`, `${element.rotate - 10}deg`],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <main className="relative">
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                A Modern Way of Farming with Sasya Mitra
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-700 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Optimize your crop irrigation with smart monitoring and control systems
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Button 
                  className="bg-sasya-green hover:bg-sasya-green-dark text-white w-full sm:w-auto"
                  onClick={onLoginClick}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  className="border-sasya-green text-sasya-green hover:bg-sasya-green/10 w-full sm:w-auto"
                  onClick={onDashboardClick}
                >
                  Go to Dashboard
                </Button>
              </motion.div>
            </div>
          </div>

          {floatingElements.map(element => (
            <motion.div
              key={`floating-${element.id}`}
              className={`absolute rounded-full ${element.color}`}
              style={{
                left: `${element.x * 100}%`,
                top: `${element.y * 100}%`,
                width: `${element.scale * 100}px`,
                height: `${element.scale * 100}px`,
                rotate: `${element.rotate}deg`,
              }}
              animate={{
                x: [`${element.x * 100 - 10}%`, `${element.x * 100 + 10}%`, `${element.x * 100 - 10}%`],
                y: [`${element.y * 100 + 5}%`, `${element.y * 100 - 5}%`, `${element.y * 100 + 5}%`],
                rotate: [`${element.rotate - 10}deg`, `${element.rotate + 10}deg`, `${element.rotate - 10}deg`],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'linear',
              }}
            />
          ))}
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Powerful Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 text-sasya-green">
                  <Droplet size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Smart Irrigation</h3>
                <p className="text-gray-600">Optimize water usage based on real-time data and weather forecasts.</p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 text-sasya-green">
                  <BarChart3 size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-time Monitoring</h3>
                <p className="text-gray-600">Monitor soil moisture, temperature, and other critical parameters remotely.</p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 text-sasya-green">
                  <Cpu size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Automated Alerts</h3>
                <p className="text-gray-600">Receive instant notifications for unusual conditions or potential issues.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">How It Works</h2>
            <Tabs defaultValue="monitor" className="w-full max-w-3xl mx-auto">
              <TabsList className="w-full bg-gray-100 rounded-full p-1 flex justify-between">
                <TabsTrigger value="monitor" className="data-[state=active]:bg-sasya-green data-[state=active]:text-white rounded-full px-4 py-2 transition-colors">Monitor</TabsTrigger>
                <TabsTrigger value="analyze" className="data-[state=active]:bg-sasya-green data-[state=active]:text-white rounded-full px-4 py-2 transition-colors">Analyze</TabsTrigger>
                <TabsTrigger value="control" className="data-[state=active]:bg-sasya-green data-[state=active]:text-white rounded-full px-4 py-2 transition-colors">Control</TabsTrigger>
              </TabsList>
              <TabsContent value="monitor" className="mt-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-sasya-green/10 p-3 rounded-full text-sasya-green">
                      <Leaf size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-800 mb-2">Connect Sensors to Your Farm</h3>
                      <p className="text-gray-700">Install our IoT sensors throughout your farm to start monitoring soil conditions, moisture levels, and environmental factors in real-time.</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="analyze" className="mt-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-sasya-green/10 p-3 rounded-full text-sasya-green">
                      <BarChart3 size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-800 mb-2">AI-Powered Analysis</h3>
                      <p className="text-gray-600">Our system analyzes the data collected to provide insights, trends, and actionable recommendations for optimizing your irrigation strategy.</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="control" className="mt-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-sasya-green/10 p-3 rounded-full text-sasya-green">
                      <Cpu size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-800 mb-2">Smart Irrigation Control</h3>
                      <p className="text-gray-600">Take control of your irrigation system with automated adjustments based on the analysis, weather forecasts, and crop-specific needs.</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-16 bg-sasya-green/5">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Trusted by Farmers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Award className="text-sasya-green mr-2" size={16} />
                  <p className="text-sm font-medium text-sasya-green">Verified Farmer</p>
                </div>
                <p className="text-gray-600 mb-4">"Sasya Mitra has revolutionized how I manage water on my farm. I've seen a 30% reduction in water usage while maintaining excellent crop health."</p>
                <p className="font-semibold text-gray-800">- Rajesh Kumar, Wheat Farmer</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Award className="text-sasya-green mr-2" size={16} />
                  <p className="text-sm font-medium text-sasya-green">Verified Farmer</p>
                </div>
                <p className="text-gray-600 mb-4">"The real-time alerts have saved my crops multiple times. I get notifications before issues become serious problems."</p>
                <p className="font-semibold text-gray-800">- Anjali Singh, Rice Grower</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Award className="text-sasya-green mr-2" size={16} />
                  <p className="text-sm font-medium text-sasya-green">Verified Farmer</p>
                </div>
                <p className="text-gray-600 mb-4">"Easy to set up and even easier to use. The interface is intuitive, and the support team is always there when I need help."</p>
                <p className="font-semibold text-gray-800">- Prakash Patel, Vegetable Farm</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Agricultural Landscapes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {agricultureImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className="overflow-hidden rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: index * 0.2, 
                    duration: 0.5 
                  }}
                >
                  <img 
                    src={`https://images.unsplash.com/photo-${image.id}?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`} 
                    alt={image.alt} 
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-gray-100 border-t">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Aedaa. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
