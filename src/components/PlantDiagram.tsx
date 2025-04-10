
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Thermometer, Droplet, TreePine, SunDim } from "lucide-react";

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
            {/* SVG Tree Representation */}
            <div className="plant-container h-full relative flex flex-col items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* SVG Tree with positioning and responsive sizing */}
                <div className="relative w-4/5 h-4/5 flex items-center justify-center">
                  <div className="relative">
                    {/* Stylized tree representation using SVG */}
                    <svg width="200" height="280" viewBox="0 0 200 280" className="drop-shadow-md">
                      {/* Tree trunk */}
                      <path d="M90 280 L90 180 Q95 160 100 150 Q105 160 110 180 L110 280 Z" fill="#8B5A2B" />
                      
                      {/* Tree foliage - mango tree styled */}
                      <ellipse cx="100" cy="110" rx="80" ry="90" fill="#6DAE81" />
                      <ellipse cx="65" cy="140" rx="40" ry="50" fill="#6DAE81" />
                      <ellipse cx="135" cy="140" rx="40" ry="50" fill="#6DAE81" />
                      <ellipse cx="100" cy="80" rx="60" ry="60" fill="#6DAE81" />
                      
                      {/* Mangoes */}
                      <ellipse cx="70" cy="100" rx="12" ry="15" fill="#FEC6A1" />
                      <ellipse cx="130" cy="130" rx="12" ry="15" fill="#FEC6A1" />
                      <ellipse cx="90" cy="140" rx="12" ry="15" fill="#FEC6A1" />
                    </svg>
                  </div>
                  
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
                  <SunDim className="h-5 w-5 text-yellow-500" />
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
