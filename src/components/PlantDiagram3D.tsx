
import { useRef, useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Thermometer, Droplet, SunDim, Moon } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Mock data for plant conditions
const plantData = {
  temperature: 28,
  leafWetness: 65,
  soilMoisture: 72,
  soilTemperature: 24,
  lightIntensity: 85,
  crop: "Mango"
};

// Create a 3D tree model
const Tree = (props: any) => {
  const group = useRef<THREE.Group>(null);
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.002;
    }
  });

  // Simple tree geometry using primitives
  return (
    <group ref={group} {...props}>
      {/* Tree trunk */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.5, 2, 8]} />
        <meshStandardMaterial color="#8B5A2B" roughness={0.8} />
      </mesh>
      
      {/* Tree foliage */}
      <mesh position={[0, 2, 0]}>
        <sphereGeometry args={[1.5, 16, 16]} />
        <meshStandardMaterial color="#6DAE81" roughness={0.7} />
      </mesh>
      
      <mesh position={[-0.7, 1.5, 0]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="#6DAE81" roughness={0.7} />
      </mesh>
      
      <mesh position={[0.7, 1.5, 0]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="#6DAE81" roughness={0.7} />
      </mesh>
      
      {/* Fruits */}
      <mesh position={[-0.9, 1.3, 0.8]}>
        <sphereGeometry args={[0.2, 8, 8]} />
        <meshStandardMaterial color="#FEC6A1" roughness={0.5} />
      </mesh>
      
      <mesh position={[0.8, 1.2, -0.5]}>
        <sphereGeometry args={[0.2, 8, 8]} />
        <meshStandardMaterial color="#FEC6A1" roughness={0.5} />
      </mesh>
      
      <mesh position={[0.1, 2.4, 0.6]}>
        <sphereGeometry args={[0.2, 8, 8]} />
        <meshStandardMaterial color="#FEC6A1" roughness={0.5} />
      </mesh>
      
      {/* Ground/soil */}
      <mesh position={[0, -1.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.5, 1.5, 0.5, 32]} />
        <meshStandardMaterial color="#8B4513" roughness={1} />
      </mesh>
    </group>
  );
};

// Create environmental celestial body (sun/moon)
const CelestialBody = ({ isDay }: { isDay: boolean }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.z += 0.01;
    }
  });
  
  return (
    <mesh ref={ref} position={[6, 4, -10]}>
      {isDay ? (
        <>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial color="#FFD700" emissive="#FFFF00" emissiveIntensity={1} />
        </>
      ) : (
        <>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.5} />
        </>
      )}
    </mesh>
  );
};

// Scene with ambient lighting based on time of day
const Scene = ({ isDay }: { isDay: boolean }) => {
  return (
    <>
      <ambientLight intensity={isDay ? 0.8 : 0.3} />
      <directionalLight position={[10, 10, 5]} intensity={isDay ? 1 : 0.2} />
      <Tree position={[0, -1, 0]} />
      <CelestialBody isDay={isDay} />
      <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 6} maxPolarAngle={Math.PI / 2} />
      
      {/* Floating indicators */}
      <group>
        {/* Leaf Wetness Indicator */}
        <mesh position={[0, 2, 2]}>
          <planeGeometry args={[2, 0.5]} />
          <meshBasicMaterial color={isDay ? "#ffffff" : "#333333"} transparent opacity={0.8} />
        </mesh>
        
        {/* Soil Moisture/Temperature Indicator */}
        <mesh position={[0, -1.5, 2]}>
          <planeGeometry args={[2, 0.5]} />
          <meshBasicMaterial color={isDay ? "#ffffff" : "#333333"} transparent opacity={0.8} />
        </mesh>
      </group>
    </>
  );
};

