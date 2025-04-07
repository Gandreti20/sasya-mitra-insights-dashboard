
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Thermometer, Droplet } from "lucide-react";

export const PlantDiagram = () => {
  // Mock data for plant conditions
  const plantData = {
    temperature: 28,
    leafWetness: 65,
    soilMoisture: 72,
    soilTemperature: 24,
    lightIntensity: 85,
    crop: "Mango"
  };

  return (
    <Card className="h-full">
      <CardHeader className="bg-sasya-leaf/30 pb-2">
        <CardTitle className="text-lg">Plant Conditions - {plantData.crop}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4 h-[calc(100%-65px)]">
        <div className="flex h-full">
          <div className="w-1/2 relative">
            {/* Realistic Plant Image */}
            <div className="plant-container h-full relative flex flex-col items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Tree image with positioning and responsive sizing */}
                <div className="relative w-4/5 h-4/5">
                  <img 
                    src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80" 
                    alt="Mango tree" 
                    className="object-contain w-full h-full rounded-lg opacity-90"
                  />
                  
                  {/* Measurement indicators */}
                  <div className="absolute -right-16 top-1/4 w-16 border-t border-dashed border-gray-400"></div>
                  <div className="absolute -right-[7.5rem] top-[20%] text-xs">
                    <div className="flex items-center gap-1 bg-white/80 p-1 rounded shadow-sm">
                      <Leaf className="h-4 w-4 text-sasya-green" />
                      <span>Leaf Wetness: {plantData.leafWetness}%</span>
                    </div>
                  </div>
                  
                  <div className="absolute -left-16 top-1/3 w-16 border-t border-dashed border-gray-400"></div>
                  <div className="absolute -left-[7.5rem] top-[30%] text-xs">
                    <div className="flex items-center gap-1 bg-white/80 p-1 rounded shadow-sm">
                      <Thermometer className="h-4 w-4 text-red-500" />
                      <span>Temperature: {plantData.temperature}°C</span>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 -bottom-12 border-l border-dashed border-gray-400 h-12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-[4rem] text-xs">
                    <div className="flex items-center gap-1 bg-white/80 p-1 rounded shadow-sm">
                      <Droplet className="h-4 w-4 text-sasya-blue" />
                      <span>Soil Moisture: {plantData.soilMoisture}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-1/2 flex flex-col justify-center gap-3 pl-6">
            <div className="grid grid-cols-1 gap-3">
              <Card className="p-3 border-sasya-green/30 shadow-sm">
                <div className="flex items-center gap-2">
                  <Thermometer className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="text-xs text-muted-foreground">Air Temperature</p>
                    <p className="text-base font-semibold">{plantData.temperature}°C</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-3 border-sasya-green/30 shadow-sm">
                <div className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-sasya-green" />
                  <div>
                    <p className="text-xs text-muted-foreground">Leaf Wetness</p>
                    <p className="text-base font-semibold">{plantData.leafWetness}%</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-3 border-sasya-green/30 shadow-sm">
                <div className="flex items-center gap-2">
                  <Droplet className="h-5 w-5 text-sasya-blue" />
                  <div>
                    <p className="text-xs text-muted-foreground">Soil Moisture</p>
                    <p className="text-base font-semibold">{plantData.soilMoisture}%</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-3 border-sasya-green/30 shadow-sm">
                <div className="flex items-center gap-2">
                  <Thermometer className="h-5 w-5 text-orange-500" />
                  <div>
                    <p className="text-xs text-muted-foreground">Soil Temperature</p>
                    <p className="text-base font-semibold">{plantData.soilTemperature}°C</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-3 border-sasya-green/30 shadow-sm">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                  <div>
                    <p className="text-xs text-muted-foreground">Light Intensity</p>
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
