
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Thermometer, Droplet, SunDim, Moon } from "lucide-react";

interface PlantDataProps {
  temperature: number;
  leafWetness: number;
  soilMoisture: number;
  soilTemperature: number;
  lightIntensity: number;
  crop: string;
}

export const PlantDiagram3D = ({ plantData }: { plantData: PlantDataProps }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isDay, setIsDay] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<string>("");
  
  // Update time every minute
  useEffect(() => {
    const updateTime = () => {
      // Get current time in India Standard Time (IST)
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      };
      const timeString = now.toLocaleTimeString('en-US', options);
      setCurrentTime(timeString);
      
      // Check if it's day or night (6 AM to 6 PM is day)
      const hour = now.getHours();
      setIsDay(hour >= 6 && hour < 18);
    };
    
    // Update immediately and then every minute
    updateTime();
    const intervalId = setInterval(updateTime, 60000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  // Create and manage the 3D scene
  useEffect(() => {
    if (!mountRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    
    // Background color based on time of day
    scene.background = new THREE.Color(isDay ? 0xb3e0ff : 0x0a1929);
    
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(
      isDay ? 0xffffff : 0x555555,
      isDay ? 0.7 : 0.3
    );
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(
      isDay ? 0xffffff : 0x5555ff,
      isDay ? 1 : 0.2
    );
    directionalLight.position.set(5, 10, 5);
    scene.add(directionalLight);
    
    // Create plant trunk (cylinder)
    const trunkGeometry = new THREE.CylinderGeometry(0.2, 0.3, 2, 16);
    const trunkMaterial = new THREE.MeshPhongMaterial({ color: 0x8B5A2B });
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.y = 0;
    scene.add(trunk);
    
    // Create leaves (multiple spheres)
    const createLeaf = (x: number, y: number, z: number, scale: number) => {
      const leafGeometry = new THREE.SphereGeometry(0.6 * scale, 16, 16);
      const leafMaterial = new THREE.MeshPhongMaterial({ color: 0x6DAE81 });
      const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
      leaf.position.set(x, y, z);
      leaf.scale.set(1, 0.7, 1); // Flatten slightly
      scene.add(leaf);
      return leaf;
    };
    
    // Create several leaves to form a tree
    const leaves = [
      createLeaf(0, 1.8, 0, 1.2),
      createLeaf(1, 1.5, 0.5, 0.8),
      createLeaf(-0.8, 1.6, 0.2, 0.9),
      createLeaf(0.5, 2.2, -0.5, 0.7),
      createLeaf(-0.5, 2, -0.7, 0.75)
    ];
    
    // Create soil (flat cylinder)
    const soilGeometry = new THREE.CylinderGeometry(2, 2, 0.2, 32);
    const soilMaterial = new THREE.MeshPhongMaterial({ color: 0x734222 });
    const soil = new THREE.Mesh(soilGeometry, soilMaterial);
    soil.position.y = -1;
    scene.add(soil);
    
    // Create celestial object (sun or moon)
    const celestialGeometry = new THREE.SphereGeometry(0.7, 32, 32);
    const celestialMaterial = new THREE.MeshBasicMaterial({
      color: isDay ? 0xffcc00 : 0xf4f1c0,
      emissive: isDay ? 0xffcc00 : 0xf4f1c0,
      emissiveIntensity: isDay ? 0.5 : 0.3
    });
    const celestialBody = new THREE.Mesh(celestialGeometry, celestialMaterial);
    celestialBody.position.set(isDay ? 5 : -5, 6, -8);
    scene.add(celestialBody);
    
    // Position camera
    camera.position.set(0, 1.5, 5);
    camera.lookAt(0, 1, 0);
    
    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Gentle animation
      leaves.forEach((leaf, i) => {
        leaf.position.y += Math.sin(Date.now() * 0.001 + i) * 0.002;
      });
      
      celestialBody.rotation.y += 0.01;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      
      // Clean up Three.js resources
      scene.clear();
      renderer.dispose();
    };
  }, [isDay]);

  return (
    <Card className="h-full">
      <CardHeader className={`${isDay ? "bg-sasya-leaf/30" : "bg-slate-800 text-white"} pb-2 flex flex-row items-center justify-between`}>
        <CardTitle className="text-lg">Plant Conditions - {plantData.crop}</CardTitle>
        <div className="flex items-center gap-2 text-sm">
          <span>{currentTime}</span>
          {isDay ? (
            <SunDim className="h-5 w-5 text-yellow-500" />
          ) : (
            <Moon className="h-5 w-5 text-blue-300" />
          )}
        </div>
      </CardHeader>
      <CardContent className={`pt-4 h-[calc(100%-65px)] ${isDay ? "bg-white" : "bg-slate-900 text-white"}`}>
        <div className="flex h-full">
          <div className="w-1/2 relative">
            {/* 3D Plant Visualization */}
            <div ref={mountRef} className="plant-container h-full relative flex flex-col items-center justify-center" style={{ minHeight: "300px" }}>
              {/* Three.js will render here */}
            </div>
            
            {/* Overlay indicators for leaf wetness */}
            <div className="absolute top-1/4 right-1/4 text-xs">
              <div className={`flex items-center gap-1 ${isDay ? "bg-white/80" : "bg-gray-800/80"} p-1 rounded shadow-sm`}>
                <Leaf className={`h-4 w-4 ${isDay ? "text-sasya-green" : "text-sasya-green/70"}`} />
                <span>Leaf: {plantData.leafWetness}%</span>
              </div>
            </div>
            
            {/* Overlay indicators for soil */}
            <div className="absolute bottom-1/4 left-1/4 text-xs">
              <div className={`flex items-center gap-1 ${isDay ? "bg-white/80" : "bg-gray-800/80"} p-1 rounded shadow-sm`}>
                <Droplet className={`h-4 w-4 ${isDay ? "text-sasya-blue" : "text-sasya-blue/70"}`} />
                <span>Soil: {plantData.soilMoisture}%</span>
              </div>
            </div>
            
            {/* Overlay for temperature */}
            <div className="absolute top-1/6 left-1/4 text-xs">
              <div className={`flex items-center gap-1 ${isDay ? "bg-white/80" : "bg-gray-800/80"} p-1 rounded shadow-sm`}>
                <Thermometer className={`h-4 w-4 ${isDay ? "text-red-500" : "text-red-400"}`} />
                <span>Temp: {plantData.temperature}°C</span>
              </div>
            </div>
            
            {/* Overlay for light */}
            <div className="absolute top-1/3 right-1/6 text-xs">
              <div className={`flex items-center gap-1 ${isDay ? "bg-white/80" : "bg-gray-800/80"} p-1 rounded shadow-sm`}>
                <SunDim className={`h-4 w-4 ${isDay ? "text-yellow-500" : "text-yellow-400"}`} />
                <span>Light: {plantData.lightIntensity}%</span>
              </div>
            </div>
          </div>
          
          <div className={`w-1/2 flex flex-col justify-center gap-3 pl-6 ${isDay ? "" : "text-gray-200"}`}>
            <div className="grid grid-cols-1 gap-3">
              <Card className={`p-3 ${isDay ? "border-sasya-green/30" : "bg-slate-800 border-slate-700"} shadow-sm`}>
                <div className="flex items-center gap-2">
                  <Thermometer className={`h-5 w-5 ${isDay ? "text-red-500" : "text-red-400"}`} />
                  <div>
                    <p className={`text-xs ${isDay ? "text-muted-foreground" : "text-gray-400"}`}>Air Temperature</p>
                    <p className="text-base font-semibold">{plantData.temperature}°C</p>
                  </div>
                </div>
              </Card>
              
              <Card className={`p-3 ${isDay ? "border-sasya-green/30" : "bg-slate-800 border-slate-700"} shadow-sm`}>
                <div className="flex items-center gap-2">
                  <Leaf className={`h-5 w-5 ${isDay ? "text-sasya-green" : "text-sasya-green/70"}`} />
                  <div>
                    <p className={`text-xs ${isDay ? "text-muted-foreground" : "text-gray-400"}`}>Leaf Wetness</p>
                    <p className="text-base font-semibold">{plantData.leafWetness}%</p>
                  </div>
                </div>
              </Card>
              
              <Card className={`p-3 ${isDay ? "border-sasya-green/30" : "bg-slate-800 border-slate-700"} shadow-sm`}>
                <div className="flex items-center gap-2">
                  <Droplet className={`h-5 w-5 ${isDay ? "text-sasya-blue" : "text-sasya-blue/70"}`} />
                  <div>
                    <p className={`text-xs ${isDay ? "text-muted-foreground" : "text-gray-400"}`}>Soil Moisture</p>
                    <p className="text-base font-semibold">{plantData.soilMoisture}%</p>
                  </div>
                </div>
              </Card>
              
              <Card className={`p-3 ${isDay ? "border-sasya-green/30" : "bg-slate-800 border-slate-700"} shadow-sm`}>
                <div className="flex items-center gap-2">
                  <Thermometer className={`h-5 w-5 ${isDay ? "text-orange-500" : "text-orange-400"}`} />
                  <div>
                    <p className={`text-xs ${isDay ? "text-muted-foreground" : "text-gray-400"}`}>Soil Temperature</p>
                    <p className="text-base font-semibold">{plantData.soilTemperature}°C</p>
                  </div>
                </div>
              </Card>
              
              <Card className={`p-3 ${isDay ? "border-sasya-green/30" : "bg-slate-800 border-slate-700"} shadow-sm`}>
                <div className="flex items-center gap-2">
                  <SunDim className={`h-5 w-5 ${isDay ? "text-yellow-500" : "text-yellow-400"}`} />
                  <div>
                    <p className={`text-xs ${isDay ? "text-muted-foreground" : "text-gray-400"}`}>Light Intensity</p>
                    <p className="text-base font-semibold">{plantData.lightIntensity}%</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