export const PlantDiagram3D = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isDay, setIsDay] = useState(true);
  
  useEffect(() => {
    // Update time every minute
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      
      // Determine if it's day or night (6 AM to 6 PM is day)
      const hours = now.getHours();
      setIsDay(hours >= 6 && hours < 18);
    }, 60000);
    
    // Set initial day/night state
    const hours = new Date().getHours();
    setIsDay(hours >= 6 && hours < 18);
    
    return () => clearInterval(interval);
  }, []);
  
  // Format time to 12-hour format with AM/PM
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit', 
      hour12: true 
    });
  };
  
  return (
    <Card className="h-full overflow-hidden">
      <CardHeader className="bg-sasya-leaf/30 pb-2">
        <CardTitle className="text-lg flex justify-between items-center">
          <span>Plant Conditions - {plantData.crop}</span>
          <span className="text-sm font-normal">
            {formatTime(currentTime)}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4 h-[calc(100%-65px)] p-0 relative">
        <div className={`absolute inset-0 z-0 transition-colors duration-1000 ${isDay ? 'bg-gradient-to-b from-blue-300/30 to-white' : 'bg-gradient-to-b from-[#1A1F2C] to-[#000000e6]'}`}>
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <Scene isDay={isDay} />
          </Canvas>
          
          {/* Overlay UI elements */}
          <div className="absolute top-10 right-10 z-10 flex flex-col items-end space-y-2">
            <div className={`flex items-center gap-2 bg-white/80 dark:bg-black/40 p-2 rounded-lg shadow-md ${isDay ? 'text-black' : 'text-white'}`}>
              {isDay ? (
                <SunDim className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-300" />
              )}
              <span className="text-sm">{plantData.temperature}°C</span>
            </div>
            
            <div className={`flex items-center gap-2 bg-white/80 dark:bg-black/40 p-2 rounded-lg shadow-md ${isDay ? 'text-black' : 'text-white'}`}>
              <SunDim className="h-5 w-5 text-yellow-500" />
              <span className="text-sm">Light: {plantData.lightIntensity}%</span>
            </div>
          </div>
          
          {/* Leaf wetness overlay */}
          <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 z-10">
            <div className={`flex items-center gap-2 bg-white/80 dark:bg-black/40 p-2 rounded-lg shadow-md ${isDay ? 'text-black' : 'text-white'}`}>
              <Leaf className="h-5 w-5 text-sasya-green" />
              <span className="text-sm">Leaf: {plantData.leafWetness}%</span>
            </div>
          </div>
          
          {/* Soil indicators overlay */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center space-y-2">
            <div className={`flex items-center gap-2 bg-white/80 dark:bg-black/40 p-2 rounded-lg shadow-md ${isDay ? 'text-black' : 'text-white'}`}>
              <Droplet className="h-5 w-5 text-sasya-blue" />
              <span className="text-sm">Soil Moisture: {plantData.soilMoisture}%</span>
            </div>
            
            <div className={`flex items-center gap-2 bg-white/80 dark:bg-black/40 p-2 rounded-lg shadow-md ${isDay ? 'text-black' : 'text-white'}`}>
              <Thermometer className="h-5 w-5 text-orange-500" />
              <span className="text-sm">Soil Temp: {plantData.soilTemperature}°C</span>
            </div>
          </div>
        </div>
        
        {/* Side panel with readings */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/70 dark:bg-black/30 p-4 backdrop-blur-sm border-l border-gray-200 dark:border-gray-800 overflow-y-auto">
          <h3 className={`font-semibold mb-3 ${isDay ? 'text-gray-800' : 'text-white'}`}>Sensor Readings</h3>
          <div className="grid grid-cols-1 gap-3">
            <Card className={`p-3 border-sasya-green/30 shadow-sm ${isDay ? 'bg-white' : 'bg-gray-900 text-white'}`}>
              <div className="flex items-center gap-2">
                <Thermometer className="h-5 w-5 text-red-500" />
                <div>
                  <p className="text-xs text-muted-foreground">Air Temperature</p>
                  <p className="text-base font-semibold">{plantData.temperature}°C</p>
                </div>
              </div>
            </Card>
            
            <Card className={`p-3 border-sasya-green/30 shadow-sm ${isDay ? 'bg-white' : 'bg-gray-900 text-white'}`}>
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-sasya-green" />
                <div>
                  <p className="text-xs text-muted-foreground">Leaf Wetness</p>
                  <p className="text-base font-semibold">{plantData.leafWetness}%</p>
                </div>
              </div>
            </Card>
            
            <Card className={`p-3 border-sasya-green/30 shadow-sm ${isDay ? 'bg-white' : 'bg-gray-900 text-white'}`}>
              <div className="flex items-center gap-2">
                <Droplet className="h-5 w-5 text-sasya-blue" />
                <div>
                  <p className="text-xs text-muted-foreground">Soil Moisture</p>
                  <p className="text-base font-semibold">{plantData.soilMoisture}%</p>
                </div>
              </div>
            </Card>
            
            <Card className={`p-3 border-sasya-green/30 shadow-sm ${isDay ? 'bg-white' : 'bg-gray-900 text-white'}`}>
              <div className="flex items-center gap-2">
                <Thermometer className="h-5 w-5 text-orange-500" />
                <div>
                  <p className="text-xs text-muted-foreground">Soil Temperature</p>
                  <p className="text-base font-semibold">{plantData.soilTemperature}°C</p>
                </div>
              </div>
            </Card>
            
            <Card className={`p-3 border-sasya-green/30 shadow-sm ${isDay ? 'bg-white' : 'bg-gray-900 text-white'}`}>
              <div className="flex items-center gap-2">
                <SunDim className="h-5 w-5 text-yellow-500" />
                <div>
                  <p className="text-xs text-muted-foreground">Light Intensity</p>
                  <p className="text-base font-semibold">{plantData.lightIntensity}%</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
