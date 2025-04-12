import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { motion } from "framer-motion";

type LandingPageProps = {
  onDashboardClick?: () => void;
};

export const LandingPage = ({ onDashboardClick }: LandingPageProps) => {
  const navigate = useNavigate();

  const floatingElements = [
    { id: 1, x: 0.2, y: 0.3, scale: 0.8, rotate: -20, color: 'bg-sasya-green/20' },
    { id: 2, x: 0.8, y: 0.2, scale: 0.6, rotate: 15, color: 'bg-blue-300/30' },
    { id: 3, x: 0.4, y: 0.7, scale: 0.7, rotate: 30, color: 'bg-yellow-400/30' },
    { id: 4, x: 0.7, y: 0.9, scale: 0.5, rotate: -10, color: 'bg-red-400/30' },
    { id: 5, x: 0.1, y: 0.8, scale: 0.9, rotate: 25, color: 'bg-purple-300/30' },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Animation Elements */}
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
        {/* Hero Section */}
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
                  onClick={() => navigate("/login")}
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

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Smart Irrigation</h3>
                <p className="text-gray-600">Optimize water usage based on real-time data and weather forecasts.</p>
              </div>

              {/* Feature 2 */}
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-time Monitoring</h3>
                <p className="text-gray-600">Monitor soil moisture, temperature, and other critical parameters remotely.</p>
              </div>

              {/* Feature 3 */}
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Automated Alerts</h3>
                <p className="text-gray-600">Receive instant notifications for unusual conditions or potential issues.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
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
                <p className="text-gray-700">Connect sensors to your farm to start monitoring soil conditions in real-time.</p>
              </TabsContent>
              <TabsContent value="analyze" className="mt-6">
                <p className="text-gray-700">Our system analyzes the data collected to provide insights and recommendations.</p>
              </TabsContent>
              <TabsContent value="control" className="mt-6">
                <p className="text-gray-700">Take control of your irrigation system with automated adjustments based on the analysis.</p>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      {/* Footer */}
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
