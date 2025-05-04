
import { PlantDiagram3D } from "./PlantDiagram3D";

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

  return <PlantDiagram3D plantData={plantData} />;
};
