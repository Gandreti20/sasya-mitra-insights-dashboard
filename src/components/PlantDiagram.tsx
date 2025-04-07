
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Thermometer, Droplet } from "lucide-react";

export const PlantDiagram = () => {
  // Mock data for plant conditions
  const plantData = {
    temperature: 28,
    leafWetness: 65,
    soilMoisture: 72,
    soilTemperature: 24,
    lightIntensity: 85
  };

  return (
    <Card className="h-full">
      <CardHeader className="bg-sasya-leaf/30 pb-2">
        <CardTitle className="text-lg">Plant Conditions</CardTitle>
      </CardHeader>
      <CardContent className="pt-4 h-[calc(100%-65px)]">
        <div className="flex h-full">
          <div className="w-1/2 relative">
            {/* Plant diagram */}
            <div className="plant-container h-full relative flex flex-col items-center justify-center">
              {/* Stem */}
              <div className="w-2 h-32 bg-sasya-green rounded-full mx-auto relative">
                {/* Leaf 1 */}
                <div className="absolute -left-8 top-4 w-10 h-6 bg-sasya-leaf rounded-full transform -rotate-12"></div>
                {/* Leaf 2 */}
                <div className="absolute -right-8 top-12 w-10 h-6 bg-sasya-leaf rounded-full transform rotate-12"></div>
                {/* Leaf 3 */}
                <div className="absolute -left-8 top-20 w-10 h-6 bg-sasya-leaf rounded-full transform -rotate-12"></div>
                
                {/* Leaf Wetness Line */}
                <div className="absolute left-16 top-12 w-24 border-t border-dashed border-gray-400"></div>
                <div className="absolute left-[9.5rem] top-6 text-xs">
                  <div className="flex items-center gap-1">
                    <Leaf className="h-4 w-4 text-sasya-green" />
                    <span>Leaf Wetness: {plantData.leafWetness}%</span>
                  </div>
                </div>
                
                {/* Temperature Line */}
                <div className="absolute right-12 top-4 w-16 border-t border-dashed border-gray-400"></div>
                <div className="absolute right-[7.5rem] top-0 text-xs">
                  <div className="flex items-center gap-1">
                    <Thermometer className="h-4 w-4 text-red-500" />
                    <span>Temperature: {plantData.temperature}°C</span>
                  </div>
                </div>
                
                {/* Light Intensity line */}
                <div className="absolute -right-28 top-20 w-14 border-t border-dashed border-gray-400"></div>
                <div className="absolute -right-[7.5rem] top-16 text-xs">
                  <div className="flex items-center gap-1">
                    <svg className="h-4 w-4 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                    <span>Light: {plantData.lightIntensity}%</span>
                  </div>
                </div>
              </div>
              
              {/* Soil */}
              <div className="w-full h-16 bg-sasya-soil/70 rounded-t-xl mt-2 relative">
                {/* Soil Moisture Line */}
                <div className="absolute left-6 top-6 w-16 border-t border-dashed border-gray-400"></div>
                <div className="absolute left-[5.5rem] top-4 text-xs">
                  <div className="flex items-center gap-1">
                    <Droplet className="h-4 w-4 text-sasya-blue" />
                    <span>Soil Moisture: {plantData.soilMoisture}%</span>
                  </div>
                </div>
                
                {/* Soil Temperature Line */}
                <div className="absolute right-6 top-8 w-16 border-t border-dashed border-gray-400"></div>
                <div className="absolute right-[5.5rem] top-6 text-xs">
                  <div className="flex items-center gap-1">
                    <Thermometer className="h-4 w-4 text-orange-500" />
                    <span>Soil Temp: {plantData.soilTemperature}°C</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-1/2 flex flex-col justify-center gap-3 pl-6">
            <div className="grid grid-cols-1 gap-3">
              <Card className="p-3">
                <div className="flex items-center gap-2">
                  <Thermometer className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="text-xs text-muted-foreground">Air Temperature</p>
                    <p className="text-base font-semibold">{plantData.temperature}°C</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-3">
                <div className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-sasya-green" />
                  <div>
                    <p className="text-xs text-muted-foreground">Leaf Wetness</p>
                    <p className="text-base font-semibold">{plantData.leafWetness}%</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-3">
                <div className="flex items-center gap-2">
                  <Droplet className="h-5 w-5 text-sasya-blue" />
                  <div>
                    <p className="text-xs text-muted-foreground">Soil Moisture</p>
                    <p className="text-base font-semibold">{plantData.soilMoisture}%</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-3">
                <div className="flex items-center gap-2">
                  <Thermometer className="h-5 w-5 text-orange-500" />
                  <div>
                    <p className="text-xs text-muted-foreground">Soil Temperature</p>
                    <p className="text-base font-semibold">{plantData.soilTemperature}°C</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-3">
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
