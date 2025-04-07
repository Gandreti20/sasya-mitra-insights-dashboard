
import { SiteHeader } from "@/components/SiteHeader";
import { MotorStatus } from "@/components/MotorStatus";
import { GateValve } from "@/components/GateValve";
import { PlantDiagram } from "@/components/PlantDiagram";
import { PredictionTable } from "@/components/PredictionTable";
import { AlertSection } from "@/components/AlertSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <main className="container py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="md:col-span-2">
            <MotorStatus />
          </div>
          <div>
            <GateValve />
          </div>
        </div>
        
        <div className="mb-6">
          <AlertSection />
        </div>
        
        <div className="mb-6">
          <PlantDiagram />
        </div>
        
        <div>
          <PredictionTable />
        </div>
      </main>
    </div>
  );
};

export default Index;
